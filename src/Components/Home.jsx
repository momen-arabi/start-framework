import React from "react";
import hero from "../Assets/avataaars.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <section className="container d-flex justify-content-center align-items-center min-vh-100 flex-column text-light gap-3 py-5">
      <img src={hero} alt="hero-img" id="avatar"/>
      <h2 className="text-uppercase text-center fs-1 fw-bold">Momen Arabi</h2>
      <div className="separator d-flex justify-content-center align-items-center">
        <div className="divider bg-light"></div>
        <FontAwesomeIcon icon="fa-solid fa-star" className="mx-3"/>
        <div className="divider bg-light"></div>
      </div>
      <p className="text-center">Frontend Developer - Web Designer - Backend Developer</p>
    </section>
  );
}
