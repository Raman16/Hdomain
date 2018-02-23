import React, { Component } from "react";

class Card extends Component {
  render() {
    return (<div className="content-box">{this.props.children}</div>)
  }
}

export default Card;