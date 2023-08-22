import express from 'express';
import { getUserRents,insertRent,deleteRent } from '../controllers/rent.js';
const router = express.Router();


router.post('/filtered',getUserRents);
router.post('/del',deleteRent);
router.post('/insert',insertRent);

export default router;