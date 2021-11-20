import React from "react";
import "./SocialNet.scss";
import { AiOutlineLinkedin as Linkedin } from "react-icons/ai";
import { AiOutlineGithub as Github } from "react-icons/ai";
import { AiOutlineGitlab as Gitlab } from "react-icons/ai";
import { SiVercel as Vercel } from "react-icons/si";

function Footer() {
    return (
        <div className="containerWrap" id="socialNet">
            <div className="title">
                <h1>SOCIAL NETWORKS</h1>
            </div>
            <div className="wrap">
                <div className="personal">
                    <p>
                        I am a cheerful, communicative, strong and risk-taking
                        person. I really like to learn new things and improve
                        every day. I am a fast learner, and I like to perfect
                        that knowledge as best I can to apply it in other
                        contexts. I am adaptable and I like to know the world.
                    </p>
                </div>
                <div className="socialNet">
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
                    <a
                        className="link"
                        href="https://vercel.com/maquevedo7"
                        target="__blank"
                    >
                        <Vercel />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
