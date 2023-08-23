import express from "express"; 
import {
  getVehicles,
  getVehiclesFiltered,
  getMakes,
  getModels,
  getYears,
  getPrices,
  deleteVehicle,
  addVehicle, 
  vehiclesForManager
} from "../controllers/vehicle.js";

const router = express.Router();

router.get("/", getVehicles);
router.post("/filtered", getVehiclesFiltered);
router.post("/makes", getMakes);
router.post("/models", getModels);
router.post("/years", getYears);
router.post("/prices", getPrices);
router.post("/delete", deleteVehicle);
router.post("/add", addVehicle);
router.post("/vehiclesForManager", vehiclesForManager);

export default router;
