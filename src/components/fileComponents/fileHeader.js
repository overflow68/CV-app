import React from "react";

const FileHeader = (props) =>{
return(
    <div id ="fileHeader"><div id="fileHeadInfo"><p id="name">{props.details.firstName} {props.details.lastName}</p><p id="positionh">{props.details.jobPosition}</p></div></div>
)
}

export default FileHeader;

