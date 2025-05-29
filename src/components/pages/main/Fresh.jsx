import React from "react";
import "./Fresh.scss";
import Fresh1 from "../../../assets/images/fresh1.png";
import Fresh2 from "../../../assets/images/fresh2.png";

const Fresh = () => {
  return (
    <section id="fresh" aria-label="Fresh products section">
      <div className="container">
        <div className="fresh">
          <img src={Fresh1} alt="Fresh organic vegetables" loading="lazy" />
          <img src={Fresh2} alt="Fresh organic fruits" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Fresh;
