import React, { Component } from 'react';
import MultiSelect from './MultiSelect';

class FilterPage extends Component {
  render () {
    return (
      <MultiSelect value={ [ 'apples', 'oranges', 'peach', 'pears', 'plums' ] } />
    )
  }
}

export default FilterPage;