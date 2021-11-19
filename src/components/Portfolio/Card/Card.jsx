import React from "react";
import "./Card.scss";

function Card() {
    return (
        <div className="container">
            <div className="title">
                <h2>50 challenges</h2>
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
