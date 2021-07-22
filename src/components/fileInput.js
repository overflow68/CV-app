import React from "react";
import { PersonalInfo } from "./fileComponents/forms";
import { Experience } from "./fileComponents/forms";
import { Education } from "./fileComponents/forms";
const FileInput = (props) =>{
return(
    <div id ="fileInput"> 
    
    <div className = "label">Personal details</div>
    <PersonalInfo function1 = {props.function8} function ={props.function2}/>
    
    <div className = "label">Experience</div>
    <div>{props.detail.experience.map((exp) => {
        return <Experience function2 ={props.function3} function1= {props.function} obj ={exp}/>;
      })}</div>
    <button onClick={props.function1} className = "button5">New</button>
    <div className = "label">Education</div>
    <div>{props.detail.education.map((edu) => {
        return <Education function2 ={props.function6} function1= {props.function5} obj ={edu}/>;
      })}</div>
      <button onClick={props.function4} className = "button5">New</button>
    </div>
)
}

export default FileInput;
