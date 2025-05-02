import React from "react";

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase(); // pura word lowercase kar diya
        return lower.charAt(0).toUpperCase() + lower.slice(1); // pehla letter uppercase + baaki
      };
      
  return (
    <div style={{height:'70px'}}>
      {props.alert &&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> :{props.alert.msg}
        
      </div>}
    </div>
  );
}
