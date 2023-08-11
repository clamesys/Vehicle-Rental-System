import React, { useEffect } from "react";

import "./browse.css";
import "../../index.css";

function Browse() {
  return (
    <>
      <h1>Browse Vehicle</h1>
      <div className="Browse">
        <>
          <label htmlFor="type">Type:</label>
          <select name="type" id="type">
            <option value="car">Car</option>
            <option value="truck">Truck</option>
            <option value="van">Van</option>
            <option value="motorcycle">Motorcycle</option>
          </select>
        </>
        <>
          <label htmlFor="make">Make:</label>
          <select name="make" id="make">
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
            <option value="ford">Ford</option>
            <option value="chevrolet">Chevrolet</option>
          </select>
        </>
        <label htmlFor="model">Model:</label>
        <select name="model" id="model">
          <option value="camry">Camry</option>
          <option value="accord">Accord</option>
          <option value="mustang">Mustang</option>
          <option value="silverado">Silverado</option>
        </select>
        <label htmlFor="year">Year:</label>
        <select name="year" id="year">
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        <label htmlFor="price">Price:</label>
        <select name="price" id="price">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
        </select>
        <label htmlFor="location">Location:</label>
        <select name="location" id="location">
          <option value="newyork">New York</option>
          <option value="losangeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
        </select>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>
      <h2>Vite + React + TS (Hamburger + Responsive + Router)</h2>
    </>
  );
}

export default Browse;
