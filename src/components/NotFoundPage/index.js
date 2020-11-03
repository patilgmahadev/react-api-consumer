import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="page-text">404 Page NotFound</h1>
      <p className="home-link">
        <Link to="/">Go to Home</Link>
      </p>
    </div>
  );
};

export default memo(NotFoundPage);
