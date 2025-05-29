import React from 'react';
import "./Newsletter.scss"
import bottom from "../../../assets/images/contactBottom.png";

const Newsletter = () => {
  return (
     <div className="contact--block6">
               <div className="image-container">
                 <img
                   src={bottom}
                   alt="img"
                   style={{
                     borderRadius: "30px",
                     width: "100%",
                     display: "block",
                   }}
                 />
                 <div className="text-overlay">
                   <p>
                     Subscribe to <br /> our Newsletter
                   </p>
                   <div className="newsletter-form">
                     <input type="email" placeholder="Your Email Address" />
                     <button>Subscribe</button>
                   </div>
                 </div>
               </div>
             </div>
  );
};

export default Newsletter;