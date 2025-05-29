import React from "react";
import "./Error.scss";
import ErrorBg from "../../assets/images/errorBg.png";
import Logo404 from "../../assets/images/logo-404.png";
import { FaArrowRight } from "react-icons/fa";

const Error = () => {
  return (
    <div id="error">
      <div
        className="errorTitle"
        style={{
          background: `url(${ErrorBg}) no-repeat center/cover`,
          minHeight: "100vh",
        }}
      ></div>
      <div className="container">
        <div className="error">
          <img src={Logo404} alt="img" width={300} />
          <h1>Page not found</h1>
          <p>The page you are looking for doesn't exist or has been moved</p>
          <button>Go to Homepage <FaArrowRight />
</button>
        </div>
      </div>
    </div>
  );
};

export default Error;
