import React from 'react';

const Button = ({isMain, buttonText}) => {
  var classes = "button"
  {(isMain === true) ? classes = classes + " main" : classes = classes + " secondary"}
  return <button className={classes}>{buttonText}</button>
}

export default Button;