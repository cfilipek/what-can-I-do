import React, { Component } from 'react';
import MultiSelect from './MultiSelect';
import Select from './Select';

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
          <MultiSelect value={ [ 'apples', 'oranges', 'peach', 'pears', 'plums' ] } />
        </div>
        {/* <div className="black-corner"></div> */}
      </div>
    )
  }
}

export default FilterPage;
