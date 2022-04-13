import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="center-container">
    <h1>404 - Not Found!</h1>
    <h1>
      <Link to="/">Go Home</Link>
    </h1>
  </div>
);

export default NotFound;
