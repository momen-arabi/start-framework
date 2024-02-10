import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section className="container d-flex justify-content-center align-items-center min-vh-100 flex-column text-light gap-3 py-5">
      <h2 className="text-uppercase text-center fs-1 fw-bold">Who am I?</h2>
      <div className="separator d-flex justify-content-center align-items-center">
        <div className="divider bg-light"></div>
        <FontAwesomeIcon icon="fa-solid fa-star" className="mx-3" />
        <div className="divider bg-light"></div>
      </div>
      <div className="row gy-3">
        <div className="col-lg-5 col-sm-12 offset-lg-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolores repudiandae, laboriosam earum voluptatem soluta distinctio
          consequuntur odit corporis animi adipisci officiis nostrum similique minus, aperiam reprehenderit, cum esse ab.
        </div>
        <div className="col-lg-5 col-sm-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem sed minus, error ex nobis corporis officia, expedita dignissimos
          placeat necessitatibus possimus maiores eos quod est! Totam, suscipit? Libero, illum.
        </div>
      </div>
    </section>
  );
}
