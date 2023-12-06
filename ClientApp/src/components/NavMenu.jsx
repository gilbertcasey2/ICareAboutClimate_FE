import React from 'react';
import LinkButton from './linkButton';
import Logo from "../img/logo.png";

const NavMenu = (props) => {
  return <header>
    <img src={Logo} alt="ICareAboutClimate" /> 
    <LinkButton linkTo="/" buttonNumber={0} value='The Project'></LinkButton>
    <LinkButton linkTo="/contribute" buttonNumber={0} value='Contribute'></LinkButton>
    <LinkButton linkTo="/climate-resources" buttonNumber={0} value='Climate Resources'></LinkButton>
  </header>
}

export default NavMenu;
