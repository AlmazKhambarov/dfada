/** @format */

import React, { useEffect, useState } from "react";
import "./Uploader.scss";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../redux/extraReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
const Uploader = ({ user, setUploadModal, folderId}) => {
  const { loadingUpload } = useSelector((state) => state.files)
  const [selectedFile, setSelectedFile] = useState(null);
  const paramsId = useParams()
  let userUid = JSON.parse(localStorage.getItem("userLocal"));
  const [data, setData] = useState({
    file: "",
    userId: userUid?.uid,
    folderId:folderId? folderId : paramsId?.id
  });
  const handleChange = (choisede) => {
    setData((prev) => ({ ...prev, file: choisede.target.files[0] }));
    const file = choisede.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedFile(e.target.result);
    };

    reader.readAsDataURL(file);
  };
  const dispatch = useDispatch();
  const [inputChange, setInputChange] = useState(false);
  useEffect(() => {
    if (loadingUpload == false) {
      setInputChange(false);
    }
    if (selectedFile) {
      setInputChange(true);
    }
  }, [ selectedFile, selectedFile]);

  const handlePush = (e) => {
    e.preventDefault();
    dispatch(uploadFile(data));
  };
  console.log(data)
 console.log(folderId)
  return(
    <>
      {/* <Header /> */}
      {loadingUpload ? (
        <div class='loading'></div>
      ) : (
        <>
         <div className="uploader__modal">
          <div class='formbold-main-wrapper'>
            <div class='formbold-form-wrapper'>
              {!selectedFile ? (
                <form action='https://formbold.com/s/FORM_ID' method='POST'>
                  <div class='mb-6 pt-4'>
                  <span className="close"><FontAwesomeIcon icon={faClose} onClick={()=>setUploadModal(false)}/></span>
                    <label class='formbold-form-label formbold-form-label-2'>
                      Upload File
                    </label>

                    <div class='formbold-mb-5 formbold-file-input'>
                      <input
                        type='file'
                        name='file'
                        id='file'
                        onChange={handleChange}
                      />
                      <label for='file'>
                        <div>
                          <span class='formbold-drop-file'>
                            {" "}
                            Drop files here{" "}
                          </span>
                          <span class='formbold-or'> Or </span>
                          <span class='formbold-browse'> Browse </span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div>
                    <button class='formbold-btn w-full'>Send File</button>
                  </div>
                </form>
              ) : (
                <>
                  <span className="close"><FontAwesomeIcon icon={faClose} onClick={()=>setUploadModal(false)}/></span>
                  <div className='img__container'>
                    <img src={selectedFile ? selectedFile : null} alt='#' />
                  </div>
                  <div>
                    <button class='formbold-btn w-full' onClick={handlePush}>
                      Send File
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        </>
      )}
      <div className="w-screen"></div>
    </>
  );
};

export default Uploader;
