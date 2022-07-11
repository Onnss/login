import React from "react";
import Input from "./input";
function Login() {
    return ( <div>
    <Input
        className="mt-2"
        type="text"
        placeholder="User name"
    />
    
    <Input
        type="password"
        className="mt-2"
        placeholder="Password"
    />
    </div> );
}

export default Login;