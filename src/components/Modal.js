import React, { Component } from 'react';

class Modal extends Component {

	// constructor(props) {
  //   super(props);
  // }

	// render modal
	render(props) {
		return (
			<div className="modal-container"
				style={{
					display: this.props.isModalOpen ? "block" : "none"
				}}
			>
				<div onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div>{this.props.children}</div>
			</div>
		);
	}
}

export default Modal;



