import React from "react";
import Footer from "../../components/Footer/Footer";

import InfoTemplate from "../../components/InfoTemplate/InfoTemplate";
import Menu from "../../components/Menu/Menu";

import "./About.scss";

function About() {
  return (
    <>
      <Menu />
      <div className="aboutContainer">
        <InfoTemplate
          title="QUI SOM"
          text="Som la Social, un grup de disco i funk del poblenou, barcelona amb
            més de 4 anys d’experiencia tocant sobre els escenaris.
            Ens caracteritzem per la nostre versatilitat tocant temes dels anys
            70 i 80 fins als hits de l’actualitat.
            Es per això que després de 4 anys hem volgut crear un nou projecte
            on poder barrejar tot tipus de cançons presentan el BINGO MUSICAL
            ple de sorpreses i ganes de diversió."
        />
        <Footer />
      </div>
    </>
  );
}

export default About;
