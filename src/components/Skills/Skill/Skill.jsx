import React from "react";
import "./Skill.scss";

function Skill({ dataSkill }) {
    return (
        <div>
            <div className="boxSkill">
                <div className="txt">{dataSkill.txt} </div>
                <div className="icon">{dataSkill.icon} </div>
                <div className="tech">{dataSkill.tech} </div>
            </div>
        </div>
    );
}

export default Skill;
