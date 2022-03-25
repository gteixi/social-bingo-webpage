import React from "react";
import Footer from "../../components/Footer/Footer";
import MenuHeader from "../../components/MenuHeader/MenuHeader";

import "./About.scss";

function About() {
  return (
    <>
      <MenuHeader />
      <div className="aboutContainer">
        <div className="aboutContainer__block">
          <div>
            <p className="aboutContainer__block__title">QUI SOM</p>
          </div>
          <div>
            <p className="aboutContainer__block__text">
              Som la Social, un grup de disco i funk del poblenou, barcelona amb
              més de 4 anys d’experiencia tocant sobre els escenaris.
              <br />
              <br />
              Ens caracteritzem per la nostre versatilitat tocant temes dels
              anys 70 i 80 fins als hits de l’actualitat.
              <br />
              <br />
              Es per això que després de 4 anys hem volgut crear un nou projecte
              on poder barrejar tot tipus de cançons presentan el BINGO MUSICAL
              ple de sorpreses i ganes de diversió.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
