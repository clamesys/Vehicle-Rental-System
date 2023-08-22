import express from "express";
import {} from "../controllers/vehicle.js";
import {
  getVehicles,
  getVehiclesFiltered,
  getMakes,
  getModels,
  getYears,
  getPrices,
} from "../controllers/vehicle.js";

const router = express.Router();

router.get("/", getVehicles);
router.post("/filtered", getVehiclesFiltered);
router.post("/makes", getMakes);
router.post("/models", getModels);
router.post("/years", getYears);
router.post("/prices", getPrices);

export default router;
