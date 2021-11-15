import React from "react";
import "./Card.scss";

function Card() {
    return (
        <div className="container">
            <div className="title">
                <h1>50 challenges</h1>
                <div className="img">
                    {/* <img
                        src="https://i.ibb.co/bHypPnS/50.png"
                        alt="50"
                        border="0"
                    ></img> */}
                </div>
            </div>
            <div className="description">qué pasó</div>
        </div>
    );
}

export default Card;
