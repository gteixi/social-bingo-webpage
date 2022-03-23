import React from "react";

function SocialMedia() {
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
    <>
      {logoRoute.map((logo) => (
        <a href={`${logo.link}`}>
          <img
            className="socialMedia__logo"
            src={`${logo.image}`}
            alt={`${logo.name}`}
          />
        </a>
      ))}
    </>
  );
}

export default SocialMedia;
