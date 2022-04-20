import React from "react";

import "./SocialMedia.scss";

interface SocialMediaProps {
  size?: boolean;
  withDescription?: boolean;
}

function SocialMedia({ size, withDescription }: SocialMediaProps) {
  const logoRoutePath = "./assets/socialMedia/";

  const logoRoute = [
    {
      name: "Instagram",
      image: `${logoRoutePath}instagram.svg`,
      link: "https://www.instagram.com/lasocialdisfunktion/",
    },
    {
      name: "Facebook",
      image: `${logoRoutePath}facebook.svg`,
      link: "https://www.facebook.com/lasocialdisfunktion/",
    },
    {
      name: "Youtube",
      image: `${logoRoutePath}youtube.svg`,
      link: "https://www.youtube.com/channel/UCAmYo8uFnnmWaG0qBbmqEfw",
    },
    {
      name: "SoundCloud",
      image: `${logoRoutePath}soundcloud.svg`,
      link: "https://soundcloud.com/la-social-disfunktion",
    },
  ];

  return !withDescription ? (
    <>
      {logoRoute.map((logo) => (
        <a href={`${logo.link}`} key={logo.name}>
          <img
            className={size ? "socialMedia__logoMenu" : "socialMedia__logoPage"}
            src={`${logo.image}`}
            alt={`${logo.name}`}
          />
        </a>
      ))}
    </>
  ) : (
    <>
      {logoRoute.map((logo) => (
        <div className="socialMediaContainer">
          <a href={`${logo.link}`} key={logo.name}>
            <div className="socialMediaContainer__block">
              <img
                className="socialMediaContainer__name"
                src={`${logo.image}`}
                alt={`${logo.name}`}
              />
              <p className="socialMediaContainer__name">@lasocialdisfunktion</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}

export default SocialMedia;
