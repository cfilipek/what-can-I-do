import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectCategories, deselectCategories, filterCategory } from '../actions/index';
import {bindActionCreators} from 'redux';

class Multiselect extends Component {
  constructor( props ) {
		super( props );

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
			this.props.selectCategories(value);
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
			this.props.selectCategories(value);
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
			console.log(selectedItems, '?')
			for ( let i = 0; i < selectedItems.length; i++ ) {
				if ( value === selectedItems[ i ] ) {
					this.props.filterCategory(value)
					this.props.countUp();
					selectedItems.splice( i, 1 );
					console.log(selectedItems, '??')

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
		console.log('here')
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
		// const items = this.state.selectedItems;
		const items = this.props.activeCategories;
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
		activeInterest: state.activeInterest,
		activeCategories: state.activeCategories
  };
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({selectCategories: selectCategories, deselectCategories: deselectCategories, filterCategory: filterCategory}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Multiselect);
