import React from "react";
import Navbar from "../Navbar";
import Card from "../Card";
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.jpg";

function Home() {
  return (
    <>
      <body>
        <Navbar selected="Home"/>
        <section
          class="hero is-small is-primary"
          style={{ backgroundColor: "gray" }}
        >
          <div class="hero-body">
            <p class="title has-text-centered">Home</p>
          </div>
        </section>

        <div class="columns is-mobile">
          <div class="column">
            <Card
              image={car1}
              title="Car Name 1"
              owner="Owner Name 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
                Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
                Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
        "
            />
          </div>
          <div class="column">
            {" "}
            <Card
              image={car2}
              title="Car Name 2"
              owner="Owner Name 2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
        Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
        Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
        "
            />
          </div>
          <div class="column">
            <Card
              image={car3}
              title="Car Name 3"
              owner="Owner Name 3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
        Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
        Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
        "
            />
            <div />
          </div> 
          <div class="column">
            <Card
              image={car1}
              title="Car Name 4"
              owner="Owner Name 4"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
                Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem architecto corrupti odit a. 
                Perspiciatis nam esse similique officiis, quam incidunt, unde alias ex, error provident dolor? Aliquid porro impedit blanditiis?
        "
            />
          </div>
        </div>
      </body>
    </>
  );
}

export default Home;
