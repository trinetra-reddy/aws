import React,{useState} from "react";
import "./ExpertiseCard.scss";
import ExpertiseCard from "./ExpertiseCard";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const ExpertiseWrapper = () => {
  const count1 =  <CountUp start={0} end={300} duration={2} delay={0.5} />
  const description1 = "MANY YEARS OF EXPERIENCE IN DCX";
  const count2 = <CountUp start={0} end={50} duration={2} delay={0.5} />;
  const description2 = "NO OF EMPLOYEES";
  const count3 = <CountUp start={0} end={50} duration={2} delay={0.5} />;
  const description3 = "PROJECTS DONE";
  const count4 = <CountUp start={0} end={10} duration={2} delay={0.5} />;
  const description4 = "COUNTRIES SERVED";
  const [counterOn,setCounterOn] = useState(false);
  return (
    <>
      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div className="ExpertiseWrapper-section">
        <div className="ExpertiseWrapper-main">
          {counterOn && <ExpertiseCard count={count1} description={description1} />}
          {counterOn && <ExpertiseCard count={count2} description={description2} />}
          {counterOn && <ExpertiseCard count={count3} description={description3} />}
          {counterOn && <ExpertiseCard count={count4} description={description4} />}
        </div>
      </div>
      </ScrollTrigger>
    </>
  );
};
export default ExpertiseWrapper;
