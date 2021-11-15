import React, { Component } from "react";
import "./Pdf.scss";

class Pdf extends Component {
    render() {
        return (
            <div className="container">
                <object
                    data={require("../assets/hdv.pdf")}
                    type="application/pdf"
                    aria-label="pdf"
                ></object>
            </div>
        );
    }
}

export default Pdf;
