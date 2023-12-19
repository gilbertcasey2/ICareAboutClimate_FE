import React from 'react';
import Button from '../subComponents/button';
import LeftMountain from "../../img/leftMountains.png";
import Water from "../../img/water.png";

const HomeOne = (props) => {

  return <section className="homeOne">
    <h3>Your thoughts on</h3>
    <h1>climate change.</h1>
    <h4>A research project to understand how different communities across Portland, Maine feel about and engage with climate change.</h4>
    <Button isMain={true} isLink={true} linkPath="/contribute" buttonText="Make Your Voice Heard"></Button>
    {/* <Button isMain={false} isLink={true} linkPath="/climate-resources" buttonText="Join The Fight"></Button> */}
    <img src={LeftMountain} className="mountains" alt="Mountains" /> 
    <img src={Water} className="water" alt="Melting Water" /> 

  </section>
}

export default HomeOne;