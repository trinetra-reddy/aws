import React from "react";
import { Link } from "react-router-dom";
import {
  Footer,
  AboutusBanner,
  VissionMission,
  YearsofExperience,
  Header,
} from "../../components";
import { CONSTANTS } from "../../utils/constants";
import "./About.scss";

const About = () => {
  return (
    <div>
      {/* <Header /> */}
      <AboutusBanner />
      <YearsofExperience />
      <VissionMission />
      {/* <Footer /> */}
    </div>
  );
};

export default About;
