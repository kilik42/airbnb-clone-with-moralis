import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import {bg} from "../images/frontpagebg.png";
import logo from "../images/airbnb.png";

const Home = () => {

  return (
    <>
      {/* <Link to="/rentals"> Rentals </Link> */}

      <div className="container" style ={{backgroundImage: `url(${bg})`}}>
        <div className="containterGradient">
          
        </div>

      </div>

    </>
  );
};

export default Home;
