import React from "react";
import "./Card.scss";

function Card({ project }) {
    return (
        <div className="container">
            <div className="title">
                <h2>{project.name}</h2>
                <div className="img">{project.icon}</div>
                <div className="des">{project.description} </div>
                <button className="btn">
                    <a href={project.github}> Github</a>
                </button>
                <button className="btn">
                    <a href={project.deploy}> Deploy</a>
                </button>
            </div>
        </div>
    );
}

export default Card;
