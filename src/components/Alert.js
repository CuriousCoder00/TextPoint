import React from "react";

function Alert(props) {
    const capitilize = (word) => {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && 
    <div className={`alert alert-${props.alert.type} fade show`} role="alert">
      <strong>{capitilize(props.alert.type)}</strong>: {props.alert.message}
    </div>
  );
}

export default Alert;
