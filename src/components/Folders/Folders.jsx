/** @format */

import React, { useEffect, useState } from "react";
import "./Folders.scss";
import closeIcon from "../../assets/images/360_F_530932571_oVMX77OagcravakFNRUIlO5Z5bMZ17ty.jpg";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFolder, fetchFileById, fetchUserFile, getUserFolder } from "../redux/extraReducer";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import file_image from "../../assets/images/file_image.png";
import folder_image from "../../assets/images/folder_image.png";
import CreateFolder from "../Home/CreateFolder";
import Options from "../Home/Options";
import '../Home/Home.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
const Folders = ({ user}) => {
  const {file, foldersData, filesData}  = useSelector(state=>state.files)
  console.log(file);
  const [showCreate, setShowCreate] = useState(false);

  const dispatch = useDispatch();
let userUid = JSON.parse(localStorage.getItem("userLocal"))
  const folderId = useParams();
  const [modalShow, setModalShow] = useState(false);

  console.log(filesData)
  useEffect(()=>{
    dispatch(fetchUserFile(userUid?.uid));
    dispatch(getUserFolder(userUid?.uid));
  },[folderId])
 
  
  const filtredFiles = filesData?.filter((x) => x.folderId == folderId?.id);
  const filterFolders = foldersData?.filter((x)=> x.folderId == folderId?.id)
    const navigate = useNavigate()


    
   
  return (
    <div className='folders__main'>
        <Header/>
        <div className='home_container'>

        <div className='files_container'>
            <button
              className='btn btn-primary'
              onClick={() => setShowCreate(!showCreate)}>
              Create Folder
            </button>
            {showCreate == true ? (
              <CreateFolder
                show={showCreate}
                userId={user?.uid}
                folderId={folderId?.id}
                onHide={() => setShowCreate(false)}
              />
            ) : (
              ""
            )}
            <div className="icons__navigation">
              <FontAwesomeIcon icon={faLeftLong} onClick={()=>navigate(-1)}/>
              <FontAwesomeIcon icon={faRightLong} onClick={()=>navigate(+1)}/>

            </div>
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
    </div>
  );
};

export default Folders;
