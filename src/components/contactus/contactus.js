import React from "react";
import "./contactus.scss";
import callicon from "./PhoneIcon.jfif";
import mailicon from "./mail.jfif";

const ContactUs = () => {
    return (
        <>
            <div className="contactUs">
                <div className="contactUs1">
                    <div className="contactUs-text">Don't hesitate to</div>
                    <div className="contactUs-text">contact us</div>

                    <div className="contactus-call-mail">
                        <img  className="contactus-icons" src={callicon} alt="icon_1" />
                        <div className="contactus-contact-mail-details">
                            <div className="contactus-call-mail-text">Call Us</div>
                            <a href="tel:+91-120-4226757" className="conatctus-call-mail-p">+91-120-4226757</a>
                        </div>
                    </div>
                    <div className="contactus-call-mail">
                        <img className="contactus-icons" src={mailicon} alt="icon_1" />
                        <div className="contactus-contact-mail-details">
                            <div className="contactus-call-mail-text">Write to us</div>
                            <a href="mailto:info@altdigital.tech" className="conatctus-call-mail-p">info@altdigital.tech</a>

                        </div>
                    </div>
                </div>


                <div className="contactUs2">
                    <div className="contactus-msg-heading">SEND US A MESSAGE</div>
                    <div className="contactus-msg-text">"At Alt Digital Technologies, our goal is to deliver solutions that exactly meet the business objectives of our clients. We look forward to learning how we can help you."</div>

                    <div className="contactus-forms">
                        <form
                            className="contactus-form"
                            id="fs-frm"
                            name="simple-contact-form"
                            acceptCharset="utf-8"
                            action="https://formspree.io/f/xlevpvdb"
                            method="post"
                        >
                            <div className="contactusform1">
                                <div className="contactus-input1">
                                    <div className="form-content" id="form-text">Full Name</div>
                                    <input
                                        className="contactus-input"
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                    ></input>
                                </div>
                                <div className="contactus-input1">
                                    <div className="form-content" id="form-text">Email</div>
                                    <input
                                        className="contactus-input"
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                    ></input>
                                </div>
                            </div>
                            <div className="contactusform2">
                                <div className="contactus-input2">
                                    <div  id="form-text">Phone</div>
                                    <input
                                        className="contactus-input"
                                        id="name"
                                        name="name"
                                        type="text"
                                    ></input>
                                </div>

                                <div className="contactus-input2">
                                    <div id="form-text">Organization</div>
                                    <input
                                        className="contactus-input"
                                        id="contactus-inputmessage"
                                        name="name"
                                        type="text"
                                    ></input>
                                </div>
                            </div>
                            <div className="contactus-comment">
                                    <div className="form-content" id="form-text">Comment or Message</div>
                                    <input className="contactus-msg-input"
                                        id="contactus-msg"
                                        name="name"
                                        type="text">

                                    </input>
                            </div>

                            <div className="contactus-button-1">
                                <button className="contactus-button" type="submit">Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;