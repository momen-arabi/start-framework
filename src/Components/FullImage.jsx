import React from "react";

export default function FullImage({ imgSrc, closeImg }) {
  return (
    <>
      <div onClick={closeImg} className="full d-flex justify-content-center align-items-center position-fixed vh-100 w-100 bg-dark bg-opacity-75 z-3">
        <img src={imgSrc} alt="full" className="w-35" />
      </div>
    </>
  );
}
