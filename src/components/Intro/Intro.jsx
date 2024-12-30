import React, { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";
import pdf from "../../assets/hdv.pdf";

function Intro() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["Frontend Developer", "Digital Art Engineer", "Designer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img
                        src="https://i.ibb.co/rZSPLTK/port.png"
                        alt="port"
                        border="0"
                    ></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there! I'm</h2>
                    <h1>Hiromi Acosta</h1>
                    <h3 ref={textRef}> </h3>
                </div>
                <button className="cv">
                    <a
                        href={pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="pdf"
                    >
                        Download CV
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Intro;
