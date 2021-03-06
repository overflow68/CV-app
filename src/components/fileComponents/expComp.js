import React from "react";
const ExpDisplay = (props) =>{
return(
    <div className = "exp">
    <div className="data expfield">{props.exp.from}-{props.exp.to}</div>
    <div className="occupation expfield"><div className= "label3">{props.exp.position}</div> <div>{props.exp.company}, {props.exp.city}</div></div>
    
    </div>
)
}

const EduDisplay = (props) =>{
    return(
        <div className = "exp">
        <div className="data expfield">{props.edu.from}-{props.edu.to}</div>
        <div className="occupation expfield"><div className= "label3">{props.edu.university}, {props.edu.city}</div> <div>Degree: {props.edu.degree}</div><div>Subject: {props.edu.subject}</div></div>
        
        </div>
    )
    }

    export {ExpDisplay, EduDisplay};