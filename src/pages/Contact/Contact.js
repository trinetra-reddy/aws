import React from "react";
import { Link } from "react-router-dom";
import { ConatctUsBanner,ContactUs,ContactUsMap, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Contact.scss';

const Contact = () => {
    return (
        <div>
            <Header />
            <ConatctUsBanner />
            <ContactUs />
            <ContactUsMap />
        </div>
    );
};

export default Contact;