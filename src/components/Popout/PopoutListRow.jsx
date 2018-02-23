import React, { Component } from "react";

class PopoutListRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editmode: false
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({ editMode: this.state.editMode ? false : true });
  }

  render() {
    return (
      <li className={this.state.editMode ? "s-cover edit" : "s-cover"}>
        <button className="s-edit" onClick={e => this.toggleEdit()}>
          <span className="icon edit" >
            <i className="la la-edit" />
          </span>
          <span className="icon cancel">
            <i className="la la-times" />
          </span>
        </button>
        {this.props.children}
      </li>
    )
  }
}

export default PopoutListRow;