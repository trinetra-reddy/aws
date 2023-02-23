import React from "react";
import "./ExpertiseCard.scss";
import ExpertiseCard from "./ExpertiseCard";
const ExpertiseWrapper = () => {
  const count1 = "300";
  const description1 = "MAN YEARS OF EXPERIENCE IN DCX";
  const count2 = "50";
  const description2 = "NO OF EMPLOYEES";
  const count3 = "50";
  const description3 = "PROJECTS DONE";
  const count4 = "10";
  const description4 = "COUNTRIES SERVED";
  return (
    <>
      <div className="ExpertiseWrapper-section">
        <div className="ExpertiseWrapper-main">
          <ExpertiseCard count={count1} description={description1} />
          <ExpertiseCard count={count2} description={description2} />
          <ExpertiseCard count={count3} description={description3} />
          <ExpertiseCard count={count4} description={description4} />
        </div>
      </div>
    </>
  );
};
export default ExpertiseWrapper;
