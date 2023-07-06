import React from "react"; 
import "bulma/css/bulma.css";

// export const Cart = () => {
//   return <h1> Cart </h1>;
// };
function Card(props) {

  const {image,title,owner,description}= props; 

  return (
    <div class="card ">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src={image}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img class = "is-rounded "
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content ">
            <p class="title is-3">{title}</p>
            <p class="subtitle is-6">{owner}</p>
          </div>
        </div>

        <div class="content">
          {description}
          <br />
          <time datetime >11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
export default Card;