
import React from "react";
import {deleteRent} from "../../context/rentContext"; 
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { endRent } from "../../context/rentContext.jsx";

export default function TableElement(props) { 

  const [showPopup, setShowPopup] = useState(false);
  const [endDatee, setEndDate] = useState(""); // To store the selected end date
  const [location, setLocation] = useState(""); // To store the entered location


    let navigate = useNavigate();
    const user = useContext(AuthContext).currentUser;

    const {InUse,keyId,plate, pickLock, dropLock, firm, startDate, endDate } = props;
    const delRent = async () => {
      const data = await deleteRent (keyId); 
      console.log(data);
    }; 
    const handleEndRentClick = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };
  
    const handlePopupSubmit = async() => {
      await endRent(plate,keyId, endDatee, location);
      console.log("End Date:", endDatee);
      console.log("Location:", location);
      setShowPopup(false);
    };
    const today = new Date().toISOString().split("T")[0];
    return (
      <tr>
        <th></th>
        <td>
          <strong>{plate}</strong>
        </td>
        <td>{pickLock}</td>
        <td>{dropLock}</td>
        <td>{firm}</td>
        <td>{startDate}</td>
        {InUse === 1 ? null : <td>{endDate}</td>}

        { InUse === 1 ? (
          <td>
            <button className="button is-success" onClick={handleEndRentClick}>
              End Rent
            </button>
          </td>
        ) : null}
        {user.is_admin === 1 && InUse === 0 ? (
          <td>
            <button className="button is-danger" onClick={delRent}>
              Delete
            </button>
          </td>
        ) : null}
        {showPopup && InUse === 1 && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>
              &times;
            </span> 
            <label>Select End Date:</label>
            <input
              type="date"
              value={endDatee}
              min={today}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <label>Enter Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className="button is-success" onClick={handlePopupSubmit}>
              Confirm
            </button>
          </div>
        </div>
      )}
      </tr>
    );
    }
