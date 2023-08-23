
import Card from "../../components/Card"; 
import "./home.css" ;
import { useQuery } from 'react-query' ;
import { makeRequest } from "../../axios"; 

function Home() {      
  const {isLoading, error, data} = useQuery(["vehicle"], () =>
    makeRequest.get('/vehicles').then((res) => {
      return res.data ;
    } )
  ) ;  
  console.log(data) ;
  
  return (
    <>
      <section
        className="hero is-small is-primary"
        style={{ backgroundColor: "gray" }}
      >
        <div className="hero-body">
          <p className="title has-text-centered">Home</p>
        </div>
      </section>{" "}
      <main className="cards">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data.map((vehicle) => (
            <div >
              {console.log(vehicle.Photo)}
              <Card
              VehicleId={vehicle.VehicleId}
                image={vehicle.Photo}
                title={vehicle.Make +' - '+ vehicle.Brand }
                ownerId={vehicle.OwnerFirmId}
                owner={vehicle.FirmName}
                description={vehicle.FuelType}
              />
            </div>
          ))
        )}
      </main>
    </>
  );
}

export default Home;
