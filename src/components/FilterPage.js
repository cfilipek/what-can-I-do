import React, { Component } from 'react';
import MultiSelect from './MultiSelect';
import Select from './Select';
import {connect} from 'react-redux';

class FilterPage extends Component {
  render () {
    return (
      <div>
        <div className="container">
          <div className="header-titles">
            <h1>The world is going to shit.</h1>
            <h1>What I can do.</h1>
          </div>
          <Select/>
         { this.props.activeInterest ?
          (<MultiSelect/>): (null)}
        </div>
        {/* <div className="black-corner"></div> */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    activeInterest: state.activeInterest
  };
}


export default connect(mapStateToProps, null)(FilterPage);
