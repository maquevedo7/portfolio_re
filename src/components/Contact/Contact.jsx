import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

function Contact() {
    const form = useRef();
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "gmailMessage",
                "template_zvut4k8",
                form.current,
                "user_p76k3ixuleJzrb8MZ3wSP"
            )
            .then(
                (result) => {
                    alert("Your message is sent successfully!");
                },
                (error) => {
                    alert(error.message);
                }
            );
        e.target.reset();
    }

    return (
        <div className="containerContactMe">
            <div className="contactMe">
                <h1>CONTACT</h1>
            </div>
            <div className="containerContacInfo">
                <div className="info">
                    <h2 className="infoGeneral">Gmail</h2>
                    <h2 className="infoGeneral">mafequevedo1@gmail.com</h2>
                </div>
                <div className="info">
                    <h2 className="infoGeneral">Phone</h2>
                    <h2 className="infoGeneral">+57 318 354 27 64</h2>
                </div>
            </div>

            <div className="formContainer">
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className="title">Send me an email</h2>
                    <div>
                        <label className="labels">Name</label>
                        <input
                            className="inputs"
                            type="text"
                            name="to_name"
                            placeholder="Name"
                        ></input>
                    </div>
                    <div>
                        <label className="labels">Email</label>
                        <input
                            className="inputs"
                            type="text"
                            name="from_name"
                            placeholder="Email"
                        ></input>
                    </div>
                    <div>
                        <label className="labels">Message</label>
                        <input
                            className="inputs"
                            type="text"
                            name="message"
                            placeholder="Message"
                        ></input>
                    </div>
                    <div>
                        <input
                            className="submit"
                            type="submit"
                            value="Send message"
                        ></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
