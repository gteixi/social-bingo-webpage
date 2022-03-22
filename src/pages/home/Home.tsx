import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>
        <Link to="/about">QUI SOM</Link>
        <Link to="/description">QUÈ ÉS UN BINGO MUSICAL</Link>
        {/* <Link to="/description_more">INSTRUCCIONS</Link> */}
        <Link to="/pictures">FOTOS</Link>
        <Link to="/contact">CONTRACTANS</Link>
      </div>
      <div>
        <h1>This is the Home page</h1>
      </div>
    </>
  );
}

export default Home;
