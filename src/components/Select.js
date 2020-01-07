import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectInterest } from '../actions/index';
import {bindActionCreators} from 'redux';



class Select extends Component {

  onChange = (ev) => {
    ev.preventDefault();
    this.props.selectInterest(ev);
  }

  render() {
    return (

        <div>{this.renderList()}</div>

    );
  }

  renderList(){

		return this.props.interests.map((interest) => {
			return(
				<li
					key={interest.title}
					onClick={() => this.props.selectInterest(interest)}
					className="list-group-item">
					{interest.title}
				</li>
			);
		});
	}

}

const mapStateToProps = (state) => {
    return{
      interests: state.interests
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectInterest: selectInterest}, dispatch)
  }



export default connect(mapStateToProps, mapDispatchToProps)(Select);
