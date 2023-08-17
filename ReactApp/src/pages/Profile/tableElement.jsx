
import React from "react";
 

export default function TableElement(props) {
    const {plate, pickLock, dropLock, firm, startDate, endDate} = props;
    return (
        <tr>
              <th>1</th>
              <td> 
                <strong>{plate}</strong>
              </td>
              <td>{pickLock}</td>
              <td>{dropLock}</td>
              <td>{firm}</td>
              <td>{startDate}</td>
              <td>{endDate}</td>
              
            </tr>
    );
    }
