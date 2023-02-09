import React from "react";
import "./AddressCard.scss";
import locationicon from "./location-icon.jpeg";
import callicon from "./callicon.jfif";
import mailicon from "./mail.jfif";

const AddressCard = (props) => {
    return (
        <>
            <div className="addressCard">
                <div className="addressCard1">
                    <div className="address-heading">{props.heading1}</div>
                    <div className="address-details">
                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={locationicon} alt="icon_1" />
                            </div>
                            <div className="address-content1">
                                {props.address1}
                            </div>
                        </div>

                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={callicon} alt="icon_2" />
                            </div>
                            <div className="address-content2">
                                {props.phonenumber1}
                            </div>
                        </div>

                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={mailicon} alt="icon_3" />
                            </div>
                            <div className="address-content2">
                                {props.email}
                            </div>

                        </div>

                    </div>
                </div>
                <div className="addressCard2">
                    <div className="address-heading">{props.heading2}</div>
                    <div className="address-details">
                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={locationicon} alt="icon_1" />
                            </div>
                            <div className="address-content1">
                                {props.address2}
                            </div>

                        </div>

                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={callicon} alt="icon_2" />
                            </div>
                            <div className="address-content2">
                                {props.phonenumber2}
                            </div>
                        </div>
                        <div className="address">
                            <div className="address-icons">
                                <img className="contactus-icons" src={mailicon} alt="icon_3" />
                            </div>
                            <div className="address-content2">
                                {props.email2}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddressCard;