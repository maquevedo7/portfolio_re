import React from "react";
import "./Menu.scss";
import { GoHome as Home } from "react-icons/go";
import { GoGear as Gear } from "react-icons/go";
import { FaFolderOpen as Folder } from "react-icons/fa";
import { IoIosContacts as Social } from "react-icons/io";
import { MdContactPage as Contact } from "react-icons/md";

function Menu({ menuOpen, setmenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#intro">
                        <Home className="icon" /> Home
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#skills">
                        <Gear className="icon" /> Skills
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#portfolio">
                        <Folder className="icon" /> Portfolio
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#socialNet">
                        <Social className="icon" /> Social Networks
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#contact">
                        <Contact className="icon" /> Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
