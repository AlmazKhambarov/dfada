/** @format */

import React, { useState } from "react";
import "./Header.scss";
import file from "../../assets/images/file_icon.png";
import folder from "../../assets/images/folder_icon.png";
import setting from "../../assets/images/setting_icon.png";
import download from "../../assets/images/download_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFolder, faUpload } from "@fortawesome/free-solid-svg-icons";
import Uploader from "../Uploader/Uploader";

const Header = ({ folderId }) => {
  const [uploadModal, setUploadModal] = useState(false);

  return (
    <div>
      <main>
        <header>
          <h1>Dropbox</h1>
          <nav>
            <div className="links">
              <a href='/home'>Files</a>
              <div className='image_con'>
                <FontAwesomeIcon icon={faFile} style={{ fontSize: "35px" }} />
              </div>
            </div>
            <div className="links">
              <a href='/home'>Folders</a>
              <div className='image_con'>
                {/* <img src={folder} alt="" /> */}
                <FontAwesomeIcon icon={faFolder} style={{ fontSize: "35px" }} />
              </div>
            </div>
            <div className="links" style={{cursor:"pointer"}} >
             <span  onClick={()=>setUploadModal(!uploadModal)}>Upload</span>
              <div className='image_con'>
                {/* <img src={} alt="" /> */}
                <FontAwesomeIcon icon={faUpload} style={{ fontSize: "35px" }} />
              </div>

              {uploadModal ? <Uploader setUploadModal={setUploadModal} folderId={folderId}/> : null}
            </div>
            <div className="links">
              <a href='/home/user'>User</a>
              <div className='image_con'>
                <img src={setting} alt='' />
              </div>
            </div>
          </nav>
        </header>
      </main>
    </div>
  );
};

export default Header;
