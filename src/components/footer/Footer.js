import React from "react";
import "./Footer.css";
//import logo from "../../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import {SiAnaconda} from "react-icons/si";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull; Support</a>
            <a href="#">&bull; About</a>
            <a href="#">&bull; Learn</a>
            <a href="#">&bull; Hosting</a>
            
          </div>
        </div>
        <div className="footer-box">
          <h4>Studies</h4>
          <div className="footer-links">
            <a href="#">&bull; Moodle</a>
            <a href="#">&bull; LearnOrg</a>
            <a href="#">&bull; HelpDesk</a>
            <a href="#">&bull; WebMail</a>
           
          </div>
        </div>
        <div className="footer-box">
          <h4>Contact Us</h4>
          <div className="footer-contact u-text-small">
            <p>
              <FaMapMarkerAlt color="rgb(169, 133, 246)"/> &nbsp; Address: Sri Lanka.
            </p>
            <p>
              <FaPhoneAlt color="rgb(169, 133, 246)"/> &nbsp; Phone: +94 2 211 211.
            </p>
            <p>
              <FaFax color="rgb(169, 133, 246)"/> &nbsp; Fax: +94211211
            </p>
            <p>
              <FaEnvelope color="rgb(169, 133, 246)"/> &nbsp; Email: info@oxford.com
            </p>
            <p>
              <FaGlobe color="rgb(169, 133, 246)"/> &nbsp; Website: www.oxford.com
            </p>
          </div>
        </div>
        <div className="footer-box">
        
            <SiAnaconda color="rgb(223, 254, 17)" size={25}/><span>xford</span>
          <p className="u-text-small">&copy; Copyright 2023. Oxford.com</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;