import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;