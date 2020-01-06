import React from 'react';
import Arrow from '../assets/arrow.png';
import { Link } from "react-router-dom";

const ArrowSpin = () => {
  return(
  <div className="container">
    <div className="header-titles">
      <h1>The world is going to shit.</h1>
      <h1>What can I do?</h1>
    </div>
    <div className="subtitle">
      <h4>Let’s figure it out. Together.</h4>
      <Link to="/to-help"><img className="arrow" src={Arrow} alt="arrow logo"/></Link>
    </div>

  </div>)
}

export default ArrowSpin;
