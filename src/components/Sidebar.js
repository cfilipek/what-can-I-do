import React, { Component, useRef } from 'react';
import World  from '../assets/world.png';
import About  from '../assets/white-question-02.png';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import {connect} from 'react-redux';
import { selectInterest } from '../actions/index';
import {bindActionCreators} from 'redux';


class Sidebar extends Component {

  constructor(props) {
		super(props);

		// set initial state
		this.state = {
			isModalOpen: false,
			isInnerModalOpen: false
		};

    // bind functions
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.openModal = this.openModal.bind(this);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClickOutside() {
      this.closeModal();
  }

  handleClick = e => {
    console.log(e.target)
    if (this.submitPopoverRef.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  };


	// close modal (set isModalOpen, true)
	closeModal() {
		this.setState({
			isModalOpen: false
		});
	}

	// open modal (set isModalOpen, false)
	openModal() {
		this.setState({
			isModalOpen: true
		});
  }

  render () {

    return (
      <div className="sidebar-container" ref={node => this.submitPopoverRef = node}>
        <div className="logo">
          <Link to="/"><img onClick={()=>(this.props.selectInterest(null))} src={World} alt="world logo"/></Link>
        </div>
        {this.state.isModalOpen?
        (null):
        (<div className="about-logo">
          <img src={About} alt="about logo" onClick={this.openModal}/>
        </div>)
        }
        <Modal
					isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
				>
					<div className="modal-text">
            <h5>About this project:</h5>
            <h6>Created with &hearts; by <a href="http://clairefilipek.com/" target="_blank" rel="noopener noreferrer">Claire Filipek</a>.</h6>
            <h6>Follow my journey as I commit to one positive action per month in 2020 at my <a href="https://medium.com/@iloveclair" target="_blank" rel="noopener noreferrer">blog</a>!</h6>
            <div className="modal-bottom">
              <div>Globe logo created by Jolan Soens for the Noun Project</div>
              <div>About icon created by Kidiladon for the Noun Project</div>
            </div>
          </div>
          <div className="center-button">
            <button
              className="modal-button"
              onClick={this.closeModal}
            >
              Close
            </button>
          </div>
				</Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({selectInterest: selectInterest}, dispatch)
}


export default connect(null, mapDispatchToProps)(Sidebar);
