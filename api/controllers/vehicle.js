import { db } from "../connect.js";

export const getVehicles = (req, res) => {
  const q =
    "SELECT VehicleId,FuelType,Brand,OwnerFirmId,Photo,FirmName FROM vehicle,firm  Where vehicle.OwnerFirmId = firm.FirmId";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const getVehiclesFiltered = (req, res) => {
  const filters = [];
  const params = [];

  if (req.body.model !== null && req.body.model !== undefined) {
    filters.push("Brand = ?");
    params.push(req.body.model);
  }

  if (req.body.make !== null && req.body.make !== undefined) {
    filters.push("Make = ?");
    params.push(req.body.make);
  }

  if (req.body.year !== null && req.body.year !== undefined) {
    filters.push("YearOfProduction = ?");
    params.push(req.body.year);
  }

  if (req.body.price !== null && req.body.price !== undefined) {
    filters.push("Price = ?");
    params.push(req.body.price);
  }

  // Construct the query
  let q =
    "SELECT *  FROM vehicle,firm  Where vehicle.OwnerFirmId = firm.FirmId AND ";
  if (filters.length > 0) {
    q += filters.join(" AND ");
  }

  db.query(q, params, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const getMakes = (req, res) => {
  const q = "SELECT DISTINCT Make FROM ?";
    db.query(q, [req.body.type], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
    });
};
export const getModels = (req, res) => {
  const q = "SELECT DISTINCT Brand FROM vehicle Where Make = ?";
  db.query(q, [req.body.make], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const getYears = (req, res) => {
  const q =
    "SELECT DISTINCT YearOfProduction FROM vehicle Where Make = ? AND Brand = ?";
  db.query(q, [req.body.make, req.body.brand], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
export const getPrices = (req, res) => {
  const q =
    "SELECT DISTINCT Price FROM vehicle Where Make = ? AND Brand = ? AND YearOfProduction = ?";
  db.query(q, [req.body.make, req.body.brand, req.body.year], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};
