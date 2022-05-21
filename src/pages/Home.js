import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
// import {bg} from "../images/frontpagebg"
import logo from "../images/airbnb.png";
import { ConnectButton } from "web3uikit";

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
        
      </div>
    </div>
    </>
  );
};

export default Home;
