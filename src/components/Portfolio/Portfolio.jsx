import React from "react";
import Card from "./Card/Card";
import "./Portfolio.scss";
import { skills } from "../../data/dataSkills";

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            {skills.map((skill, index) => (
                <Card key={index} data={skill} />
            ))}
        </div>
    );
}

export default Portfolio;
