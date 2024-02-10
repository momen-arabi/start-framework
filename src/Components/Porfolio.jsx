import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullImage from "./FullImage";
import Image1 from "../Assets/poert1.png";
import Image2 from "../Assets/port2.png";
import Image3 from "../Assets/port3.png";

export default function Porfolio() {
  const [show, toggleShow] = useState(false);
  const [src, setSrc] = useState("");

  const handleClick = (e) => {
    toggleShow(!show);
    setSrc(e.target.parentElement.children[1].getAttribute("src"));
  };

  const closeImg = () => {
    toggleShow(false);
  };

  return (
    <>
      {show ? <FullImage imgSrc={src} closeImg={closeImg} /> : ""}
      <section className="bg-white min-vh-100 d-flex justify-content-center align-items-center flex-column text-dark gap-3 py-5 mt-5">
        <div className="container">
          <h2 className="text-uppercase text-center fs-1 fw-bold">Portfolio</h2>
          <div className="separator d-flex justify-content-center align-items-center">
            <div className="divider bg-dark"></div>
            <FontAwesomeIcon icon="fa-solid fa-star" className="mx-3" />
            <div className="divider bg-dark"></div>
          </div>
          <div className="row g-5 py-5">
            <div className="port col-lg-4 col-md-6 col-sm-12 position-relative" onClick={(e) => handleClick(e)}>
              <div className="inner position-relative">
                <div className="overlay position-absolute bg-success bg-opacity-90 rounded-3 h-100 w-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="fa-5x text-light" />
                </div>
                <img src={Image1} alt="image1" className="w-100 rounded-3" />
              </div>
            </div>
            <div className="port col-lg-4 col-md-6 col-sm-12 position-relative" onClick={(e) => handleClick(e)}>
              <div className="inner position-relative">
                <div className="overlay position-absolute bg-success bg-opacity-90 rounded-3 h-100 w-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="fa-5x text-light" />
                </div>
                <img src={Image2} alt="image2" className="w-100 rounded-3" />
              </div>
            </div>
            <div className="port col-lg-4 col-md-6 col-sm-12 position-relative" onClick={(e) => handleClick(e)}>
              <div className="inner position-relative">
                <div className="overlay position-absolute bg-success bg-opacity-90 rounded-3 h-100 w-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="fa-5x text-light" />
                </div>
                <img src={Image3} alt="image3" className="w-100 rounded-3" />
              </div>
            </div>
            <div className="port col-lg-4 col-md-6 col-sm-12 position-relative" onClick={(e) => handleClick(e)}>
              <div className="inner position-relative">
                <div className="overlay position-absolute bg-success bg-opacity-90 rounded-3 h-100 w-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="fa-5x text-light" />
                </div>
                <img src={Image1} alt="image1" className="w-100 rounded-3" />
              </div>
            </div>
            <div className="port col-lg-4 col-md-6 col-sm-12 position-relative" onClick={(e) => handleClick(e)}>
              <div className="inner position-relative">
                <div className="overlay position-absolute bg-success bg-opacity-90 rounded-3 h-100 w-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="fa-5x text-light" />
                </div>
                <img src={Image2} alt="image2" className="w-100 rounded-3" />
              </div>
            </div>
            <div className="port col-lg-4 col-md-6 col-sm-12 position-relative" onClick={(e) => handleClick(e)}>
              <div className="inner position-relative">
                <div className="overlay position-absolute bg-success bg-opacity-90 rounded-3 h-100 w-100 start-0 top-0 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon="fa-solid fa-plus" className="fa-5x text-light" />
                </div>
                <img src={Image3} alt="image3" className="w-100 rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
