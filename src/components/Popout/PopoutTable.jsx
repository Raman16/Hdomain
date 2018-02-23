import React, { Component } from "react";

class PopoutTable extends Component {
  render() {
    return (
      <table className="table med-table content-middled">
        {this.props.children}
      </table>
    )
  }
}

export default PopoutTable;