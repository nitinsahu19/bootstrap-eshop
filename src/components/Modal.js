// import React from "react";
import React, { ReactDOM } from "react";

const Backdrop = () => {
  return <div className="backdrop"> </div>;
};

const ModalOverlay = () => {
  return (
    <div className="overlay">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = () => {
  return (
    <React.Fragment>
      ReactDOM.createPortal(
      <Backdrop />, portalElement) ReactDOM.createPortal(
      <ModalOverlay>{props.children}</ModalOverlay>, portalElement)
    </React.Fragment>
  );
};

export default Modal;
