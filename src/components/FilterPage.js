import React, { Component } from 'react';
import MultiSelect from './MultiSelect';
import Select from './Select';
import {connect} from 'react-redux';


class FilterPage extends Component {

  state = {
    title: [],
    information : [],
    count: 0
  }

  countUp = () => {
    this.setState({count: 1})
  }

  resetInfo = () => {
    if (this.state.information.length > 0)
    {(this.setState({information:[]}))}
  }


  renderInfo() {

    return( this.props.activeCategories.length > 0 ?
      (<div className="information-container">
        {this.props.activeCategories.map(category => (
          this.props.interestsProps.map((interest) => {
            if(interest.title === this.props.activeInterest.title){
              interest.categories.map(i => {
                if(i.title === category){
                  this.state.information.push(i);
                  return null
                }
                return (null);
              })
          }
          return (null);
          })
        ))}
        {Array.from(this.state.information.reduce((a, o) => a.set(o.title, o), new Map()).values()).map(info => (
          <div className="information-grid">
            <i className={`${info.icon} icon`}></i>
            <div className="span">
              <h3 className="information-title">{info.title}</h3>
              <h4 className="information-text">{info.information}</h4>
            </div>
          </div>
        ))}

    </div>): (null))
  }

  render () {
    console.log(this.props.activeInterest, 'categories?')
    console.log(this.props.activeCategories, 'array?')
    return (
      <div>
        <div className="container">
          <div className="header-titles">
            <h1>The world is going to shit.</h1>
            <h1>What I can do.</h1>
          </div>
          <Select countUp = {this.countUp}/>
         { this.props.activeInterest ?
          (<div>
            <MultiSelect countUp = {this.countUp}/>
            {this.state.count > 0 && this.props.activeInterest !== null ? (this.resetInfo(), this.renderInfo()): (this.renderInfo())}
        </div>): (null)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    activeInterest: state.activeInterest,
    activeCategories: state.activeCategories,
    interestsProps: state.interests
  };
}


export default connect(mapStateToProps, null)(FilterPage);
