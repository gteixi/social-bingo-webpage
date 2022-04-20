import React from "react";
import Footer from "../../components/Footer/Footer";
import InfoTemplate from "../../components/InfoTemplate/InfoTemplate";
import Menu from "../../components/Menu/Menu";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Contact.scss";

function Contact() {
  return (
    <>
      <Menu />
      <div className="contactContainer">
        <InfoTemplate title="CONTACTA´NS" />
        {/* FORM IN PROGRESS
        <div>
          <p className="title">Contact Form</p>
          <form>
            <div>
              <input placeholder="Enter Your Name" />
            </div>
            <div>
              <input placeholder="Enter Your Email" />
            </div>
            <div>
              <input placeholder="Enter Your Text" />
            </div>
          </form>
        </div> */}
        <InfoTemplate title="XARXES" />
        <SocialMedia withDescription />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
