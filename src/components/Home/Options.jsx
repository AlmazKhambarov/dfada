import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteFile } from "../redux/extraReducer";
import { useDispatch, useSelector } from "react-redux";

const Options = (props) => {
  const { deleteFiles } = useSelector((state) => state.files);
  const { files } = props;
  const dispatch = useDispatch();
  console.log(files);
  if(deleteFiles==false){
    // window.location.reload();
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-between">
          <Button className="btn btn-warning">
            <a href={files.url}>Download</a>
          </Button>
          <Button>Update</Button>
          <Button>Copy Link</Button>
          <Button
            className="btn btn-danger"
            onClick={(e) => dispatch(deleteFile({id:files.id, name:files.name}))}
          >
            Delete
          </Button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Options;
