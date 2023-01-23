import React from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Services.scss';

const Services = () => {
    return (
        <div>
            <Header />
            <div>
                <span>Services Pagesssss!!</span> Link to <Link to={CONSTANTS.ROUTES.CONTACT_PAGE}>Contact Us</Link>
            </div>
            <Footer />
        </div>
    );
};

export default Services;