import React from "react";
import Card from "./Card/Card";
import "./Portfolio.scss";
import { projects } from "../../data/dataProject";

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="title">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="mapCards">
                {projects.map((project, index) => (
                    <Card key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
