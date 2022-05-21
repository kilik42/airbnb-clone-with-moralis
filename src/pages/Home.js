import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
// import {bg} from "../images/frontpagebg"
import logo from "../images/airbnb.png";
import { ConnectButton, Select } from "web3uikit";

const Home = () => {

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
            onChange={(data) => console.log(data.label)}
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
        </div>
        <div className="vl"/>
          


        <div className="inputs">
          check out
        </div>
        <div className="vl"/>
          
  
        <div className="inputs">
          Guests
        </div>
        
      </div>
    </div>
    </>
  );
};

export default Home;
