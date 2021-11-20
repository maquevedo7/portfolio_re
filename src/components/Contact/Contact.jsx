import React from "react";
import "./Contact.scss";

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="maxCont">
                <div className="txt">
                    <h1>CONTACT ME</h1>
                </div>
                <form action="#">
                    <div className="formRow">
                        <div className="inputData">
                            <input type="text" />
                            <label>First Name</label>
                        </div>
                        <div className="inputData">
                            <input type="text" />
                            <label>Last Name</label>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="inputData">
                            <input type="text" />
                            <label>Email Address</label>
                        </div>
                        <div className="inputData">
                            <input type="text" />
                            <label>Contact number</label>
                        </div>
                    </div>
                    <div className="formRow textarea">
                        <div className="inputData">
                            <textarea cols="30" rows="10"></textarea>
                            <label>Email Address</label>
                        </div>
                    </div>
                    <div className="formRow textarea">
                        <div className="inputData">
                            <button>submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
