import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return <span className="position-absolute w-75 h-75 d-flex flex-column align-items-center bg-white justify-content-center"><Spinner animation="border" variant="info" /></span>;
};

export default Loader;