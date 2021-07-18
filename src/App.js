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
  
  };
  const newEdu = (e) => {
    setState(prevState => {
      return {...prevState,  education:[...prevState.education,{id:uniqid(),university:"",city:"",degree:"",subject:"",from:"",to:""}] }
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
const handleRemoveItem1 = (e) => {
  let copy =cvObject;
  let index;
  copy.education.map(edu =>{
    let i = copy.education.indexOf(edu);
    if(edu.id == e.target.dataset.id){index = i} ;
  })
   copy.education.splice(index,1);

  setState(prevState => {
    return {...prevState,education: copy.education }
});

  
  
}

  const editExp = (e) =>{
    setState(prevState => {
      return {...prevState,experience: prevState.experience.map(obj => (obj.id === e.target.dataset.id ? Object.assign(obj, { [e.target.dataset.field]: e.target.value }) : obj))}
  });
 
  }
  const editEdu = (e) =>{
    setState(prevState => {
      return {...prevState,education: prevState.education.map(obj => (obj.id === e.target.dataset.id ? Object.assign(obj, { [e.target.dataset.field]: e.target.value }) : obj))}
  });

  }
  
  return (
    <div id="App">
    <Header/>
    <div id="main"><div id ="flexContainer"><FileInput function3 ={handleRemoveItem} function2={handleChange} detail ={cvObject} function1 = {newExp} function ={editExp} function4 = {newEdu} function5={editEdu} function6= {handleRemoveItem1}/><File detail = {cvObject}/></div></div>
    <footer>Copyright © 2021 overflow68<a href ="https://github.com/overflow68"><img alt ="myGit" src = {git}></img></a></footer>
    </div>
  );
}

export default App;
