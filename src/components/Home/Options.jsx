/** @format */

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteFile } from "../redux/extraReducer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import moment from "moment";

const Options = (props) => {
  const { deleteFiles } = useSelector((state) => state.files);
  const { files } = props;
  const dispatch = useDispatch();
  console.log(files);
  if (deleteFiles == false) {
    // window.location.reload();
  }
  console.log(files);
  const handleClickConfirm = (id, name) => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            dispatch(deleteFile({ id: files?.id, name: files?.name }));
          },
        },
        {
          label: "No",
          // onClick: () =>
        },
      ],
    });
  };
  const handleDe = () => {
    dispatch(deleteFile({ id: files?.id, name: files?.name }));
  };
  const [copy, setCopy] = useState(false);
  const copyText = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopy(true);
      alert("Succsesfuly copiyed");
    } catch (err) {
      console.error("Failed to copy link: ", err);
      setCopy(false);
    }
  };

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Created at:
          {moment(files?.CreatedDate?.toDate()).format("L,LT")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex justify-content-between'>
          <Button className='btn btn-warning'>
            <a href={files.url}>Download</a>
          </Button>
          <Button>Update</Button>
          <Button onClick={()=>copyText(files?.url)}>Copy Link</Button>
          <Button
            onClick={handleDe}
            className='btn btn-danger'

            // onClick={(e) => }
          >
            {/* <FontAwesomeIcon icon={faTrash} onClick={()=>handleClickConfirm()}/> */}
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
