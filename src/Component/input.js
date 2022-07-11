import React from "react";
function Input(props) {
    return ( 
        <input
          className="form-control mt-2"
          type={props.type}
          placeholder={props.placeholder}
          required
        />
     );
}

export default Input;