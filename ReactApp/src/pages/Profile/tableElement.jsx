
import React from "react";
import {deleteRent} from "../../context/rentContext"; 
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

export default function TableElement(props) { 
    const user = useContext(AuthContext).currentUser;
    const {keyId,plate, pickLock, dropLock, firm, startDate, endDate} = props;
    const delRent = async () => {
      const data = await deleteRent (keyId); 
      console.log(data);
    };
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
              <td>{endDate}</td>
              <td><button onClick= {delRent}>Delete</button></td>
            </tr>
    );
    }
