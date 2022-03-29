/* eslint-disable global-require */
import React from "react";
import { Carousel } from "react-responsive-carousel";

import Menu from "../../components/Menu/Menu";

import useWindowDimensions from "../../hooks/getWindowDimensions";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Pictures.scss";

function Pictures() {
  const { width } = useWindowDimensions();

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

  return (
    <>
      <Menu withColor />
      <div className="picturesContainer">
        <div className="picturesContainer__carrousel">
          <Carousel
            autoPlay
            dynamicHeight
            infiniteLoop
            showIndicators={false}
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
      </div>
    </>
  );
}

export default Pictures;
