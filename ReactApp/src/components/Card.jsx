import React, { useContext, useEffect } from "react"; 
import "./card.scss"; 
import { AuthContext } from "../context/authContext.jsx"; 
import { insertRent } from "../context/rentContext.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();
  const { VehicleId, image, title, owner, ownerId, description } = props;
  const auth = useContext(AuthContext).currentUser; 
  const [rentalState, setRentalState] = React.useState(false);
  useEffect(() => {
    return () => {
      console.log("Card component is unmounted");
    };
  }, []);
  const rentCar = async () => {
    const current = new Date();
    const month =
      current.getMonth() + 1 > 9
        ? current.getMonth() + 1
        : "0" + (current.getMonth() + 1);
    const day =
      current.getDate() > 9 ? current.getDate() : "0" + current.getDate();
    const date = current.getFullYear() + "-" + month + "-" + day;
    const data = await insertRent(
      VehicleId,
      auth.UserId,
      pickLocation,
      "",
      ownerId,
      date,
      ""
    );
    
  };
  const [pickLocation, setPickLocation] = useState("");
  const handleChange = event => {
    setPickLocation(event.target.value);  
  };
  return (
    <article className="card">
      <img className="carImage" src={image} alt={"Sample photo"} />
      <div className="text">
        <h3>{title}</h3>
        {rentalState ? (
          <>
            <h1>StartRent</h1>
            <input
              type="text"
              placeholder="Pickup Location"
              onChange={handleChange}
              value={pickLocation}
            />
            <button
              className="button is-success"
              onClick={async () => {
                await rentCar();
                await navigate("/profile/" + auth.UserId);
              }}
            >
              Rent
            </button>
          </>
        ) : (
          <>
            <p>{description}</p>
            <a className="tag is-link">{owner}</a>
            <button
              className="button is-warning Rent"
              onClick={() => {
                setRentalState(true);
              }}
            >
              Edit Rent Details
            </button>
          </>
        )}
      </div>
    </article>
  );
}
export default Card;
