import React, { Component } from "react";
import PropTypes from 'prop-types';

class ContentToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isContentOpen: props.hasOwnProperty('isContentOpen') ? props.isContentOpen : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasOwnProperty('isContentOpen')) {
      this.setState({ isContentOpen: nextProps.isContentOpen })
    }
  }

  handleClick() {
    this.setState({ isContentOpen: this.state.isContentOpen ? false : true });
    this.props.onToggle(!this.state.isContentOpen);
  }

  render() {
    let { isContentOpen } = this.state;
    let { label } = this.props;
    return (
      <button className="btn " onClick={e => this.handleClick()}>
        <span className="icon">
          <i className={isContentOpen ? "la la-minus-circle" : "la la-plus-circle"}></i>
        </span>
        {isContentOpen ? "Cancel" : label}
      </button>
    )
  }
}

ContentToggleButton.propTypes = {
  onToggle: PropTypes.func.isRequired,
  isContentOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired
};

export default ContentToggleButton;