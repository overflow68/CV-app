import React, {useState} from "react";
import Header from "./components/header";
import File from "./components/file";
import FileInput from "./components/fileInput";
import "./styles/style.css";
import git from "./images/git.png";


var uniqid = require('uniqid');

function App() {
let [cvObject,setState] = useState(
  {
    firstName: "",
    lastName: "",
    jobPosition: "",
    address : "",
    number: "",
    email:"",
    description:"",
    experience:[],
    education:[]
  });
  
 
 
 const handleChange = (e) => {
    setState(prevState => {
      return {...prevState, [e.target.id]: e.target.value }
      
  })
  };

  const newExp = (e) => {
    setState(prevState => {
      return {...prevState,  experience:[...prevState.experience,{id:uniqid(),position:"",company:"",city:"",from:"",to:""}] }
  })
  console.log(cvObject.experience)
  };


  const editExp = (e) =>{
    setState(prevState => {
      return {...prevState,experience: prevState.experience.map(obj => (obj.id == e.target.dataset.id ? Object.assign(obj, { [e.target.dataset.field]: e.target.value }) : obj))}
  });
 console.log(cvObject.experience)
  }
  
  return (
    <div id="App">
    <Header/>
    <div id="main"><div id ="flexContainer"><FileInput function2={handleChange} detail ={cvObject} function1 = {newExp} function ={editExp}/><File detail = {cvObject}/></div></div>
    <footer>Copyright © 2021 overflow68<a href ="https://github.com/overflow68"><img alt ="myGit" src = {git}></img></a></footer>
    </div>
  );
}

export default App;
