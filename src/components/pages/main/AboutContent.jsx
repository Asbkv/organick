import React from "react";
import "./AboutContent.scss";
import AboutUs from "../../../assets/images/AboutUs.png";
import AboutUs1 from "../../../assets/images/AboutUs1.svg";
import AboutUs2 from "../../../assets/images/AboutUs2.svg";
import AboutTitle from "../../../assets/images/about.png";

const AboutContent = () => {
  return (
    <section id="aboutContent" aria-label="About Us Content">
      <div className="container">
        <div className="about__content">
          <div className="about__content--img">
            <img
              src={AboutUs}
              alt="Our farmers working in organic fields"
              loading="lazy"
            />
          </div>
          <div className="about__content--title">
            <img src={AboutTitle} alt="About Us" />
            <h1>We Believe in Working Accredited Farmers</h1>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="about__content--title__card">
              <div className="about__content--title__card--img">
                <img src={AboutUs1} alt="Organic food icon" />
              </div>
              <div className="about__content--title__card--text">
                <h3>Organic Foods Only</h3>
                <span>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </span>
              </div>
            </div>
            <div className="about__content--title__card">
              <div className="about__content--title__card--img">
                <img src={AboutUs2} alt="Quality standards icon" />
              </div>
              <div className="about__content--title__card--text">
                <h3>Quality Standards</h3>
                <span>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
