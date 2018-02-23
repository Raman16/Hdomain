import React, { Component } from "react";
import Animate from "Animate";

class NotFoundPage extends Component {
  render() {
    return <div>The requested page not found</div>;
  }
}

export default Animate(NotFoundPage);
