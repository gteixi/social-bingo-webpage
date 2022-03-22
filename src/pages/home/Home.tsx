import React from "react";
import { Link } from "react-router-dom";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Home.scss";

function Home() {
  return (
    <div className="homeContainer">
      <Link to="/about">QUI SOM</Link>
      <Link to="/description">QUÈ ÉS UN BINGO MUSICAL</Link>
      {/* <Link to="/description_more">INSTRUCCIONS</Link> */}
      <Link to="/pictures">FOTOS</Link>
      <Link to="/contact">CONTRACTANS</Link>
      <div className="socialMedia">
        <SocialMedia />
      </div>
    </div>
  );
}

export default Home;
