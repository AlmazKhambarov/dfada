import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const CreateFolder = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" className="form-control" />
        <button onClick={props.onHide} className="btn btn-primary">
          Create
        </button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateFolder;
