import React, { Component } from 'react';
import MultiSelect from './MultiSelect';

class FilterPage extends Component {
  render () {
    return (
      <div className="container">
        <MultiSelect value={ [ 'apples', 'oranges', 'peach', 'pears', 'plums' ] } />
      </div>
    )
  }
}

export default FilterPage;
