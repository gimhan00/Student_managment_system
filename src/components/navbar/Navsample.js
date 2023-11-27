import React, { useState } from "react";
import "./Navbar.css"
import { SiAnaconda } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import "../UI/button/Button.css";
import '../../App.css';


const Navsample = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className="header-bgg">

            <nav className="container navbar">
                <div className="logo">
                    <SiAnaconda color="rgb(223, 254, 17)" size={38} />
                    <p className="logo-text">
                        xf<span>o</span>rd
                    </p>
                    <p className="logo-txt">UNIVERSITY</p>
                    <FaUniversity color="#fff" size={34.5} />
                </div>

                <menu>
                    <ul>
                        <li>
                            <a href="http://localhost:3000/">Home</a>
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
        </header>

    );
};

export default Navsample;