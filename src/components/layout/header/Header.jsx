import React, { useContext, useState } from "react";
import "./Header.scss";
import logo from "../../../assets/images/Logo.header.svg";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { ProductContext } from "../../../context/context";

const Header = () => {
  const { basket } = useContext(ProductContext);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" />

          <div className={`header--nav ${menuActive ? "active" : ""}`}>
            <Link to={"/"} onClick={() => setMenuActive(false)}>
              Home
            </Link>
            <Link to={"/about"} onClick={() => setMenuActive(false)}>
              About
            </Link>
            <Link to={"/contact"} onClick={() => setMenuActive(false)}>
              Contact
            </Link>
            <Link to={"/shop"} onClick={() => setMenuActive(false)}>
              Shop
            </Link>
            <Link to={"/admin"} onClick={() => setMenuActive(false)}>
              Admin
            </Link>
          </div>

          <div className="header--search">
            <div className="header--search__input">
              <input type="text" placeholder="Search..." />
              <a href="#">
                <IoIosSearch />
              </a>
            </div>

            <Link to={"/basket"} className="header--search__cart">
              <a href="#">
                <IoCartOutline />
              </a>
              <h3>Cart ({basket.length})</h3>
            </Link>

            <div
              className={`hamburger ${menuActive ? "active" : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
