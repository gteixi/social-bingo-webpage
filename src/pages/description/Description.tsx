import React from "react";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import InfoTemplate from "../../components/InfoTemplate/InfoTemplate";

import "./Description.scss";

function Description() {
  return (
    <>
      <Menu />
      <div className="descriptionContainer">
        <InfoTemplate
          title="QUÈ ÉS UN BINGO MUSICAL"
          text={[
            `T’imagines ballar mentre guanyes premis?`,
            `

            Disposareu dels clàssics cartrons de Bingo però aquest cop, en comptes de números, hi haurà els títols de les cançons que haureu d’anar esbrinant a mesura que les aneu sentint. Perquè sí, la música serà en directe.`,
          ]}
        />
        <h1 className="descriptionContainer__title">INSTRUCCIONS</h1>
        <div className="descriptionContainer__steps">
          <p>STEP 1: COMPRA EL TEU CARTRÓ A LA BARRA.</p>
          <p>
            STEP 2: SIGUES PUNTUAL DAVANT DE L’ESCENARI PER COMENÇAR A SENTIR
            LES CANÇONS DEL REPERTORI.
          </p>
          <p>
            STEP 3: IDENTIFICA EL TÍTOL DE LA CANÇÓ DEL REPERTORI QUE ANEM
            TOCANT.
          </p>

          <p>STEP 4: BÚSCA EL TÍTOL DE LA CANÇÓ AL TEU CARTRÓ I TATXA’L!</p>

          <p>
            STEP 5: ESTIGUES ATENT QUAN FACIS LÍNEA O BINGO I, SI ES AIXÍ, CRIDA
            I APROPA’T A L´ESCENARI PER FER LA RESPECTIVA COMPROVACIÓ.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Description;
