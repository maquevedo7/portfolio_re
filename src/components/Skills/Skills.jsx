import React from "react";
import "./Skills.scss";
import { skills } from "../../data/dataSkills";
import Skill from "./Skill/Skill";

function Skills() {
    return (
        <div>
            <div className="skills" id="skills">
                <div className="title">
                    <h1>SKILLS</h1>
                </div>
                <div className="mapSkills">
                    {skills.map((skill, index) => (
                        <Skill key={index} dataSkill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
