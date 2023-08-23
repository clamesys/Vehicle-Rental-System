import {db} from "../connect.js"


export const getUserRents = (req, res) => {
    const filters = [];
    const params = []; 

    if (req.body.name !== null && req.body.name !== undefined) {
        filters.push('Name = ?');
        params.push(req.body.name);
    }

    if (req.body.email !== null && req.body.email !== undefined) {
        filters.push('Email = ?');
        params.push(req.body.email);
    }

    if (req.body.age !== null && req.body.age !== undefined) {
        filters.push('Age = ?');
        params.push(req.body.age);
    }

    if (req.body.address !== null && req.body.address !== undefined) {
        filters.push('Adress = ?');
        params.push(req.query.address);
    }

    if (req.body.telNo !== null && req.body.telNo !== undefined) {
        filters.push('TelNo = ?');
        params.push(req.body.telNo);
    }

    let userQuery = 'SELECT * FROM user';
    if (filters.length > 0) {
        userQuery += ' WHERE ' + filters.join(' AND ');
    }

    db.query(userQuery, params, (userErr, userData) => {
        if (userErr) return res.status(500).json(userErr);
        
        if (userData.length === 0) {
            return res.status(200).json([]); // No users found with given filters
        }

        // Extract user IDs from the retrieved user data
        const userIds = userData.map(user => user.UserId); // Assuming 'id' is the identifier column

        // Construct the query to get rented cars for the retrieved user IDs
        let carQuery = 'SELECT * FROM userrentsvehicle,firm WHERE RenterUserId IN (?) And OwnerFirmId = FirmId';
        db.query(carQuery, [userIds], (carErr, carData) => {
            if (carErr) return res.status(500).json(carErr);

            // Combine user data and car data as needed
            const result = {
                users: userData,
                rentedCars: carData
            };

            return res.status(200).json(result);
        });
    });
};

export const insertRent = (req, res) => {
    const q1 = 'INSERT INTO userrentsvehicle (RentedVehicleId, RenterUserId, PickupLocation, DropOfLocation, OwnerFirmId, RentalStart, RentalEnd) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(q1, [req.body.vehicleId, req.body.renterUserId, req.body.PickupLocation, req.body.DropOfLocation, req.body.OwnerFirmId, req.body.RentalStart, req.body.RentalEnd], (err, data) => {
        if (err) return res.status(500).json(err);
    });
    const q2 = 'UPDATE vehicle SET InUse = 1 WHERE VehicleId = ?';
    db.query(q2, [req.body.vehicleId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
    return null;
};

export const deleteRent = (req, res) => {
    const q = 'DELETE FROM userrentsvehicle WHERE RentID = ?';
    db.query(q, [req.body.keyId], (err, data) => {
        
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
}
export const endRent = (req, res) => {
    const q = 'UPDATE vehicle SET InUse = 0 WHERE VehicleId = ?';
    db.query(q, [req.body.plate], (err, data) => {
        
        if (err) return res.status(500).json(err);
    });
    const q2 = 'UPDATE userrentsvehicle SET DropOfLocation = ? , RentalEnd  = ?  WHERE RentId = ?';
    db.query(q2, [req.body.location,req.body.endDate ,req.body.keyId], (err, data) => {
        
        if (err) return res.status(500).json(err);
        return res.status(200).json();
    });
    return res.status(200).json();
}
export const fetchInUseVehicles = (req, res) => { 
    const q = 'select * from vehicle join userrentsvehicle on vehicle.VehicleId = userrentsvehicle.RentedVehicleId where InUse = 1 and RenterUserId = ?';
    db.query(q, [req.body.UserId], (err, data) => {
            
            if (err) return res.status(500).json(err); 
            return res.status(200).json(data);
        }
    );
}