import React from "react";
import { Link } from "react-router-dom";
import { ConatctUsBanner,ContactUs, Footer, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Contact.scss';

const Contact = () => {
    return (
        <div>
            <Header />
            <ConatctUsBanner />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Contact;