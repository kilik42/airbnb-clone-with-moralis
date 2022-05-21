import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
// import {bg} from "../images/frontpagebg"
import logo from "../images/airbnb.png";
import { ConnectButton,Icon,  Select, DatePicker,Input } from "web3uikit";
import {useState} from "react";
// import Link from "react-router-dom"

const Home = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [destination, setDestination] = useState("New York");
  const [guests, setGuests] = useState(2);


  return (
    <>
      {/* <Link to="/rentals"> Rentals </Link> */}

      <div className="container" style ={{backgroundImage: `url(${bg})`}}>
        <div className="containterGradient">
          
        </div>

      </div>

      <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="tabs">
          <div className="selected">places to stay</div>
          <div>experiences</div>
          <div>online experiences</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>

    <div className="tabContent">
      <div className="searchFields">
        <div className="inputs">
          location
          <Select 
            defaultOptionIndex={0}
            onChange={(data) => setDestination(data.label)}
            options={[

              {
                id: "ny",
                label:"new york"
              },
              {
                id:"chi",
                label:"chicago"
              },
              {
                id: "db",
                label:"Dubai"
              },
              {
                id: "la",
                label:"los angelos"
              }
            ]}
           />
        </div>
        <div className="vl"/>

        

        <div className="inputs">
          check in 
          <DatePicker 
            id="CheckIn"
            onChange={(event)=> setCheckIn(event.date)}
          />
        </div>
        <div className="vl"/>
          


        <div className="inputs">
          check out
          <DatePicker 
            id="CheckOut"
            onChange={(event)=> setCheckOut(event.date)}
          />
        </div>
        <div className="vl"/>
          
  
        <div className="inputs">
          Guests
          <Input
          value={2}
          name="AddGuests"
          type="number"
          onChange={(event)=> setGuests(Number(event.target.value))}

         />
         
        </div>
        <Link to={"/rentals"}  state ={{
          destination: destination,
          checkIn: checkIn,
          checkOut: checkOut,
          guests: guests
        }}>
          <div className="searchButton">
            <Icon fill="#ffffff" size={24} svg="search"/>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Home;
