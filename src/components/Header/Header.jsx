import React from "react";
import "./Header.scss";
import file from "../../assets/images/file_icon.png";
import folder from "../../assets/images/folder_icon.png";
import setting from "../../assets/images/setting_icon.png";
import download from "../../assets/images/download_icon.svg";

const Header = () => {
  return (
    <div>
      <main>
        <header>
          <h1>Dropbox</h1>
          <nav>
            <div>
              <a href="/home">Files</a>
              <div className="image_con">
                <img src={file} alt="" />
              </div>
            </div>
            <div>
              <a href="/home">Folders</a>
              <div className="image_con">
                <img src={folder} alt="" />
              </div>
            </div>
            <div>
              <a href="/home/upload">Upload</a>
              <div className="image_con">
                <img src={download} alt="" />
              </div>
            </div>
            <div>
              <a href="/home/user">User</a>
              <div className="image_con">
                <img src={setting} alt="" />
              </div>
            </div>
          </nav>
        </header>
      </main>
    </div>
  );
};

export default Header;
