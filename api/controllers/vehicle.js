import {db} from "../connect.js"


export const getVehicles = (req,res) => {
    const q= 'SELECT FuelType,Brand,OwnerFirmId,Photo,FirmName FROM vehicle,firm  Where vehicle.OwnerFirmId = firm.FirmId';
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    });

}
 