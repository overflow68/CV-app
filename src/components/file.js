import React from "react";
import FileHeader from "./fileComponents/fileHeader";
import {FileInfo} from "./fileComponents/fileBody";
import {FileBody} from "./fileComponents/fileBody";

const File = (props) =>{
return(
    <div id ="file" className = "sticky">
        <FileHeader details ={props.detail} />
        <div id ="body">
            <FileBody object ={props.detail}/>
            <FileInfo address = {props.detail.address}
                      number = {props.detail.number}
                      email = {props.detail.email}
                      photo = {props.detail.photo}/>
            </div>
            </div>
)
}

export default File;

