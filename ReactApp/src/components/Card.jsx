import React from "react"; 
import "bulma/css/bulma.css";

// export const Cart = () => {
//   return <h1> Cart </h1>;
// };
function Card(props) {

  const {image,title,owner,description}= props; 

  return (
    <div className="card ">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={image}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img className = "is-rounded "
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content ">
            <p className="title is-3">{title}</p>
            <p className="subtitle is-6">{owner}</p>
          </div>
        </div>

        <div className="content">
          {description}
          <br />
          <time  >11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
}
export default Card;