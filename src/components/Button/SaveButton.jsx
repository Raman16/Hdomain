import React, { Component } from "react";
import PropTypes from 'prop-types';

class SaveButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, onClick } = this.props;
    return (
      <button
        className="btn btn-success"
        onClick={e => onClick()}
      >
        {label}
      </button>
    )
  }
}

SaveButton.propTypes = {
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SaveButton;