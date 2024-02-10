import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="bg-dark text-light py-5">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                <h3 className="text-uppercase mb-lg-4">Location</h3>
                <div>Al Haram, Giza</div>
                <div>514, Pyramid Gardens</div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                <h3 className="text-uppercase mb-lg-4">Around the web</h3>
                <div className="socials d-flex justify-content-center">
                  <a
                    href="/"
                    className="border border-1 p-3 rounded-circle text-decoration-none d-flex justify-content-center align-items-center me-2"
                  >
                    <FontAwesomeIcon icon={"fa-brands fa-facebook-f"} />
                  </a>
                  <a
                    href="/"
                    className="border border-1 p-3 rounded-circle text-decoration-none d-flex justify-content-center align-items-center me-2"
                  >
                    <FontAwesomeIcon icon={"fa-brands fa-twitter"} />
                  </a>
                  <a
                    href="/"
                    className="border border-1 p-3 rounded-circle text-decoration-none d-flex justify-content-center align-items-center me-2"
                  >
                    <FontAwesomeIcon icon={"fa-brands fa-linkedin"} />
                  </a>
                  <a href="/" className="border border-1 p-3 rounded-circle text-decoration-none d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={"fa-solid fa-globe"} />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12 text-center">
                <h3 className="text-uppercase mb-lg-4">About Me</h3>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, asperiores?</div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-black text-white py-3 text-center">
          <div className="container">
            <p>Copyright © Momen Arabi 2024</p>
          </div>
        </section>
      </footer>
    </>
  );
}
