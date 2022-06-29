/* eslint-disable global-require */
import React, { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import Menu from "../../components/Menu/Menu";

import "./Pictures.scss";

function Pictures() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const images = [
    { src: require("./images/pic1.jpg"), width: 4, height: 3 },
    { src: require("./images/pic2.jpg"), width: 4, height: 3 },
    { src: require("./images/pic3.jpg"), width: 4, height: 3 },
    { src: require("./images/pic4.jpg"), width: 4, height: 3 },
    { src: require("./images/pic5.jpg"), width: 4, height: 3 },
    { src: require("./images/pic6.jpg"), width: 4, height: 3 },
    { src: require("./images/pic7.jpg"), width: 4, height: 3 },
    { src: require("./images/pic8.jpg"), width: 4, height: 3 },
    { src: require("./images/pic1.jpg"), width: 4, height: 3 },
    { src: require("./images/pic2.jpg"), width: 4, height: 3 },
    { src: require("./images/pic3.jpg"), width: 4, height: 3 },
    { src: require("./images/pic4.jpg"), width: 4, height: 3 },
    { src: require("./images/pic5.jpg"), width: 4, height: 3 },
    { src: require("./images/pic6.jpg"), width: 4, height: 3 },
    { src: require("./images/pic7.jpg"), width: 4, height: 3 },
    { src: require("./images/pic8.jpg"), width: 4, height: 3 },
    { src: require("./images/pic1.jpg"), width: 4, height: 3 },
    { src: require("./images/pic2.jpg"), width: 4, height: 3 },
    { src: require("./images/pic3.jpg"), width: 4, height: 3 },
    { src: require("./images/pic4.jpg"), width: 4, height: 3 },
    { src: require("./images/pic5.jpg"), width: 4, height: 3 },
    { src: require("./images/pic6.jpg"), width: 4, height: 3 },
    { src: require("./images/pic7.jpg"), width: 4, height: 3 },
    { src: require("./images/pic8.jpg"), width: 4, height: 3 },
  ];

  return (
    <>
      <Menu withColor />
      <div className="picturesContainer">
        <Gallery photos={images} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                fullScreen={false}
                currentIndex={currentImage}
                views={images.map((x) => ({
                  ...x,
                  srcset: x.src,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </>
  );
}

export default Pictures;
