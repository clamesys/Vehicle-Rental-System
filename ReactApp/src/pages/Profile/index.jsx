import {UserInUseVehicles, VehiclesForManager, fetchUsersRents} from "../../context/rentContext.jsx";
import { useContext, useEffect,useState } from "react";
import TableElement from "./tableElement";
import { AuthContext } from "../../context/authContext.jsx";
import Card from "../../components/Card";


export default function Basic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [telNo, setTelNo] = useState(0);
  const [data, setData] = useState([]); 
  const [dataManager, setDataManager] = useState([]); 
  const currentUser = useContext(AuthContext).currentUser;
  useEffect(() => {
    async function fetchUsersRentsData() {
       await fetchUsersRents(
        currentUser.Name,
        currentUser.Email,
        currentUser.Age,
        currentUser.Address,
        currentUser.TelNo
      ).then((data) => {
        setData(data.rentedCars);
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
       async function getMangersVehicles  ()  {
      
        const dataLocal = await VehiclesForManager(currentUser.UserId);
        setDataManager(dataLocal);
        console.log(dataLocal);
      }
      getMangersVehicles();
  } 
    fetchUsersRentsData();

  }, [currentUser]);
  
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };
  const addressHandler = (e) => {
    setAddress(e.target.value);
  };
  const telNoHandler = (e) => {
    setTelNo(e.target.value); 
  };
  const submit = async () => {
    console.log(name, email, age, address, telNo);
    const dataLocal = await fetchUsersRents(
      name,
      email,
      age,
      address,
      telNo
    );
    console.log(dataLocal);
    setData(dataLocal.rentedCars);
  } 
  useEffect(() => {
    
  }, [currentUser]);

  return (
    <>
    <div className="columns">
      {useContext(AuthContext).currentUser.is_admin === 1 && (
        <div className="column one-third">
          <div className="field">
            <label className="label is-medium">
              Welcome {currentUser.Name}
            </label>
            <div className="control">
              <label className="label">Username</label>
              <input
                className="input is-medium"
                type="email"
                placeholder={currentUser.Name}
                onChange={nameHandler}
              />
            </div>
          </div>
          <div className="field">
            <div className="control ">
              <label className="label">Email</label>
              <input
                className="input is-medium"
                type="email"
                placeholder={currentUser.Email}
                onChange={emailHandler}
              />
            </div>
          </div>
          <div className="field">
            <div className="control ">
              <label className="label">Age</label>
              <input
                className="input is-medium"
                type="email"
                placeholder={currentUser.Age}
                onChange={ageHandler}
              />
            </div>
          </div>
          <div className="field">
            <div className="control ">
              <label className="label">Adress</label>
              <input
                className="input is-medium"
                type="email"
                placeholder={currentUser.Adress}
                onChange={addressHandler}
              />
            </div>
          </div>
          <div className="field">
            <div className="control ">
              <label className="label">TelNo</label>
              <input
                className="input is-medium"
                type="email"
                placeholder={currentUser.TelNo}
                onChange={telNoHandler}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-primary " onClick={submit}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="column one-third">
        <label className="label is-large">{currentUser.Name}'s Rental History</label>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>
                <abbr title="RentedVehicleId">Plate</abbr>
              </th>
              <th>
                <abbr title="PickupLocation">Pick</abbr>
              </th>
              <th>
                <abbr title="DropOfLocation">Drop</abbr>
              </th>
              <th>
                <abbr title="OwnerFirmName">Firm</abbr>
              </th>
              <th>
                <abbr title="RentalDateStart">Rent Start Date</abbr>
              </th>
              <th>
                <abbr title="RentalDateEnd">Rent End Date</abbr>
              </th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.length > 0 &&
              data !== undefined &&
              data.map((rent) => (
                
                <TableElement
                  key={rent.RentId}
                  InUse={0}
                  keyId={rent.RentId}
                  plate={rent.RentedVehicleId}
                  pickLock={rent.PickupLocation}
                  dropLock={rent.DropOfLocation}
                  firm={rent.FirmName}
                  startDate={rent.RentalStart}
                  endDate={rent.RentalEnd}
                />
              ))}
          </tbody>
        </table>
      </div>

      <div className="column one-fifth">
        <label className="label is-large">In Use Vehicles</label>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>
                <abbr title="RentedVehicleId">Plate</abbr>
              </th>
              <th>
                <abbr title="PickupLocation">Pick</abbr>
              </th>
              <th>
                <abbr title="DropOfLocation">Drop</abbr>
              </th>
              <th>
                <abbr title="OwnerFirmName">Firm</abbr>
              </th>
              <th>
                <abbr title="RentalDateStart">Rent Start Date</abbr>
              </th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 && data.map((rent) => ( rent.RentalEnd === ""? (
            <TableElement
              key={rent.RentId}
              InUse={1}
              keyId={rent.RentId}
              plate={rent.RentedVehicleId}
              pickLock={rent.PickupLocation}
              dropLock={rent.DropOfLocation}
              firm={rent.FirmName}
              startDate={rent.RentalStart}
              endDate={rent.RentalEnd}
            />
            ) : null ))}
          </tbody>
        </table>
      </div>
      
    </div>
     <main className="cards">
     {
       dataManager && dataManager.length > 0 && dataManager.map((vehicle) => (
          <Card
            key={vehicle.VehicleId} 
          IsManager={true}
            title={vehicle.Make+" - "+vehicle.Brand}  
            owner = {vehicle.FirmName}
            ownerId = {vehicle.OwnerFirmId}
            description={vehicle.Description}
            image={vehicle.Photo}
            vehicleId={vehicle.VehicleId} 
          />
       ))
     }
   </main>
   </>
  );
}
