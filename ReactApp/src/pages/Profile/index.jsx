import {fetchUsersRents} from "../../context/rentContext.jsx";
import { useContext, useEffect,useState } from "react";
import TableElement from "./tableElement";
import { AuthContext } from "../../context/authContext.jsx";
export default function Basic() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [address, setAddress] = useState("");
  const [telNo, setTelNo] = useState(0);
  const [data, setData] = useState([]); 
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
      }).catch((err) => {
        console.log(err);
      });
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
    console.log("aa "+dataLocal);
    setData(dataLocal.rentedCars);

  }
  return (
    <div className="columns">
      <div className="column one-fifth"></div>
      {(useContext(AuthContext).currentUser.is_admin === 1) &&
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
              <button className="button is-primary " onClick={submit}>Save</button>
            </div>
          </div>
        </div>
      }

      <div className="column one-third">
        <label className="label is-large">Your Rental History</label>
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
          { data && data.length>0 && data !== undefined && data.map((rent) => (
            <TableElement key={rent.RentId}
            keyId={rent.RentId}
              plate={rent.RentedVehicleId}
              pickLock={rent.PickupLocation}
              dropLock={rent.DropOfLocation}
              firm={rent.OwnerFirmId}
              startDate={rent.RentalStart}
              endDate={rent.RentalEnd}
            />))
            }
            {/*<TableElement
              plate="34 ABC 34"
              pickLock="Istanbul"
              dropLock="Izmir"
              firm="Firm1"
              startDate="01.01.2021"
              endDate="01.02.2021"
            />*/}
          </tbody>
        </table>
      </div>

      <div className="column one-fifth"></div>
    </div>
  );
}
