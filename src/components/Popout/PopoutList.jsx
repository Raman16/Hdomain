import React, { Component } from "react";

class PopoutList extends Component {
  render() {
    return (<ul className="sett-list">{this.props.children}</ul>)
  }
}

export default PopoutList;