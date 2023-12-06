import React from 'react';
import LinkButton from './linkButton';
import Logo from "../img/logo.png";

const NavMenu = (props) => {
  return <header>
    <img src={Logo} alt="ICareAboutClimate" /> 
    <LinkButton className="left" linkTo="/" buttonNumber={0} value='The Project'></LinkButton>
    <LinkButton className="right" linkTo="/contribute" buttonNumber={0} value='Contribute'></LinkButton>
    <LinkButton className="right" linkTo="/climate-resources" buttonNumber={0} value='Climate Resources'></LinkButton>
  </header>
}

export default NavMenu;
