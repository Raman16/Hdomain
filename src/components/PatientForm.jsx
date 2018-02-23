/* global request */
import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Text, Textarea, Gender, DateOfBirth } from "FormElement"

const submit = ({name=''}) => {
  let errors = {
    name: "Name required"
  }
  throw new SubmissionError(errors)
};

class PatientForm extends Component {
  constructor(props) {
    super(props)
    //request.post('https://company1.medrixo.com/api/drug', {name: "prabhash", type: "GOOD"})
  }

  submit(values) {
    console.log(values);
    let errors = {
    name: "Name required"
  }
  throw new SubmissionError(errors)
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.submit)}>
        <div className="row">
          <div className="col-xs-12 col-sm-8">
            <div className="row">
              <div className="col-xs-12 col-md-2">
                <div className="pat-img">
                  <img className="avatar" src="images/user-img.jpg" alt="" />
                  <div className="img-change">
                    <ul className="change-options">
                      <li className="option"><a href="" onClick={e => e.preventDefault()}>Upload Photo</a></li>
                      <li className="option"><a href="" onClick={e => e.preventDefault()}>Take a Picture</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-10">
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <Field name="name" component={Text} label="Patient Name" />                    
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <Field name="patient_id" component={Text} label="Patient ID" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <Field name="gender" component={Gender} label="Gender" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <Field name="phone_primary" component={Text} label="Mobile" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-4">
                    <Field name="dob" component={DateOfBirth} label="DOB" onChange={() => console.log(this.props)} />
                  </div>
                  <div className="col-xs-12 col-md-2">
                    <Field name="age" component={Text} label="Age" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <Field name="email" component={Text} label="Email" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <Field name="blood_group" component={Text} label="Blood Group" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <Field name="aadhar" component={Text} label="Aadhar ID" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <Field name="address" component={Textarea} label="Address" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <Field name="city" component={Text} label="City" />
                    <Field name="pincode" component={Text} label="Pincode" />
                  </div>
                </div>
                <a href="" onClick={e => e.preventDefault()} className="detail-more"> <span className="icon"><i className="la la-plus"></i></span>Add More details</a>
                <div className="pat-detail-more">
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <Field name="occupation" component={Text} label="Occcupation" />
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <Field name="refered_by" component={Text} label="Refered By" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <Field name="phone_secondary" component={Text} label="Secondary Phone" />
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <Field name="landline" component={Text} label="Landline" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4">
            <div className="input-box">
              <label className="input-label">Groups</label>
              <textarea className="input-text-box" rows="3"></textarea>
              <span className="input-status">No caps in user name</span>
            </div>
            <div className="input-box">
              <label className="input-label">Medical History</label>
              <textarea className="input-text-box" rows="7"></textarea>
              <span className="input-status">No caps in user name</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <button type="button" className="btn btn-default btn-success-outline" data-dismiss="modal">Cancel</button>
          <button type="submit" className="btn btn-primary btn-success">Save Patient</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'patient'
})(PatientForm)