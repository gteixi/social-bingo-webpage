import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContainer__firstRow">
        <div className="footerContainer__logoInfo">
          <img src="./../../assets/whatsapp.png" alt="Whatsapp" />
          <p>654773382</p>
        </div>

        <div className="footerContainer__logoInfo">
          <img src="./../../assets/mail.png" alt="Mail" />
          <p className="footerContainer__mail">lasocialdisfunktion@gmail.com</p>
        </div>
      </div>
      <div className="footerContainer__secondRow">
        <div>
          <p>Poblenou, 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
