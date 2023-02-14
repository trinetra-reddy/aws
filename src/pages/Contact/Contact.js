import React from "react";
import { Link } from "react-router-dom";
import { ConatctUsBanner, ContactUs, ContactUsMap, Header, OurOffice, AddressCard,Footer } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Contact.scss';


const Contact = () => {
    const add1 = `# FF7, 2nd Floor, Paniraj Towers,
                     Kamala Nagar, Near Varun Hospital Ananthapuramu,Andhra Pradesh 515001`;
    const numb1 = "+91 96666 22090";
    const mail1 = "accounts@anathawebsolutions.com";
    const add2 = `04-Alamur, Anantapur, Near Sri Chenna Keshava Swamy Temple,
                 Anantapur, Anantapur, Andhra Pradesh, India, 515002`;
    const numb2 = "08554-280433";
    const mail2 = "accounts@anathawebsolutions.com";
   
    return (
        <div>
            <Header />
            <ConatctUsBanner />
            <ContactUs />
            <OurOffice />
            <AddressCard heading1="ANANTAPUR,AP" heading2="ANANTAPUR,AP" address1={add1} phonenumber1={numb1} email={mail1} address2={add2} phonenumber2={numb2} email2={mail2}/>
            <ContactUsMap />
            <Footer />
        </div>
    );
};

export default Contact;