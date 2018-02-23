import React, { Component } from "react";
import PropTypes from 'prop-types';
//import _ from "lodash";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);    
    this.state = { text: '' };
    //@TODO: implement debuncing
  }

  handleChange(e) {
    let value = e.target.value.trim();
    this.setState({ text: value });
    if (value.length > 1) {
      //_.debounce(()=>this.props.onSearch(this.state.text), 1);
      this.props.onSearch(this.state.text);
    }
  }

  render() {
    return (
      <div className="input-box search">
        <input
          type="text"
          className="input-text-box"
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button className="clear-btn">
          <span className="icon"><i className="la la-times-circle"></i></span>
        </button>
      </div>
    )
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  onClear: PropTypes.func,
  onSearch: PropTypes.func.isRequired
};

export default Search;