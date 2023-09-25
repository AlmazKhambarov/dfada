/** @format */

import React from "react";
import "./Folders.scss";
import closeIcon from "../../assets/images/360_F_530932571_oVMX77OagcravakFNRUIlO5Z5bMZ17ty.jpg";
import { useDispatch } from "react-redux";
import { DeleteFolder } from "../redux/extraReducer";
const Folders = ({ data, setShowFolderOption }) => {
  console.log(data);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(DeleteFolder(data.id));
  };
  return (
    <div className='folders__main'>
      <div className='folders__modal__content'>
        <div className='closeBtn'>
          <img
            src={closeIcon}
            alt=''
            onClick={() => setShowFolderOption(false)}
          />
          <button className='btn btn-danger' onClick={handleDelete}>
            DELETE this FOlder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Folders;
