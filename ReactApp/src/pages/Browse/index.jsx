import { useEffect, useState } from "react";
import { fetchVehicle } from "../../context/vehicleContext.jsx";
import "./browse.css";
import "../../index.css";
import Card from "../../components/Card";
import { fetchMakes, fetchModels,fetchYears,fetchPrices } from "../../context/vehicleContext.jsx";
function Browse() {
  const [selectedType, setSelectedType] = useState("car");
  const [make, setMake] = useState("toyota");
  const [model, setModel] = useState("camry");
  const [year, setYear] = useState("2021");
  const [price, setPrice] = useState("100");
  const [location, setLocation] = useState("newyork");
  const [text, setText] = useState("");
  const [brand, setBrand] = useState(0);
  const [type, setType] = useState(0);
  const [data, setData] = useState([]);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchMakesData = async () => {
      const data = await fetchMakes();
      setMakes(data);
    };
    fetchMakesData();
  }, []);
  const typeHandler = async (e) => {
    setSelectedType(e.target.value);
    if (e.target.value === "car") {
      setType(0);
      setBrand(0);
      setMake("toyota");
      setModel("camry");

    }
    else if (e.target.value === "truck") {
      setType(1);
      setBrand(0);
      setMake("bmc");
      setModel("v100");
    }
    else if (e.target.value === "van") {
      setType(2);
      setBrand(0);
      setMake("toyota");
      setModel("camry");
    }
    else if (e.target.value === "motorcycle") {
      setType(3);
      setBrand(0);
      setMake("toyota");
      setModel("camry");
    }

  };
  const makeHandler = (e) => {
    setMake(e.target.value);
    if (e.target.value === "toyota" || e.target.value === "bmc") {
      setBrand(0);
      if(e.target.value === "toyota") setModel("camry");
      else if(e.target.value === "bmc") setModel("v100");
    }
    else if (e.target.value === "honda" || e.target.value === "man"){
      setBrand(1);
      if(e.target.value === "honda") setModel("accord");
      else if ( e.target.value==="man") setModel("tgx");
      
    }
      
    else if (e.target.value === "ford") {
      setBrand(2);
      if(type === 0) setModel("mustang");
      else if (type === 1) setModel("fmax");

    }
    else if (e.target.value === "chevrolet" || e.target.value === "silverado") {
      setBrand(3);
      setModel("silverado");
    }
  };
  const modelHandler = (e) => {
    setModel(e.target.value);
  };
  const yearHandler = (e) => {
    setYear(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const locationHandler = (e) => {
    setLocation(e.target.value);
  };
  const textHandler = (e) => {
    setText(e.target.value);
  };
  const Submit = async () => {
    console.log(selectedType, make, model, year, price, location, text);
    const data = await fetchVehicle(
      selectedType,
      make,
      model,
      year,
      price,
      location,
      text
    );
    setData(data);
    console.log(data);
  };
  const rentCar = () => {
    console.log("rented");
  };
  return (
    <>
      <h1>Browse Vehicle</h1>
      <div className="Browse">
        <>
          <label htmlFor="type">Type:</label>
          <select name="type" id="type" onChange={typeHandler}>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </>
        <>
          <label htmlFor="make">Make:</label>
          <select name="make" id="make" onChange={makeHandler}>
            {type === 0 && (
              <>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="chevrolet">Chevrolet</option>
              </>
            )}
            {type === 1 && (
              <>
                <option value="bmc">BMC</option>
                <option value="man">MAN</option>
                <option value="ford">Ford</option>
              </>
            )}
          </select>
        </>
        <label htmlFor="model">Model:</label>
        <select name="model" id="model" onChange={modelHandler}>
          {type === 0 && (
            <>
              {brand === 0 && <option value="camry">Camry</option>}
              {brand === 0 && <option value="corolla">Corrolla</option>}
              {brand === 1 && <option value="accord">Accord</option>}
              {brand === 2 && <option value="mustang">Mustang</option>}
              {brand === 3 && <option value="silverado">Silverado</option>}
            </>
          )}
          {type === 1 && (
            <>
              {brand === 0 && <option value="v100">V100</option>}
              {brand === 1 && <option value="tgx">TGX5869</option>}
              {brand === 2 && <option value="fmax">F-MAX</option>}
              {brand === 3 && <option value="silverado">Silverado</option>}
            </>
          )}
        </select>
        <label htmlFor="year">Year:</label>
        <select name="year" id="year" onChange={yearHandler}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        <label htmlFor="price">Price:</label>
        <select name="price" id="price" onChange={priceHandler}>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select> 
        <div className="field has-addons">
          
          <div className="control">
            <button className="button is-info" onClick={Submit}>
              Search
            </button>
          </div>
        </div>
        <div>
          
        </div>
      </div>

      
    </>
  );
}

export default Browse;
