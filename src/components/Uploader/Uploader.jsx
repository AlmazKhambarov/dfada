import React, { useEffect, useState } from "react";
import "./Uploader.scss";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { uploadFile } from "../redux/extraReducer";
const Uploader = ({ user }) => {
  const { loadingUpload } = useSelector((state) => state.files);
  const [data, setData] = useState({
    file: null,
    userUid: user,
  });
  const [file, setFile] = useState(null);
  const [selectedF, setSelectedF] = useState("");
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
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    if(loadingUpload == false){
      setInputChange(false);
      setSelectedFile(null);
    }
    if (selectedFile) {
      setInputChange(true);
    }
  }, [loadingUpload, selectedFile, selectedFile]);

  const handlePush = (e) => {
    e.preventDefault();
    dispatch(uploadFile(data));
  };
  console.log(loadingUpload);
  return (
    <>
      <Header />
      {loadingUpload ? (
        <span>Loading...</span>
      ) : (
        <div class="formbold-main-wrapper">
          <div class="formbold-form-wrapper">
            {!inputChange ? (
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-6 pt-4">
                  <label class="formbold-form-label formbold-form-label-2">
                    Upload File
                  </label>

                  <div class="formbold-mb-5 formbold-file-input">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleChange}
                    />
                    <label for="file">
                      <div>
                        <span class="formbold-drop-file">
                          {" "}
                          Drop files here{" "}
                        </span>
                        <span class="formbold-or"> Or </span>
                        <span class="formbold-browse"> Browse </span>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <button class="formbold-btn w-full">Send File</button>
                </div>
              </form>
            ) : (
              <>
                <div className="img__container">
                  <img src={selectedFile ? selectedFile : null} alt="#" />
                </div>
                <div>
                  <button class="formbold-btn w-full" onClick={handlePush}>
                    Send File
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Uploader;
