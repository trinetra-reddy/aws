import React from "react";
import { Link } from "react-router-dom";
import { Footer,Banner,Carousel,ExpertsService,Casestudies, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner /> 
            <Carousel />
            <ExpertsService />
            <Casestudies />
            <Footer />
        </div>
    );
};

export default Home;