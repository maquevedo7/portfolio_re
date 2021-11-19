import React from "react";
import Card from "./Card/Card";
import "./Portfolio.scss";
import { skills } from "../../data/dataSkills";

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="title">
                <h1>PORTFOLIO</h1>
            </div>
            <div className="mapCards">
                {skills.map((skill, index) => (
                    <Card key={index} data={skill} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
