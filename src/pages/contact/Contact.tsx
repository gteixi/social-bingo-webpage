/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import ReactLoading from "react-loading";

import Menu from "../../components/Menu/Menu";
import InfoTemplate from "../../components/InfoTemplate/InfoTemplate";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Footer from "../../components/Footer/Footer";

import "./Contact.scss";

function Contact() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [failureMessage, setFailureMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    setLoading(true);
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      name: { value: string };
      message: { value: string };
    };

    const email = target.email.value;
    const name = target.name.value;
    const message = target.message.value;

    await fetch("https://social-bingo-backend.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then(() => {
        setSuccessMessage(true);
        setLoading(false);
      })
      .catch(() => {
        setFailureMessage(true);
      });
  };

  const goBack = () => {
    setSuccessMessage(false);
    setFailureMessage(false);
  };

  return (
    <>
      <Menu />
      <div className="contactContainer">
        <InfoTemplate title="CONTACTA'NS" />
        {successMessage && (
          <div className="contactContainer__successContainer">
            <div className="contactContainer__successContainer__block">
              <p>BINGO!!! El teu missatge s´ha enviat correctament!</p>
              <iframe
                title="Disco Gif"
                src="https://gifer.com/embed/7mnY"
                frameBorder="0"
                className="contactContainer__successContainer__img"
              />
              <div className="contactContainer__successContainer__containerButton">
                <button
                  className="contactContainer__successContainer__button"
                  type="button"
                  onClick={goBack}
                >
                  Enrere
                </button>
              </div>
            </div>
          </div>
        )}
        {failureMessage && (
          <div className="contactContainer__successContainer">
            <div className="contactContainer__successContainer__block">
              <p>Oh no... Alguna cosa ha anat malament, torna-ho a intentar</p>
              <iframe
                title="Disco Gif"
                src="https://giphy.com/embed/vKz8r5aTUFFJu"
                frameBorder="0"
                className="contactContainer__successContainer__img"
              />
              <div className="contactContainer__successContainer__containerButton">
                <button
                  className="contactContainer__successContainer__button"
                  type="button"
                  onClick={goBack}
                >
                  Enrere
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="contactContainer__form">
          <form onSubmit={handleSubmit}>
            <div className="contactContainer__section">
              <label
                htmlFor="email_field"
                className="contactContainer__section--label"
              >
                Mail
              </label>
              <input
                placeholder="stevie@wonder.com"
                className="contactContainer__section--input"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="contactContainer__section">
              <label
                htmlFor="name_field"
                className="contactContainer__section--label"
              >
                Nom
              </label>
              <input
                placeholder="Stevie Wonder"
                className="contactContainer__section--input"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="contactContainer__section">
              <label
                htmlFor="message_field"
                className="contactContainer__section--label"
              >
                Missatge
              </label>
              <textarea
                placeholder="Vull que vingueu a les festes del meu poble!"
                className="contactContainer__section--input"
                name="message"
                required
              />
            </div>
            <div className="contactContainer__backButton">
              <button
                type="submit"
                id="button"
                className="contactContainer__backButton--button"
              >
                Enviar
                {loading && <ReactLoading type="bubbles" color="black" />}
              </button>
            </div>
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
