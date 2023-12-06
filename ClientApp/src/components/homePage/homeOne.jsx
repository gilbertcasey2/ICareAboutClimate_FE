import React from 'react';
import Button from '../subComponents/button';
import LeftMountain from "../../img/leftMountains.png";
import Water from "../../img/water.png";

const HomeOne = (props) => {

  return <section className="homeOne">
    <h2>I care about</h2>
    <h1>Climate Change.</h1>
    <h4>A research project to understand how different communities across Portland, Maine feel about and engage with climate change.</h4>
    <Button isMain={true} buttonText="Make Your Voice Heard"></Button>
    <Button isMain={false} buttonText="Join The Fight"></Button>
    <img src={LeftMountain} alt="Mountains" /> 
    <img src={Water} alt="Melting Water" /> 

  </section>
}

export default HomeOne;