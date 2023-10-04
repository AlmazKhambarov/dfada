/** @format */

import React, { useEffect } from "react";
import "./Folders.scss";
import closeIcon from "../../assets/images/360_F_530932571_oVMX77OagcravakFNRUIlO5Z5bMZ17ty.jpg";
import { useDispatch, useSelector } from "react-redux";
import { DeleteFolder, fetchFileById, getUserFolder } from "../redux/extraReducer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Folders = ({ user}) => {
  const {file, foldersData}  = useSelector(state=>state.files)
  console.log(file);
  const dispatch = useDispatch();
let userUid = JSON.parse(localStorage.getItem("userLocal"))
  const folderId = useParams();
  console.log(foldersData)
  useEffect(()=>{
    dispatch(getUserFolder(userUid?.uid));
  },[folderId])
   
    var data = foldersData?.filter((el)=>el.id === folderId?.id);
console.log(data)
   
  return (
    <div className='folders__main'>
    <Link style={{color:"blue"}} to={"/home"}>Back</Link>
  {data?.map((el)=>(
    <div className="folder__c">
      <span>{el.name}</span>
    </div>
  ))}
    </div>
  );
};

export default Folders;
