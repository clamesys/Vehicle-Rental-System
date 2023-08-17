import express from 'express';
import {  } from '../controllers/vehicle.js';
import { getVehicles } from '../controllers/vehicle.js'; 

const router = express.Router();

router.get('/', getVehicles); 

export default router;