import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody } from "Modal";
import PatientForm from "PatientForm"

class AddPatient extends Component {
  render() {
    return (
      <Modal id="addPatient">
        <ModalHeader
          title="Register New Patient"
          icon="la-user-plus" />
        <ModalBody>
          <PatientForm />
        </ModalBody>        
      </Modal>
    );
  }
}

export default AddPatient;
