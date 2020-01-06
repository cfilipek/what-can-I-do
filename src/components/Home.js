import React, { Component }  from 'react';
import Arrow from '../assets/arrow.png';
import { Link } from "react-router-dom";

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      animation: null
    }
  }

  rotate = () => {
      this.setState({
        animation: "animated bounceOutRight",
      })
    }

  handleOnClick = (e) => {
    e.preventDefault(); //prevent transition
    this.rotate();
    // and after timeout
    window.setTimeout(() => {
       this.props.history.push('/to-help')
       // history is available by design in this.props when using react-router
    }, 1000) // 3000 means 3 seconds
};

  render()
  {
    return(
    <div className="container">
      <div className="header-titles">
        <h1>The world is going to shit.</h1>
        <h1>What can I do?</h1>
      </div>
      <div className="subtitle">
        <h4>Let’s figure it out. Together.</h4>
        <div onClick={this.handleOnClick}>
          <img className={`arrow ${this.state.animation}`} src={Arrow} alt="arrow logo"/>
        </div>
      </div>

    </div>)}
}


export default Home;
