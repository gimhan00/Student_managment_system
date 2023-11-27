import React, { useState } from "react";
import "./Navbar.css"
import { SiAnaconda } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
import '../../App.css';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
      <nav className="container navbar">
        <div className="logo">
          <SiAnaconda color="rgb(223, 254, 17)" size={38} />
          <p className="logo-text">
            xf<span>o</span>rd
          </p>
          <p className="logo-txt">UNIVERSITY</p>
          <FaUniversity color="#fff" size={38} />
        </div>

        <menu>
          <ul
            className="nav-links"
            id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
          >
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Faculties</a>
            </li>
            <li>
              <a href="#download">Downloads</a>
            </li>
            <li>
              <a href="#subscribe">Subscribe</a>
            </li>

            {/* <li>
            <a href="#" className="btn btn-dark">
              Get Started
            </a>
          </li> */}
            <li className="nav-btn">
              <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
            </li>
          </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {showMenu ? (
            <RiCloseLine color="#fff" size={30} />
          ) : (
            <AiOutlineBars color="#fff" size={27} />
          )}
        </div>
      </nav>
   
  );
};

export default Navbar;