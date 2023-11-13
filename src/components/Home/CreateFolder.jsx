import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { newFolder } from "../redux/extraReducer";
const CreateFolder = (props) => {
  const [folderName, setFolderName] = useState("")
  var dispatch = useDispatch();
  let userId = JSON.parse(localStorage.getItem("userLocal"))
 const createFolder = () =>{
  dispatch(newFolder({name:folderName, userId:userId.uid, folderId:props?.folderId}))
  props.onHide()
 }
 console.log(props)
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
        <input type="text" className="form-control" onChange={(e)=>setFolderName(e.target.value)}/>
        <button onClick={createFolder } className="btn btn-primary" >
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
