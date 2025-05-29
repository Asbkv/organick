import React, { useContext, useEffect } from "react";
import "./About.scss";
import { ProductContext } from "../../../context/context";
import banner from "../../../assets/images/banner.png";
import Vegetable from "../../../assets/images/tomate.png";
import aboutLogo from "../../../assets/images/about.png";
import Tractor from "../../../assets/images/Tractor.svg";
import Icon from "../../../assets/images/Icon.svg";
import { FaArrowRight } from "react-icons/fa";
import Natural from "./Natural";
import Experts from "./Experts";
import Newsletter from "./Newsletter";

const About = () => {
  // const { dataProduct } = useContext(ProductContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="about">
      <div
        className="about-banner"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "200px",
        }}
      />
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img
              src={Vegetable}
              alt="Vegetables"
              className="about-vegetable-img"
            />
          </div>
          <div className="about-text-content">
            <img src={aboutLogo} alt="About logo" className="about-logo-img" />
            <h1 className="about-title">We do Creative Things for Success</h1>
            <div className="about-description">
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <img
                  src={Tractor}
                  alt="Tractor icon"
                  className="feature-icon"
                />
                <h2 className="feature-title">Modern Agriculture Equipment</h2>
              </div>
              <div className="feature-item">
                <img src={Icon} alt="Natural icon" className="feature-icon" />
                <h2 className="feature-title">No growth hormones are used</h2>
              </div>
            </div>
            <button className="about-explore-btn">
              Explore More <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
        <Natural />
        <Experts />
        <Newsletter />
      </div>
    </div>
  );
};

export default About;
