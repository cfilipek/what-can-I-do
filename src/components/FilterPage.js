import React, { Component } from 'react';
import MultiSelect from './MultiSelect';
import Select from './Select';
import {connect} from 'react-redux';

class FilterPage extends Component {

  state = {
    information : [],
    count: 0
  }

  countUp = () => {
    this.setState({count: 1})
  }

  resetInfo = () => {
    if (this.state.information.length > 1)
    {(this.setState({information:[]}))}
  }

  renderInfo() {

    return( this.props.activeCategories.length > 0 ?
      (<div className="information-container">
        {this.props.activeCategories[0].map(category => (
          this.props.interestsProps.map((interest) => {
            if(interest.title === this.props.activeInterest.title){
              interest.categories.map(i => {
                if(i.title === category){
                  this.state.information.push(i.information);
                  return null
                }
                return (null);
              })
          }
          return (null);
          })
        ))}

    {Array.from(new Set(this.state.information)).map(info => (<h4>{info}</h4>))}

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
          <Select/>
         { this.props.activeInterest ?
          (<div>
            <MultiSelect countUp = {this.countUp}/>
            {this.state.count > 0 ? (this.resetInfo(), this.renderInfo()): (this.renderInfo())}
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
