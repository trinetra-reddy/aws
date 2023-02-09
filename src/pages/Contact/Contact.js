import React from "react";
import { Link } from "react-router-dom";
import { ConatctUsBanner, ContactUs, ContactUsMap, Header, OurOffice, AddressCard,Footer } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Contact.scss';


const Contact = () => {
    const add1 = `1211,Tower B,i-Thum,A-40,Sector 62,Noida,Uttar Pradesh 201309`;
    const numb1 = "+91 1204 226 757";
    const mail1 = "info@altdigital.tech";
    const add2 = `HX82+C6G, Vaddinkoppa, Navangeri, Sirsi , Karnataka 581318`;
    const numb2 = "+91 8588 830 206";
    const mail2 = "sirsi@altdigital.tech";
    const add3 = `Clayworks Shankaraa, Cabin 1, 4th Floor, Shankaraa Foundation Campus, Kanakapura Rd, Doddakallasandra, Konanakunte, Bengaluru, Karnataka 560062`;
    const numb3 = "+91 9711 524 577";
    const mail3 = "blr@altdigital.tech";
    const add4 = `112 Moeden Road ,London SW19 3BP ,United Kingdom`;
    const numb4 = "+44 2045 864 390";
    const mail4 = "london@altdigital.tech";
    return (
        <div>
            <Header />
            <ConatctUsBanner />
            <ContactUs />
            <OurOffice />
            <AddressCard heading1="NOIDA,UP" heading2="SIRSI,KA" address1={add1} phonenumber1={numb1} email={mail1} address2={add2} phonenumber2={numb2} email2={mail2}/>
            <AddressCard heading1="BENGALURU,KA" heading2="LONDON,UK" address1={add3} phonenumber1={numb3} email={mail3} address2={add4} phonenumber2={numb4} email2={mail4}/>
            <ContactUsMap />
            <Footer />
        </div>
    );
};

export default Contact;