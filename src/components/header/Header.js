import React, { useEffect } from "react";
import "./Header.css";
import "../UI/button/Button.css";
//import phoneHeader from "https://e1.pxfuel.com/desktop-wallpaper/791/788/desktop-wallpaper-1k-student-girl-university-students-thumbnail.jpg";
import { BsMouse } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Student Management System</span></h1>
            <h2><span>We want to be the Centre of excellence in Technological Education.</span>
            </h2>
          
          <p className="u-text-small">
            A dynamic technological institute in the region and actively contribute to the educational, economic and social advancement of Sri Lankan community by:<br /><br />
            <ul align="justify">
              <li>Providing accessible, flexible and efficient technological education and skills training to meet the needs of society and the industry.
                providing an environment for innovation and creativity.</li>
              <li>Formulating an active collaboration with the industry, business and the community for career opportunities.</li>
              <li>Enhancing social and economic pathways and opportunities for young people.</li>
            </ul>
          </p>
          <div className="header-cta">

            <Link to="/login" className="btn-dark">Login </Link>
            <Link to="/reg" className="btn-light">Registration </Link>
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">

        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
      <Outlet />
    </section>
  );
};

export default Header;