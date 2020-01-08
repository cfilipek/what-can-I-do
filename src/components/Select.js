import React, { Component } from 'react';
import {connect} from 'react-redux';
import { selectInterest, selectCategories, deselectCategories } from '../actions/index';
import {bindActionCreators} from 'redux';

const searchIcon = (
  <svg className="search-icon" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
    />
  </svg>
);

const timesIcon = (
  <svg viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z"
    />
  </svg>
);

const checkMark = (
  <svg className="checkMark-icon" viewBox="0 0 448 512">
    <path
      fill="currentColor"
      d="M413.505 91.951L133.49 371.966l-98.995-98.995c-4.686-4.686-12.284-4.686-16.971 0L6.211 284.284c-4.686 4.686-4.686 12.284 0 16.971l118.794 118.794c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-11.314-11.314c-4.686-4.686-12.284-4.686-16.97 0z"
    />
  </svg>
);

class Select extends Component {
  constructor() {
    super();
    this.state = {
      option: {},
      currentText: "",
      isFocused: false,
      focusedIndex: 0
    };

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onChange = this.onChange.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
    this.onClickOption = this.onClickOption.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClear = this.onClear.bind(this);
    this.sortOptions = this.sortOptions.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const option = this.state.option;
    const placeholder = option.title ? option.title : "Choose an interest:";
    return (
      <div ref={this.setWrapperRef} className="wrapper">
        {searchIcon}
        <input
          placeholder={placeholder}
          onChange={this.onChange}
          value={this.state.currentText}
          onFocus={this.onFocus}
        />
        <span className="clear-button" onClick={this.onClear}>
          {timesIcon}
        </span>
        {this.renderOptions()}
      </div>
    );
  }

  renderOptions() {
    if (!this.state.isFocused) {
      return null;
    }

    const options = this.sortOptions();
    console.log(options, 'options');
    console.log(this.state.option);
    const matchingOptions = options.map((option, index) => {
      const label = option.title;
      const isSelected = this.state.option.title === option.title;
      const className = `dropdown-options ${
        {focused: index === this.state.focusedIndex}} ${{selected: isSelected}}`;
      return (
        <li
          className={className}
          onClick={this.onClickOption.bind(this, option)}
          key={index}
          data-id={index}
        >
          {label}
          {isSelected && checkMark}
        </li>
      );
    });

    return (
      <ul className="dropdown">
        {matchingOptions.length > 0 ? (
          matchingOptions
        ) : (
          <li className="dropdown-options no-results">No Results</li>
        )}
      </ul>
    );
  }

  sortOptions() {
    let sortedOptions = [];
    this.props.interests.forEach(interest => {
      const isSelectedItem = this.state.option.value === interest.title;
      isSelectedItem
        ? sortedOptions.unshift(interest)
        : sortedOptions.push(interest);
    });

    sortedOptions = sortedOptions.filter(option => this.state.currentText === "" ||
        option.title.toLowerCase().includes(this.state.currentText.toLowerCase()))



    return sortedOptions;
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ isFocused: false, focusedIndex: 0 });
    }
  }

  onClickOption(option) {
    this.setState({
      option,
      currentText: "",
      isFocused: false,
      focusedIndex: 0
    });
    this.props.deselectCategories();
    this.props.selectInterest(option);
  }

  onChange(ev) {
    ev.preventDefault();
    this.setState({ currentText: ev.target.value });
  }

  onFocus() {
    this.setState({ isFocused: true });
  }

  onClear() {
    this.setState({ currentText: "", option: {}, focusedIndex: 0 });
    this.props.selectInterest(null);
    this.props.deselectCategories();
  }

}


const mapStateToProps = (state) => {
    return{
      interests: state.interests
    };
  }



  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({selectInterest: selectInterest, selectCategories: selectCategories, deselectCategories: deselectCategories}, dispatch)
  }



export default connect(mapStateToProps, mapDispatchToProps)(Select);
