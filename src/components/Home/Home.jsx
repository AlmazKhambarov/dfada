import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.scss";
import file_image from "../../assets/images/file_image.png";
import Options from "./Options";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFile } from "../redux/extraReducer";
import CreateFolder from "./CreateFolder";

const Home = ({ user }) => {
  const { filesData, deleteFiles } = useSelector((state) => state.files);
  const [modalShow, setModalShow] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const files = [{ name: "almaz" }];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserFile(user?.uid));
  }, []);
  console.log(filesData);
  return (
    <>
      <Header />
      {deleteFiles ? (
        <span>Loading...</span>
      ) : (
        <div className="home_container">
          <div className="files_container">
            <button
              className="btn btn-primary"
              onClick={() => setShowCreate(!showCreate)}
            >
              Create Folder
            </button>
            {showCreate == true ? (
              <CreateFolder
                show={showCreate}
                onHide={() => setShowCreate(false)}
              />
            ) : (
              ""
            )}
            <h2 className="files__title">Files</h2>
            <div className="files">
              {filesData.map((el) => (
                <div className="files__card">
                  <div className="files_image">
                    <img src={file_image} alt="" />
                  </div>
                  <span>{el.filename}</span>
                  <div className="options">
                    <span onClick={() => setModalShow(el.id)}>more</span>
                    {modalShow == el.id ? (
                      <Options
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        files={el}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
