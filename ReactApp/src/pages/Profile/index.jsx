import React from 'react';
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"; 
import TableElement from './tableElement';
 
export default function Basic() {
  const currentUser = useContext(AuthContext).currentUser;
  return ( 
    <div class="columns"> 
     <div className="column one-fifth"></div>
      <div className="column one-third">
        <div class="field">
          <label class="label is-medium">Welcome {currentUser.Name}</label>
          <div class="control">
            <label class="label">Username</label>
            <input
              class="input is-medium"
              type="email"
              placeholder={currentUser.Name}
            />
          </div>
        </div>
        <div class="field">
          <div class="control ">
            <label class="label">Email</label>
            <input
              class="input is-medium"
              type="email"
              placeholder={currentUser.Email}
            />
          </div>
        </div>
        <div class="field">
          <div class="control ">
            <label class="label">Age</label>
            <input
              class="input is-medium"
              type="email"
              placeholder={currentUser.Age}
            />
          </div>
        </div>
        <div class="field">
          <div class="control ">
            <label class="label">Adress</label>
            <input
              class="input is-medium"
              type="email"
              placeholder={currentUser.Adress}
            />
          </div>
        </div>
        <div class="field">
          <div class="control ">
            <label class="label">TelNo</label>
            <input
              class="input is-medium"
              type="email"
              placeholder={currentUser.TelNo}
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-primary ">Save</button>
          </div>
        </div>
      </div>
     
     
     <div className="column one-third">
        
        <label class="label is-large">Your Rental History</label>
        <table class="table">
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
            <TableElement plate="34 ABC 34" pickLock="Istanbul" dropLock="Izmir" firm="Firm1" startDate="01.01.2021" endDate="01.02.2021"/>
          </tbody>
        </table>
      </div>
 
     <div className="column one-fifth"></div> 
    </div> 
  );
}