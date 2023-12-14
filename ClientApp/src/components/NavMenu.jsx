import React from 'react';
import LinkButton from './linkButton';
import Logo from "../img/logo.png";

const NavMenu = (props) => {
  return <header>
    <a href="/"><img src={Logo} alt="ICareAboutClimate" /></a>
    <LinkButton className="left" linkTo="/" buttonNumber={0} value='The Project'></LinkButton>
    {/* <LinkButton className="right" linkTo="/climate-resources" buttonNumber={0} value='Climate Resources'></LinkButton> */}
    <LinkButton className="left" linkTo="/contribute" buttonNumber={0} value='Contribute'></LinkButton>
  </header>
}

export default NavMenu;
