import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import {useLocation} from "react-router";
import logo from "../images/airbnbRed.png";
import { ConnectButton, Icon } from "web3uikit";

const Rentals = () => {
  const {state: searchFilters} = useLocation();
  return (
    <>
   <div className="topBanner">
        <div>
          <Link to = "/">
          <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="searchReminder">

          <div className="filter">
            {searchFilters.destination}
          </div>
          <div className="vl"/>
          <div className="filter">
            {` 
              ${searchFilters.checkIn.toLocaleString("default", {month: "short",})}
              ${searchFilters.checkIn.toLocaleString("default", {day: "2-digit",})}
                -
                ${searchFilters.checkOut.toLocaleString("default", {month: "short",})}
                ${searchFilters.checkOut.toLocaleString("default", {day: "2-digit",})}

            `}
          </div>
          <div className="vl"/>
          <div className="filter">
            {searchFilters.guests} Guest
          </div>
         <div className="searchFiltersIcon">
           <Icon fill="#ffffff" size={20} svg="search"/>
         </div>

        </div>
     
           



        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

export default Rentals;
