import React, { Component } from "react";
import PropTypes from 'prop-types';
import { TableActionButton } from "Button";

class TableRowView extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(data) { alert(JSON.stringify(data)) }

  handleDelete(data) { alert(JSON.stringify(data)) }

  render() {
    return (
      <tr>
        <td>
          <div className="checkBox row-selector">
            <input className="check-input" type="checkbox" name="item" />
            <span className="check-square">
              <span className="icon check-tick">
                <i className="la la-check"></i>
              </span>
            </span>
          </div>
        </td>
        {this.props.children}
        <td>
          <TableActionButton
            {...this.props}            
            onEdit={this.props.onEdit}
            onDelete={this.handleDelete} />
        </td>
      </tr>
    );
  }
}

class TableRowEdit extends Component {
  render() {
    if (this.props.hasOwnProperty('form')) {
      let Form = this.props.form
      return (
        <tr className="edit-mode editor">
          <td colSpan="6" className="">
            <Form {...this.props} onEditClose={e => this.props.onEditClose()} />
          </td>
        </tr>
      );
    }
    return null;
  }
}

class PopoutTableRow extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      editMode: false
    } 
  }

  render() {
    const editMode = this.state.editMode;
    return editMode
      ? <TableRowEdit {...this.props} onEditClose={() => this.setState({ editMode: false })} />
      : <TableRowView {...this.props} onEdit={() => this.setState({ editMode: true })} />
  }
}

PopoutTableRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default PopoutTableRow;