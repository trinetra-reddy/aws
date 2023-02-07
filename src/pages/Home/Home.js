import React from "react";
import { Link } from "react-router-dom";
import { Footer,Banner,Carousel, Header } from "../../components";
import { CONSTANTS } from "../../utils/constants";
import './Home.scss';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner /> 
            <Carousel />
            <Footer />
        </div>
    );
};

export default Home;