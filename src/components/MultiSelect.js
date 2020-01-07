import React, { Component } from 'react';
import {connect} from 'react-redux';

class Multiselect extends Component {
  constructor(  ) {
		super(  );

		this.state = {
			selectedItems: [],
			expanded: true,
		};

		this.handleChange = this.handleChange.bind( this );
		this.handleClick = this.handleClick.bind( this );
		this.renderDropdown = this.renderDropdown.bind( this );
		this.hydrateInput = this.hydrateInput.bind( this );
		this.checkStatus = this.checkStatus.bind( this );
	}

	handleChange = ( event ) => {
		const selectedItems = this.state.selectedItems;
		const value = event.target.value;

		if ( selectedItems.length === 0 ) {
			selectedItems.push( value );
			this.setState( {
				selectedItems: selectedItems,
			} );
		} else {
			for ( let i = 0; i < selectedItems.length; i++ ) {
				if ( value === selectedItems[ i ] ) {
					selectedItems.splice( i, 1 );
					this.setState( {
						selectedItems: selectedItems,
					} );
					return;
				}
			}
			selectedItems.push( value );
			this.setState( {
				selectedItems: selectedItems,
			} );
		}
	}

	handleClick = ( event ) => {
		const selectedItems = this.state.selectedItems;
		const value = event.target.innerText;

		if ( selectedItems.length === 0 ) {
			selectedItems.push( value );
			this.setState( {
				selectedItems: selectedItems,
			} );
		} else {
			for ( let i = 0; i < selectedItems.length; i++ ) {
				if ( value === selectedItems[ i ] ) {
					selectedItems.splice( i, 1 );
					this.setState( {
						selectedItems: selectedItems,
					} );
					return;
				}
			}
			selectedItems.push( value );
			this.setState( {
				selectedItems: selectedItems,
			} );
		}
	}

	checkStatus = ( item ) => {
		const status = this.state.selectedItems.some( element => {
			return element === item;
		} );

		return status;
	}

	renderDropdown = () => {

		return (
			this.props.activeInterest.categories? (this.props.activeInterest.categories.map( ( item, index ) => (
				<React.Fragment key={index}>
					<input id={ item.title } type="checkbox" value={ item.title } onChange={ this.handleChange } ref={ input => this[ `checkbox${ item.title }` ] = input } checked={ this.checkStatus( item.title ) } />
					<label htmlFor={ item.title }>{ item.title }</label>
				</React.Fragment>
			) )
		): (null))
	}

	hydrateInput() {
		const items = this.state.selectedItems;
		return (
			items.length > 0 ?
				items.map( ( item, index ) => (
					<span key={ `${ item }-${ index } ` } className="item-pill" onClick={ this.handleClick }>
						{ item }
					</span>
				) ) :
				'Select applicable categories...'
		);
	}

	render() {
		return (
			this.props.activeInterest.categories?
			(<form>
				<div className="multiselect-wrapper">
					<div className={ 'select-input' }>
						{ this.hydrateInput() }
					</div>
					<div className="select-dropdown shown">
						{ this.renderDropdown() }
					</div>

				</div>
			</form>) : (null)
		);
	}
}


const mapStateToProps = (state) => {
  return{
    activeInterest: state.activeInterest
  };
}


export default connect(mapStateToProps, null)(Multiselect);
