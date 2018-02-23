import React, { Component } from "react";

class PopoutTableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="fix-50"></th>
          {this.props.children}
          <th className="fix-50"></th>
        </tr>
      </thead>
    )
  }
}

export default PopoutTableHead;