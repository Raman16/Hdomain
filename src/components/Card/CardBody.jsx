import React, { Component } from "react";

class CardBody extends Component {
  render() {
    return (<div>{this.props.children}</div>)
  }
}

export default CardBody;