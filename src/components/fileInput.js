import React from "react";
import { PersonalInfo } from "./fileComponents/forms";
import { Experience } from "./fileComponents/forms";
const FileInput = (props) =>{
return(
    <div id ="fileInput"> 
    
    <div className = "label">Personal details</div>
    <PersonalInfo function ={props.function2}/>
    
    <div className = "label">Experience</div>
    <div>{props.detail.experience.map((exp) => {
        return <Experience function1= {props.function} id ={exp.id}/>;
      })}</div>
    <button onClick={props.function1} className = "button5">New</button>
    
    </div>
)
}

export default FileInput;
