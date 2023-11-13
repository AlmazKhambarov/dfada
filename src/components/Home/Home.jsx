/** @format */

import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Home.scss";
import file_image from "../../assets/images/file_image.png";
import folder_image from "../../assets/images/folder_image.png";
import Options from "./Options";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserFile, getUserFolder } from "../redux/extraReducer";
import CreateFolder from "./CreateFolder";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Folders from "../Folders/Folders";

const Home = ({ user }) => {
  const { filesData, deleteFiles, foldersData, createLoading, folderDeleted } =
    useSelector((state) => state.files);
  const [modalShow, setModalShow] = useState(false);

  const [showCreate, setShowCreate] = useState(false);
  const files = [{ name: "almaz" }];
  var path_name = useLocation();
  let userId = JSON.parse(localStorage.getItem("userLocal"));
  console.log(foldersData);
  const dispatch = useDispatch();
  var navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUserFile(userId.uid));
    dispatch(getUserFolder(userId.uid));
  }, [createLoading, deleteFiles]);

  const filtredFiles = filesData?.filter((x) => x.folderId == 1);
  const filterFolders = foldersData?.filter((x)=> x.folderId == 1)
  return (
    <>
      <Header folderId={1}/>
      {deleteFiles ? (
        <div class='loading'></div>
      ) : (
        <div className='home_container'>
          <div className='files_container'>
            <button
              className='btn btn-primary'
              onClick={() => setShowCreate(!showCreate)}>
              Create Folder
            </button>
            {showCreate == true ? (
              <CreateFolder
              folderId={1}
                show={showCreate}
                userId={user?.uid}
                onHide={() => setShowCreate(false)}
              />
            ) : (
              ""
            )}
            <h2 className='files__title'>Files</h2>
            <div>
              {filterFolders?.map((el) => (
                <Link to={`/home/${el.id}`}>
                  <div className='files__card'>
                    <div className='files_image'>
                      <img src={folder_image} alt='' />
                    </div>
                    <span>{el.name}</span>
                  </div>
                </Link>
              ))}
              <br />
              {/* <span style={{display:"block"}}></span> */}
          
              {" "}
            </div>
            <div>
                  {filtredFiles.map((el) => (
                <div className='files__card'>
                  <div className='files_image'>
                    <img src={file_image} alt='' />
                  </div>
                  <span>{el.filename}</span>
                  <div className='options'>
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
