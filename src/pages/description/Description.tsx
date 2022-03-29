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
          text="T’imagines ballar mentres guanyes premis?

          Disposareu dels clàssics cartrons de Bingo pero aquest cop en canvi de números hi haurà els títols de les cançons que haureu d’anar esbrinant a mesura que les aneu sentint, perquè sí, la música serà en directe."
        />
        <p className="descriptionContainer__title">INSTRUCCIONS</p>
        <div className="descriptionContainer__steps">
          <p>STEP 1: COMPRA EL TEU CARTRÓ A LA BARRA.</p>
          <p>
            STEP 2:ESTIGUES PUNTUAL DAVANT L’ESCENARI PER COMENÇAR A SENTIR LES
            CANÇONS DEL REPERTORI.
          </p>
          <p>
            STEP 3: IDENTIFICA EL TÍTOL DE LA CANÇÓ DEL REPERTORI QUE ANEM
            TOCANT.
          </p>

          <p>STEP 4: BÚSCA EL TÍTOL DE LA CANÇÓ AL TEU CARTRÓ I TATXA’L!</p>

          <p>
            STEP 5: ESTIGUES ATENT DE FER LÍNEA O BINGO I SI ES AIXÍ CRIDA I
            APROPA’T AL ESCENARI PER FER LA RESPECTIVA COMPROVACIÓ.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Description;
