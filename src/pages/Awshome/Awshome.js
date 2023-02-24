import React from 'react';
import {Header,HomeBanner,ExpertiseWrapper,Whywedo,Services1,Footer, Casestudies, ExpertService} from "../../components";
import './Awshome.scss';
import applicationdevimg from "../../images/application-development-image.webp";
import digitalcommerceimg from "../../images/digital-commerce-image.webp";
import customerexpimg from "../../images/customer-experience-image.webp";
import checkmark from "../../images/icon-checkmark-org.png";
const Awshome = (props) => {
    const aptext = "Gathering & analyzing requirements, designing prototypes, testing, seamless implementation, and integration is what we are proficient with. We have expertise and domain experience across key industry verticals including marketing, e-commerce, and quality assured practices across a variety of technology frameworks such as Oracle ATG Web Commerce, Adobe Experience Manager helps to support and extend the quality practices of end-customers.";
    const cusexptext ="User experience and digital customer experience are the crucial and foremost important part for any business because customers are the most precious assets of any business and their experience must be seamless for effective branding of any business";
    const dctext = "With higher than ever number of engagements of businesses online now whether new or existing-commerce has to be flexible and adaptable for recent market trends and frameworks.";
    return(
        <>
           <Header />
           <HomeBanner />
           <Whywedo />
           <Services1 name="Application Development" img={applicationdevimg} text={aptext} checkmark={checkmark} li1="Custom Application Development" li2="Low-code Application Development" li3="Database Application Development" li4="Rapid Application Development" li5="Mobile Application Development" li6="Enterprise Application Development"/>
           <Services1 name="Customer Experience" img={customerexpimg} text={cusexptext} checkmark={checkmark}li1="Customer service" li2="Drive customer loyality" li3="Retention and account management" li4="Technical support" li5="customer service"li6="Personalised at scale" imgPosition="right"/>
           <Services1 name="Digital Commerce" img={digitalcommerceimg} text={dctext} checkmark={checkmark} li1="Sales growth and channel effectiveness" li2="Orchestrate seamless cross-channel" li3="Omni-Channel Commerce Optimisation" li4="Omni-Channel Commerce Optimisation" li5="Direct Digital Commerce Enablement" li6="Optimise performance to maximise sales "/>
           <ExpertService />
           <ExpertiseWrapper />
           <Casestudies />
           <Footer />
          
        </>
    )
}
export default Awshome;