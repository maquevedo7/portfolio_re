import React from "react";
import "./Header.scss";
import { RiPhoneLine as Phone } from "react-icons/ri";
import { RiMailDownloadLine as Mail } from "react-icons/ri";
//import { FaBeer } from "react-icons/fa";

function Header() {
    return (
        <div className="header">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        AQ<span className="name">nimorih</span>
                    </a>
                    <div className="itemContainer">
                        <Phone className="icon" />
                        <span>+57 318 354 27 64</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span> mafequevedo1@gmail.com </span>
                    </div>
                </div>
                <div className="right">
                    <div className="burger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
