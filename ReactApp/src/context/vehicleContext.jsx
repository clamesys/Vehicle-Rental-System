import axios from "axios";
const API_URL = "http://localhost:8800";
export const fetchVehicle = async (
  selectedType,
  make,
  model,
  year,
  price,
  location,
  text
) => {
  try {
    const response = await axios.post(
      API_URL + "/api/vehicles/filtered",
      {
        selectedType: selectedType,
        make: make,
        model: model,
        year: year,
        price: price,
        location: location,
        text: text,
      },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the createTicket process
    throw new Error("Failed to fetch vehicle");
  }
};
export const fetchMakes = async () => {
  try {
    const response = await axios.get(API_URL + "/api/vehicles/makes", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vehicle");
  }
};
export const fetchModels = async (make) => {
  try {
    const response = await axios.post(
      API_URL + "/api/vehicles/models",
      { make: make },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vehicle");
  }
};

export const fetchYears = async (make, model) => {
  try {
    const response = await axios.post(
      API_URL + "/api/vehicles/years",
      { make: make, model: model },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vehicle");
  }
};
export const fetchPrices = async (make, model, year) => {
  try {
    const response = await axios.post(
      API_URL + "/api/vehicles/prices",
      { make: make, model: model, year: year },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch vehicle");
  }
};

export const VehicleContext = { fetchVehicle, fetchMakes, fetchModels, fetchYears, fetchPrices };
