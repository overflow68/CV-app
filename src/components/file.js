import React from "react";
import FileHeader from "./fileComponents/fileHeader";
import {FileInfo} from "./fileComponents/fileBody";
import {FileBody} from "./fileComponents/fileBody";
import profile from '../images/profile.jpeg';

const File = (props) =>{
return(
    <div id ="file" className = "sticky">
        <FileHeader details ={props.detail} />
        <div id ="body">
            <FileBody object ={props.detail}/>
            <FileInfo address = {props.detail.address}
                      number = {props.detail.number}
                      email = {props.detail.email}
                      picture = {profile}/>
            </div>
            </div>
)
}

export default File;

