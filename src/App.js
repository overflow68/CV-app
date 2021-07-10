import React from "react";
import Header from "./components/header";
import File from "./components/file";
import FileInput from "./components/fileInput";
import "./styles/style.css";
import git from "./images/git.png";

function App() {
  return (
    <div className="App">
    <Header/>
    <div id="main"><div id ="flexContainer"><FileInput/><File/></div></div>
    <footer>Copyright © 2021 overflow68<a href ="https://github.com/overflow68"><img alt ="myGit" src = {git}></img></a></footer>
    </div>
  );
}

export default App;
