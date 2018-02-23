import React, { Component } from "react";

class ModalHeader extends Component {
  render() {
    return (
      <div className="modal-header header-icon">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span className="icon" aria-hidden="true">
            <i className="fa fa-times-circle"></i>
          </span>
        </button>
        <h4 className="modal-title text-center" >
          <span className="icon head-icon">
            <i className={"la " + this.props.icon} aria-hidden="true"></i>
          </span>
          {this.props.title}
        </h4>
      </div>
    )
  }
}

export default ModalHeader;