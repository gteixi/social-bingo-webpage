/* eslint-disable global-require */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

import useWindowDimensions from "../../hooks/getWindowDimensions";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Pictures.scss";

function Pictures() {
  const { width, height } = useWindowDimensions();

  console.log(width, height);

  const navigate = useNavigate();
  const images = [
    require("./images/pic1.jpg"),
    require("./images/pic2.jpg"),
    require("./images/pic3.jpg"),
    require("./images/pic4.jpg"),
    require("./images/pic5.jpg"),
    require("./images/pic6.jpg"),
    require("./images/pic7.jpg"),
    require("./images/pic8.jpg"),
  ];

  const goMenu = () => {
    navigate("/home");
  };

  return (
    <div className="picturesContainer">
      <div className="picturesContainer__carrousel">
        <Carousel
          autoPlay
          dynamicHeight
          infiniteLoop
          showThumbs={false}
          transitionTime={2000}
          interval={5000}
          emulateTouch
          showStatus={false}
          centerMode
          width={width > 480 ? width * 0.7 : width * 0.9}
          centerSlidePercentage={width > 480 ? 100 : 200}
        >
          {images.map((image) => (
            <div>
              <img className="lala" src={String(image)} alt="test" />
            </div>
          ))}
        </Carousel>
      </div>
      <button
        type="button"
        onClick={goMenu}
        className="picturesContainer__button"
      >
        GO BACK
      </button>
    </div>
  );
}

export default Pictures;
