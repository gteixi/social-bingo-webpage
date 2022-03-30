import React from "react";

import "./SocialMedia.scss";

interface SocialMediaProps {
  size?: boolean;
}

function SocialMedia({ size }: SocialMediaProps) {
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

  return (
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
  );
}

export default SocialMedia;
