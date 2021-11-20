import React from "react";
import "./Card.scss";
import { SiGithub as Github } from "react-icons/si";
import { SiVercel as Deploy } from "react-icons/si";

function Card({ project }) {
    return (
        <div className="container">
            <div className="conTitle">
                <h2 className="title">{project.name}</h2>
            </div>
            <div className="desc">
                <div className="icon">{project.icon}</div>
                <div className="description">{project.description} </div>
            </div>
            <div className="btns">
                <button className="btn">
                    <a href={project.github}>
                        <Github />
                    </a>
                </button>
                <button className="btn">
                    <a href={project.deploy}>
                        <Deploy />
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Card;
