import React from "react";
import "./Experts.scss";
import expertLogo from "../../../assets/images/expert-logo.png";
import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
import userIcons from "../../../assets/images/userIcons.svg";
import { FaFacebook, FaTwitter } from "react-icons/fa";

import aboutTop from "../../../assets/images/about.png";
import offer1 from "../../../assets/images/offer1.jpg";
import offer2 from "../../../assets/images/offer2.jpg"
import offer3 from "../../../assets/images/offer3.jpg"
import offer4 from "../../../assets/images/offer4.jpg"

const Experts = () => {
  return (
    <div id="experts">
      <div className="container">
        <center>
          <img src={expertLogo} alt="img" />
          <h1>Our Organic Experts</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's <br /> standard dummy text ever
            since the 1500s, when an unknown printer took a galley.
          </p>
        </center>
        <div className="experts">
          <div className="experts--block">
            <div className="experts--block__card">
              <img src={user1} alt="img" />
              <div className="experts--block__card--title">
                <div className="experts--block__card--title__text">
                  <h2>Giovani Bacardo</h2>
                  <img src={userIcons} alt="img" />
                </div>
                <div className="experts--block__card--icons">
                  <FaFacebook />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="experts--block">
            <div className="experts--block__card">
              <img src={user2} alt="img" />
              <div className="experts--block__card--title">
                <div className="experts--block__card--title__text">
                  <h2>Marianne Loreno</h2>
                  <img src={userIcons} alt="img" />
                </div>
                <div className="experts--block__card--icons">
                  <FaFacebook />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div className="experts--block">
            <div className="experts--block__card">
              <img src={user3} alt="img" />
              <div className="experts--block__card--title">
                <div className="experts--block__card--title__text">
                  <h2>Riga Pelore</h2>
                  <img src={userIcons} alt="img" />
                </div>
                <div className="experts--block__card--icons">
                  <FaFacebook />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="offer">
          <img src={aboutTop} alt="img" />
          <h4>What We Offer for You</h4>
         <div className="offer--title">
           <div className="offer--block">
            <img src={offer1} alt="img" />
            <h5>Spicy</h5>
          </div>
            <div className="offer--block">
            <img src={offer2} alt="img" />
            <h5>Nuts & Feesd</h5>
          </div>
             <div className="offer--block">
            <img src={offer3} alt="img" />
            <h5>Fruits</h5>
          </div>
            <div className="offer--block">
            <img src={offer4} alt="img" />
            <h5>Vegetable</h5>
          </div>
         </div>
        </div>
    </div>
  );
};

export default Experts;
