import React from "react";
import "./SocialNet.scss";
import { AiOutlineLinkedin as Linkedin } from "react-icons/ai";
import { AiOutlineGithub as Github } from "react-icons/ai";
import { AiOutlineGitlab as Gitlab } from "react-icons/ai";

function Footer() {
    return (
        <div className="wrap">
            <div className="socialNet" id="socialNet">
                <a
                    className="link"
                    href="https://www.linkedin.com/in/hiromi-acosta-quevedo-2831381ba/"
                    target="__blank"
                >
                    <Linkedin />
                </a>
                <a
                    className="link"
                    href="https://github.com/maquevedo7"
                    target="__blank"
                >
                    <Github />
                </a>
                <a
                    className="link"
                    href="https://gitlab.com/maquevedo7"
                    target="__blank"
                >
                    <Gitlab />
                </a>
            </div>
            .
        </div>
    );
}

export default Footer;
