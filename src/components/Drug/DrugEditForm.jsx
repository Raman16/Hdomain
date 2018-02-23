import React, { Component } from "react";
import PropTypes from 'prop-types';

class DrugEditForm extends Component {
  constructor(props){
    super(props);
    this.state = props.data
  }
  render() {
    //let drug = this.props.data;
    return (
      <div className="editor-box">
        <table className="table med-table content-middled">
          <tbody>
            <tr>
              <td>
                <div className="input-box">
                  <label className="input-label">Name</label>
                  <input className="input-text-box" type="text" />
                  <span className="input-status">No caps in user name</span>
                </div>
              </td>
              <td>
                <div className="input-box">
                  <label className="input-label">Type</label>
                  <input className="input-text-box" type="text" />
                  <span className="input-status">No caps in user name</span>
                </div>
              </td>
              <td>
                <div className="input-box">
                  <label className="input-label">Strength</label>
                  <input className="input-text-box" type="text" />
                  <span className="input-status">No caps in user name</span>
                </div>
              </td>
              <td>
                <div className="input-box">
                  <label className="input-label">Note</label>
                  <input className="input-text-box" type="text" />
                  <span className="input-status">No caps in user name</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="row">
          <div className="col-xs-12 text-right">
            <button className="btn btn-success">Add Procedure</button>
            <button className="btn btn-danger" onClick={e => this.props.onEditClose()}>Close</button>
          </div>
        </div>
      </div>
    )
  }
}

DrugEditForm.propTypes = {
  data: PropTypes.object.isRequired
};

export default DrugEditForm;