import React, { Component } from "react";

class CardHeader extends Component {
  render() {
    return (<h3>{this.props.children}</h3>)
  }
}

export default CardHeader;