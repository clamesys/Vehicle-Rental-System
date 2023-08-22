import React, { useContext, useEffect } from "react";
import image1 from "../assets/car1.jpg";
import { Description } from "@mui/icons-material";
import "./card.scss";
import { insertRent } from "../context/rentContext.jsx";
import { AuthContext } from "../context/authContext.jsx";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Card(props) {
  let navigate = useNavigate();
  const { VehicleId, image, title, owner, ownerId, description } = props;
  const auth = useContext(AuthContext).currentUser;
  useEffect(() => {
    console.log(auth);
    return () => {
      console.log("Card component is unmounted");
    };
  }, []);
  const rentCar = async () => {
    const data = await insertRent(
      VehicleId,
      auth.UserId,
      "PickupLocation",
      "DropOfLocation",
      ownerId,
      "2022-01-01",
      "2022-01-01"
    );
    console.log(data);
  };
  return (
    <article className="card">
      <img className="carImage" src={image} alt={"Sample photo"} />
      <div className="text">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="tag is-link">{owner}</a>
        <a
          className="tag  is-warning Rent"
          onClick={async () => {
            rentCar();
            await navigate("/profile/" + auth.UserId);
          }}
        >
          Rent
        </a>
      </div>
    </article>
  );
}
export default Card;
