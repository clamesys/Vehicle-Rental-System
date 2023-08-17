import React from "react";  
import image1 from "../assets/car1.jpg";
import { Description } from "@mui/icons-material";
 

function Card(props) {

  const {image,title,owner,ownerId,description}= props; 
  
  return (
    <article class="card">
    <img src= {image} alt={"Sample photo"}/>
    <div class="text">
      <h3>{title}</h3>
      <p>{description}</p> 
      <a class="tag is-link" >{owner}</a>
      <button > Show More Details</button>
    </div>
  </article> 
  );
}
export default Card;