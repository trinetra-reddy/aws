import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Contact.scss';

const Contact = () => {
    return (
        <div>
            <Header />
            <div>
                <span>Contact Page!!</span> Link to <Link to={CONSTANTS.ROUTES.ABOUT_PAGE}>About Us</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;