import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContainer__logoInfo">
        <img src="./../../assets/whatsapp.png" alt="Whatsapp" />
        <p>620868556</p>
      </div>
      <div className="footerContainer__logoInfo">
        <img src="./../../assets/mail.png" alt="Mail" />
        <p className="footerContainer__mail">lasocialdisfunktion@gmail.com</p>
      </div>
      <div className="footerContainer__logoInfo">
        <p>Poblenou, 2022</p>
      </div>
    </div>
  );
}

export default Footer;
