import React from "react";

import "./Welcome.scss";

function Welcome() {
  const logoRoutePath = "./assets/socialMedia/";

  const logoRoute = [
    {
      name: "Instagram",
      image: `${logoRoutePath}instagram.png`,
      link: "https://www.instagram.com/lasocialdisfunktion/",
    },
    {
      name: "Facebook",
      image: `${logoRoutePath}facebook.png`,
      link: "https://www.facebook.com/lasocialdisfunktion/",
    },
    {
      name: "Youtube",
      image: `${logoRoutePath}youtube.png`,
      link: "https://www.youtube.com/channel/UCAmYo8uFnnmWaG0qBbmqEfw",
    },
    {
      name: "SoundCloud",
      image: `${logoRoutePath}soundcloud.png`,
      link: "https://soundcloud.com/la-social-disfunktion",
    },
  ];

  return (
    <div className="mainContainer">
      {/* UNMUTE COMPONENT */}
      <div className="header">[ UNMUTE ]</div>
      <div className="block">
        <div className="block__text">
          <h1>PREPARAT PER CANTAR BINGO?</h1>
        </div>
        <div className="block__answers">
          <a href="/home" className="block__answers__yes">
            SI
          </a>
          <p className="block__answers__or">/</p>
          <a href="/" className="block__answers__no">
            NO
          </a>
        </div>
      </div>
      <div className="socialMedia">
        {logoRoute.map((logo) => (
          <a href={`${logo.link}`}>
            <img
              className="socialMedia__logo"
              src={`${logo.image}`}
              alt={`${logo.name}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Welcome;
