import React from "react";
import "./Reviews.scss";
import reviewsBg from "../../../assets/images/reviews.jpg";
import Testimonial from "../../../assets/images/Testimonial.jpg";
import woman from "../../../assets/images/woman.jpg";

const Reviews = () => {
  return (
    <section
      id="reviews"
      style={{
        backgroundImage: `url(${reviewsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Customer reviews section"
    >
      <div className="container">
        <div className="reviews">
          <div className="reviews-content">
            <img src={Testimonial} alt="Testimonial title" />
            <h1>What Our Customer Saying?</h1>
            <img
              src={woman}
              alt="Customer portrait"
              className="woman"
              loading="lazy"
            />
            <div className="rating-stars">
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
              <div className="star" />
            </div>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </p>
            <h2>Sara Taylor</h2>
            <h6>Consumer</h6>
          </div>
        </div>
        <div className="block--title">
          <div className="block" aria-label="100% Organic">
            <h3>100%</h3>
            <h5>Organic</h5>
          </div>
          <div className="block" aria-label="285 Active Products">
            <h3>285</h3>
            <h5>Active Product</h5>
          </div>
          <div className="block" aria-label="350+ Organic Orchards">
            <h3>350+</h3>
            <h5>Organic Orchads</h5>
          </div>
          <div className="block" aria-label="25+ Years of Farming">
            <h3>25+</h3>
            <h5>Years of Farming</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
