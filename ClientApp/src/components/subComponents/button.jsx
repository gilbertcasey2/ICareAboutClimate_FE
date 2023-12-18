import React from 'react';
import { Link } from "react-router-dom";

const Button = ({isMain, buttonText, isLink, linkPath}) => {
  var classes = "button"
  isMain === true ? (classes = classes + " main") : (classes = classes + " secondary");
  var element;

  if (isLink) {
    element = <Link className={classes} to={linkPath}>{buttonText}</Link>
  } else {
    element = <button className={classes}>{buttonText}</button>
  }
  
  return element;
}

export default Button;