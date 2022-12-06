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
          text={[
            `Som La Social, un grup de funk i disco del Poblenou (Barcelona) amb més de 4 anys d’experiència tocant als escenaris.`,
            `
            Ens caracteritzem per la nostre versatilitat tocant temes dels anys 70 i 80 fins als hits de l’actualitat!`,
          ]}
        />
        <img
          className="aboutContainer__imgPresentacio"
          src="./../../assets/fotoPresentacio.jpg"
          alt="Foto grupal amb public"
        />
        <Footer />
      </div>
    </>
  );
}

export default About;
