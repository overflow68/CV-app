import React from "react";
import {ExpDisplay} from "./expComp";
import {EduDisplay} from "./expComp";
const FileInfo = (props) =>{
return(
    <div id="personalInfo">

        <img  src = {props.photo} alt ="" id = "photo"></img>

        <div className = "label2"> Personal details</div>

        <div id ="contacts">

        <div className = "label1">Address</div>
        <div className = "address info">{props.address}</div>
        <div className = "label1">Phone Number</div>
        <div className = "phonenumber info">{props.number}</div>
        <div className = "label1">E-mail</div>
        <div className = "email info">{props.email}</div>

        </div>
        

    </div>
)
}

const FileBody = (props) =>{
    return(
        <div id="skills">
            <div className = "label">Description</div>
            <div className = "info">{props.object.description}</div>
            <div className = "label">Experience</div>
            {props.object.experience.map((exp) => {
        return <ExpDisplay exp = {exp}/>;
      })}
            <div className = "label">Education</div>
            {props.object.education.map((edu) => {
        return <EduDisplay edu = {edu}/>;
      })}
            </div>

    )
    }






export {FileInfo,FileBody};
