import express from 'express';
import { getUserRents,insertRent,deleteRent, fetchInUseVehicles, endRent } from '../controllers/rent.js';
const router = express.Router();


router.post('/filtered',getUserRents);
router.post('/del',deleteRent);
router.post('/insert',insertRent);
router.post('/inUseVehicles',fetchInUseVehicles);
router.post('/endRent',endRent);

export default router;