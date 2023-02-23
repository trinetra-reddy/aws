import React from 'react';
import {Header,HomeBanner,ExpertiseWrapper,Whywedo,Services1,Footer, Casestudies} from "../../components";
import './Awshome.scss';
const Awshome = () => {
    return(
        <>
           <Header />
           <HomeBanner />
           <Whywedo />
           <Services1 />
           <Casestudies />
           <ExpertiseWrapper />
           <Footer />
          
        </>
    )
}
export default Awshome;