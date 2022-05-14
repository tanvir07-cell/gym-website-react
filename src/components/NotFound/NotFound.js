import React from "react";
import "./NotFound.css";
import notFound from "../../images/notFound.svg";

const NotFound = () => {
  return (
    <div className="error-page">
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
