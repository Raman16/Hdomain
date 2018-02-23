import React, { Component } from "react";
import PropTypes from 'prop-types';

class TableActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteButtonPressed: false
    }
  }
  render() {
    return (
      <div onMouseLeave={e => this.setState({ deleteButtonPressed: false })}>
        <button className="t-edit">
          <span className="icon edit"><i className="la la-ellipsis-h"></i></span>
        </button>
        <ul className="t-option">
          <li>
            <button className="to-edit" 
              onClick={e => this.props.onEdit(this.props.data)}>
              <span className="icon edit">
                <i className="la la-edit"></i>
              </span>
              Edit
            </button>
          </li>
          <li className={this.state.deleteButtonPressed ? "confirm" : ""}>
            <button className="to-delete" 
              onClick={e => this.setState({ deleteButtonPressed: true })}>
              <span className="icon edit">
                <i className="la la-remove"></i>
              </span>
              Delete
            </button>
            <div className="confirmation">
              <button className="confirm-yes" 
                onClick={e => this.props.onDelete(this.props.data)}>
                <span className="icon edit"><i className="la la-check-circle"></i></span>
              </button>
              <button className="confirm-no" 
                onClick={e => this.setState({ deleteButtonPressed: false })}>
                <span className="icon edit"><i className="la la-times-circle"></i></span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

TableActionButton.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

export default TableActionButton;