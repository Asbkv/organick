import React from "react";
import HomeBg from "../../../assets/images/home-img.jpg";
import welcomeTitle from "../../../assets/images/Natural Food.svg";
import "./MainWelcome.scss";
import { FaArrowCircleRight } from "react-icons/fa";

const MainWelcome = () => {
  return (
    <section
      id="welcome"
      style={{
        background: `url(${HomeBg}) no-repeat center/cover`,
        minHeight: "80vh",
      }}
      aria-label="Welcome section"
    >
      <div className="container">
        <div className="welcome">
          <img src={welcomeTitle} alt="Natural Food" />

          <h1>
            Choose the best <br /> healthier way of life
          </h1>
          <button type="button" aria-label="Explore Now">
            Explore Now <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainWelcome;
