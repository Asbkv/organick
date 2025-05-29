import React from "react";
import "./Footer.scss";
import logo from "../../../assets/images/Logo.header.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import { FaPinterest, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--blockLeft">
            <h1>Contact Us</h1>
            <h3>Email</h3>
            <h4>needhelp@Organia.com</h4>

            <h3>Phone</h3>
            <h4>666 888 888</h4>

            <h3>Address</h3>
            <h4>88 road, borklyn street, USA</h4>
          </div>
          
          {/* Удаляем разделительные линии - они будут скрыты на мобильных */}
          <div className="footer--line"></div>
          
          <div className="footer--blockCenter">
            <img src={logo} alt="img" />
            <h4>
              Simply dummy text of the printing and typesetting industry. <br />
              Lorem Ipsum simply dummy text of the printing
            </h4>
            <div className="footer--blockCenter__icons">
              <div className="footer--blockCenter__icons--circle">
                <AiOutlineInstagram />
              </div>
              <div className="footer--blockCenter__icons--circle">
                <MdOutlineFacebook />
              </div>
              <div className="footer--blockCenter__icons--circle">
                <FaTwitter />
              </div>
              <div className="footer--blockCenter__icons--circle">
                <FaPinterest />
              </div>
            </div>
          </div>
          
          <div className="footer--line"></div>
          
          <div className="footer--blockRigth">
            <h1>Utility Pages</h1>
            <h4>Style Guide</h4>
            <h4>404 Not Found</h4>
            <h4>Password Protected</h4>
            <h4>Licences</h4>
            <h4>Changelog</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;