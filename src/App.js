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
    experience:[{id:uniqid(),position:"1",company:"",city:"",from:"",to:""},{id:uniqid(),position:"2",company:"",city:"",from:"",to:""},{id:uniqid(),position:"3",company:"",city:"",from:"",to:""},{id:uniqid(),position:"4",company:"",city:"",from:"",to:""},{id:uniqid(),position:"5",company:"",city:"",from:"",to:""},{id:uniqid(),position:"6",company:"",city:"",from:"",to:""},{id:uniqid(),position:"7",company:"",city:"",from:"",to:""},],
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
  
  };

  const handleRemoveItem = (e) => {
    let copy =cvObject;
    let index;
    copy.experience.map(exp =>{
      let i = copy.experience.indexOf(exp);
      if(exp.id == e.target.dataset.id){index = i} ;
    })
     copy.experience.splice(index,1);
console.log(copy.experience)
    setState(prevState => {
      return {...prevState,experience: copy.experience }
  });

    
    
}

  const editExp = (e) =>{
    setState(prevState => {
      return {...prevState,experience: prevState.experience.map(obj => (obj.id === e.target.dataset.id ? Object.assign(obj, { [e.target.dataset.field]: e.target.value }) : obj))}
  });
 console.log(cvObject.experience)
  }
  
  return (
    <div id="App">
    <Header/>
    <div id="main"><div id ="flexContainer"><FileInput function3 ={handleRemoveItem} function2={handleChange} detail ={cvObject} function1 = {newExp} function ={editExp}/><File detail = {cvObject}/></div></div>
    <footer>Copyright © 2021 overflow68<a href ="https://github.com/overflow68"><img alt ="myGit" src = {git}></img></a></footer>
    </div>
  );
}

export default App;
