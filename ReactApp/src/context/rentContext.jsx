
import axios from "axios";
const API_URL = "http://localhost:8800";

export const fetchUsersRents = async (
    name,
    email,
    age,
    address,
    telNo,
) => {
    const filters = {};

    if (name !== null && name !== undefined && name.length>0) {
        filters.name = name;
    }

    if (email !== null && email !== undefined && email.length>0) {
        filters.email = email;
    }

    if (age !== null && age !== undefined && age >0) {
        filters.age = age;
    }

    if (address !== null && address !== undefined &&  address.length>0) {
        filters.address = address;
    }

    if (telNo !== null && telNo !== undefined && telNo !== 0) {
        filters.telNo = telNo;
    }
    try {
        const response = await axios.post(
            API_URL + "/api/rents/filtered",
            filters,
            { withCredentials: true }
        );
        if(response.data) {
            return response.data;
        }
        return []; 
    } catch (error) {
        console.log("Failed to fetch vehicle");
    }
}


export const insertRent = async (
    vehicleId,
    renterUserId,
    PickupLocation,
    DropOfLocation,
    OwnerFirmId,
    RentalStart,
    RentalEnd) => {
        console.log(vehicleId, renterUserId, PickupLocation, DropOfLocation, OwnerFirmId, RentalStart, RentalEnd);
    try {
        const response = await axios.post(
            API_URL + "/api/rents/insert",
            {
                vehicleId: vehicleId,
                renterUserId: parseInt(renterUserId),
                PickupLocation: PickupLocation,
                DropOfLocation: DropOfLocation,
                OwnerFirmId:  parseInt(OwnerFirmId),
                RentalStart: RentalStart,
                RentalEnd: RentalEnd
            },
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        throw new Error("Failed to insert rent");
    }
}
export const deleteRent = async (
   keyId
   ) => {    
        await axios.post(
            API_URL + "/api/rents/del",
            { 
                keyId:keyId
            },
            { withCredentials: true }
        ).then((response) => {
            window.location.reload(true);
            return response.data;
        }).catch((error) => {
            throw new Error("Harun " + error);
        }
        );

}
 


export const RentContext = { fetchUsersRents };
