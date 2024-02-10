import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [show, toggleShow] = useState(true);
  const handleCollapse = () => {
    toggleShow(!show);
    if (show) document.getElementById("navbarCollapse").classList.add("show");
    else document.getElementById("navbarCollapse").classList.remove("show");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container">
          <Link className="navbar-brand fs-2 fw-bolder text-uppercase" to={"/"}>
            My Portfolio
          </Link>
          <button
            onClick={handleCollapse}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-lg-auto py-lg-0 py-sm-4 text-center mb-lg-0 gap-3">
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink nav-link text-decoration-none fw-bold py-2 px-3 rounded-3 me-lg-3 text-light text-uppercase"
                  to={"/about"}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-NavLink nav-link text-decoration-none fw-bold py-2 px-3 rounded-3 me-lg-3 text-light text-uppercase"
                  to={"/portfolio"}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-NavLink nav-link text-decoration-none fw-bold py-2 px-3 rounded-3 text-light text-uppercase" to={"/contact"}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
