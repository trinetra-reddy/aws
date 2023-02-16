import React from "react";
import "./AboutusClients.scss";
const AboutusClients = (props) => {
  return (
    <>
      <div className="Client-main">
        <img className="clients-logo" src={props.image} autoPlay controls></img>
      </div>
    </>
  );
};
export default AboutusClients;
