import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [showNameLbl, setShowNameLbl] = useState(false);
  const [showAgeLbl, setShowAgeLbl] = useState(false);
  const [showEmailLbl, setShowEmailLbl] = useState(false);
  const [showPassLbl, setShowPassLbl] = useState(false);

  const handleNameInput = (e) => {
    if (e.target.value && e.target.getAttribute("id", "userName")) setShowNameLbl(true);
    else setShowNameLbl(false);
  };
  const handleAgeInput = (e) => {
    if (e.target.value && e.target.getAttribute("id", "userAge")) setShowAgeLbl(true);
    else setShowAgeLbl(false);
  };
  const handleEmailInput = (e) => {
    if (e.target.value && e.target.getAttribute("id", "userEmail")) setShowEmailLbl(true);
    else setShowEmailLbl(false);
  };
  const handlePassInput = (e) => {
    if (e.target.value && e.target.getAttribute("id", "userPass")) setShowPassLbl(true);
    else setShowPassLbl(false);
  };

  return (
    <>
      <section className="bg-white min-vh-100 d-flex justify-content-center align-items-center flex-column text-dark gap-3 py-5 mt-5">
        <div className="container">
          <h2 className="text-uppercase text-center fs-1 fw-bold">Contact Us</h2>
          <div className="separator d-flex justify-content-center align-items-center">
            <div className="divider bg-dark"></div>
            <FontAwesomeIcon icon="fa-solid fa-star" className="mx-3" />
            <div className="divider bg-dark"></div>
          </div>
          <form className="w-75 mx-auto py-5">
            <div className="mb-5">
              {showNameLbl ? (
                <label htmlFor="userName" className="form-label text-success fw-bold">
                  Name:
                </label>
              ) : (
                ""
              )}
              <input
                type="text"
                className="form-control rounded-3"
                id="userName"
                name="userName"
                placeholder="Your username"
                onInput={(e) => handleNameInput(e)}
              />
            </div>
            <div className="mb-5">
              {showAgeLbl ? (
                <label htmlFor="userAge" className="form-label text-success fw-bold">
                  Age:
                </label>
              ) : (
                ""
              )}
              <input
                type="number"
                className="form-control rounded-3"
                id="userAge"
                name="userAge"
                placeholder="Your age"
                onInput={(e) => handleAgeInput(e)}
              />
            </div>
            <div className="mb-5">
              {showEmailLbl ? (
                <label htmlFor="userEmail" className="form-label text-success fw-bold">
                  Email:
                </label>
              ) : (
                ""
              )}
              <input
                type="email"
                className="form-control rounded-3"
                id="userEmail"
                name="userEmail"
                placeholder="Your email"
                onInput={(e) => handleEmailInput(e)}
              />
            </div>
            <div className="mb-5">
              {showPassLbl ? (
                <label htmlFor="userPass" className="form-label text-success fw-bold">
                  Password:
                </label>
              ) : (
                ""
              )}
              <input
                type="password"
                className="form-control rounded-3"
                id="userPass"
                name="userPass"
                placeholder="Your password"
                onInput={(e) => handlePassInput(e)}
              />
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-success btn-lg py-2 px-4">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
