import React from "react";
import './ContactUsForm.scss';
import icon_1 from "../../images/callicon.jfif";
import icon_2 from "../../images/mail.jfif";


const ContactUsForm = () => {
    return (
        <div className="contactus ">
            <div className="contactus-col1">
                <div className="contactus-col1-heading">
                    <div className="contactus-col1-heading1">Don't hesitate to</div>
                    <div className="contactus-col1-heading2">contact us</div>
                </div>
                <div className="contactus-col1-wrpr1">
                    <img className="contactus-icons" src={icon_1} alt="icon_1" />
                    <div className="contactus-col1-wrpr1-text">
                        <div className="contactus-col1-wrpr1-text-h">Call Us</div>
                        <div className="contactus-col1-wrpr1-text-p">
                            <a href="tel:+91 96666 22090" className="conatctus-call-mail-p">+91 96666 22090</a>
                        </div>
                    </div>
                </div>
                <div className="contactus-col1-wrpr1">
                    <img className="contactus-icons" src={icon_2} alt="icon_1" />
                    <div className="contactus-col1-wrpr1-text">
                        <div className="contactus-col1-wrpr1-text-h">Write to us</div>
                        <div className="contactus-col1-wrpr1-text-p">
                            <a href="mailto:accounts@anathawebsolutions.com" className="conatctus-call-mail-p">accounts@ananthawebsolutions.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactus-col2">
            <div className="contactus-msg-heading">SEND US A MESSAGE</div>
            <div className="contactus-msg-text">"At Alt Digital Technologies, our goal is to deliver solutions that exactly meet the business objectives of our clients. We look forward to learning how we can help you."</div>

                <form
                    className="contactus-form"
                    id="fs-frm"
                    name="simple-contact-form"
                    acceptCharset="utf-8"
                    
                    method="post"
                >
                    <div className="contactus-col2-input2">
                        <div className="contactus-col2-input2-sub1">
                            <label className="form-label" id="form-text">Full Name</label>
                            <input
                                className="contactus-inputs"
                                id="name"
                                required
                                name="name"
                                type="text"
                            ></input>
                        </div>
                        <div className="contactus-col2-input2-sub2">
                        <label className="form-label" id="form-text">Email</label>
                            <input
                                className="contactus-inputs"
                                id="name"
                                required
                                name="name"
                                type="text"
                            ></input>
                        </div>
                    </div>

                    <div className="contactus-col2-input2">
                        <div className="contactus-col2-input2-sub1">
                        <label className="form-label">Phone</label>
                            <input
                                className="contactus-inputs"
                                id="name"

                                name="name"
                                type="text"
                            ></input>
                        </div>
                        <div className="contactus-col2-input2-sub2">
                        <label className="form-label">Organization</label>
                            <input
                                className="contactus-inputs"
                                id="name"

                                name="name"
                                type="text"
                            ></input>
                        </div>
                    </div>
                    <div className="contactus-col2-input3">
                    <label className="form-label" id="form-text">Comment or Message</label>
                        <textarea
                            className="contactus-inputs"
                            id="contactus-inputmessage"
                            required
                            name="name"
                            type="text"
                        ></textarea>
                    </div>
                    <div className="contactus-button-1">
                        <button className="contactus-button" type="submit">Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUsForm;