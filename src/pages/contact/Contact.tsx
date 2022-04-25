/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import Footer from "../../components/Footer/Footer";
import InfoTemplate from "../../components/InfoTemplate/InfoTemplate";
import Menu from "../../components/Menu/Menu";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Contact.scss";

function Contact() {
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      name: { value: string };
      message: { value: string };
    };
    const email = target.email.value;
    const name = target.name.value;
    const message = target.message.value;

    const js = await fetch("http://localhost:4000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const text = js.text();
    console.log(text);
  };
  return (
    <>
      <Menu />
      <div className="contactContainer">
        <InfoTemplate title="CONTACTA'NS" />
        <div>
          <h1>Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name_field">Your Name</label>
              <input placeholder="Enter Your Name" type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email_field">Your Email</label>
              <input placeholder="Enter Your Email" type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message_field">Message</label>
              <textarea placeholder="Enter message here" name="message" />
            </div>

            <button type="submit" id="button">
              Send
            </button>
          </form>
        </div>
        <InfoTemplate title="XARXES" />
        <SocialMedia withDescription />
        <Footer />
      </div>
    </>
  );
}

export default Contact;
