import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card, CardHeader, CardBody } from "Card";
import { SaveButton } from "Button";

class DrugAddForm extends Component {
  constructor(props) {
    super(props);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    alert('Add clicked');
  }

  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>
          Add New Drug
        </CardHeader>
        <CardBody>
          <div className="row">
            <div className="col-xs-12 col-sm-5">
              <div className="input-box">
                <label className="input-label">Procedure Name</label>
                <input className="input-text-box" type="text" />
                <span className="input-status">No caps in user name</span>
              </div>
            </div>
            <div className="col-xs-12 col-md-1">
            </div>
            <div className="col-xs-4 col-sm-2">
              <div className="input-box">
                <label className="input-label">Cost</label>
                <input className="input-text-box" type="text" />
                <span className="input-status">No caps in user name</span>
              </div>
            </div>
            <div className="col-xs-4 col-sm-2">
              <div className="input-box">
                <label className="input-label">Tax</label>
                <input className="input-text-box" type="text" />
                <span className="input-status">No caps in user name</span>
              </div>
            </div>
            <div className="col-xs-4 col-sm-2">
              <div className="input-box">
                <label className="input-label">Total Cost</label>
                <input className="input-text-box" type="text" />
                <span className="input-status">No caps in user name</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 text-right">
              <SaveButton
                loading="false"
                label="Add Drug"
                onClick={e => this.handleAdd()}
              />
              <button className="btn btn-danger" onClick={e => this.handleCancel()}>Cancel</button>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}

DrugAddForm.propTypes = {
  onCancel: PropTypes.func
};


export default DrugAddForm;