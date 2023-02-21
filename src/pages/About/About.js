import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  AboutusBanner,
  VissionMission,
  YearsofExperience,
  Header,
  AboutusClientsCarousel,

} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./About.scss";

const About = () => {
  return (
    <div>
      <Header />
      <AboutusBanner />
      <YearsofExperience />
      <VissionMission />
      <AboutusClientsCarousel />
      <Footer />
    </div>
  );
};

export default About;
