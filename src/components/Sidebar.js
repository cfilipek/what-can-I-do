import React, { Component } from 'react';
import World  from '../assets/world.png';
import About  from '../assets/question.png';

class Sidebar extends Component {

  render () {
    return (
      <div className="sidebar-container">
        <div className="logo">
          <img src={World} alt="world logo"/>
        </div>
        <div className="about-logo">
          <img src={About} alt="about logo"/>
        </div>
      </div>
    )
  }
}

export default Sidebar;
