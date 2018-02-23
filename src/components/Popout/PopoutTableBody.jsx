import React, { Component } from "react";

class PopoutTableBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.children}
      </tbody>
    )
  }
}

export default PopoutTableBody;