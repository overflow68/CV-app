import React from "react";

const PersonalInfo = (props) =>{
return(
    <div className ="personalInfo input">
        <input  className = "field" id = "firstName" placeholder = "First name" onChange={props.function}></input>
        <input  className = "field" id = "lastName" placeholder = "Last name" onChange={props.function}></input>
        <input  className = "field" id = "jobPosition" placeholder = "Position" onChange={props.function}></input>
        <input  className = "field" id = "address" placeholder = "Address" onChange={props.function}></input>
        <input  className = "field" id = "number" placeholder = "Number" onChange={props.function}></input>
        <input  className = "field" id = "email" placeholder = "Email" onChange={props.function}></input>
        <textarea  className = "field" id = "description" placeholder = "Description" onChange={props.function}></textarea>
        



    </div>
)
}
const Experience = (props) =>{
    return(
        <div className ="personalInfo input">
        <input data-field ="position" data-id ={props.obj.id} className = "field"  placeholder = "Position" onChange={props.function1}value = {props.obj.position}></input>
        <input data-field ="company" data-id ={props.obj.id} className = "field"  placeholder = "Company" onChange={props.function1} value = {props.obj.company}></input>
        <input data-field ="city" data-id ={props.obj.id} className = "field"  placeholder = "City" onChange={props.function1} value = {props.obj.city}></input>
        <input data-field ="from" data-id ={props.obj.id} className = "field"  placeholder = "From" onChange={props.function1} value = {props.obj.from}></input>
        <input data-field ="to" data-id ={props.obj.id} className = "field"  placeholder = "To" onChange={props.function1} value = {props.obj.to}></input>
        <button className="button6" data-id ={props.obj.id} onClick={props.function2}>Delete</button>
        
    
    
        </div>
    )
    }






export {PersonalInfo, Experience};
