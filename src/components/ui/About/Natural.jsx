import React from "react";
import "./Natural.scss";
import Choose from "../../../assets/images/choose-logo.svg";
import LogoRigth from "../../../assets/images/ChooseRigt-logo.png";
import { FaRegCircle } from "react-icons/fa";
import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import icon3 from "../../../assets/images/icon3.svg";
import icon4 from "../../../assets/images/icon4.svg";

const Natural = () => {
  return (
    <section id="natural" className="natural-section">
      <div className="container">
        <div className="natural-content">
          <div className="natural-text">
            <img src={Choose} alt="Natural products" className="natural-logo" />
            <h1 className="natural-title">
              We do not buy from the open market & traders.
            </h1>
            <p className="natural-description">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>

            <div className="natural-feature">
              <div className="feature-item">
                <FaRegCircle className="feature-icon" />
                <span>100% Natural Product</span>
              </div>
              <p className="feature-description">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>

            <div className="natural-feature">
              <div className="feature-item">
                <FaRegCircle className="feature-icon" />
                <span>Increases resistance</span>
              </div>
              <p className="feature-description">
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
          </div>

          <div className="natural-image">
            <img
              src={LogoRigth}
              alt="Natural products"
              className="natural-main-image"
            />
          </div>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={icon1} alt="Return Policy" />
            </div>
            <h3>Return Policy</h3>
            <p>Simply dummy text of the printingpesetting industry.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={icon2} alt="100% Fresh" />
            </div>
            <h3>100% Fresh</h3>
            <p>Simply dummy text of the printingpesetting industry.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={icon3} alt="Support 24/7" />
            </div>
            <h3>Support 24/7</h3>
            <p>Simply dummy text of the printingpesetting industry.</p>
          </div>

          <div className="benefit-card">
            <div className="benefit-icon">
              <img src={icon4} alt="Secured Payment" />
            </div>
            <h3>Secured Payment</h3>
            <p>Simply dummy text of the printingpesetting industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Natural;
