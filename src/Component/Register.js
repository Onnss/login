import React from "react";
import Input from "./input";

function Register(props) {
    return ( 
<div>
    <div className="d-flex pt-1 mt-2">
      <Input
          className="w-50"
          type="text"
          placeholder="First Name"
      />
      <Input
          className="w-50"
          type="text"
          placeholder="Last Name"
      />
    </div>
    <Input
        type="email"
        className="mt-2"
        placeholder="Email adress"
      />
      <Input
        className="mt-2"
        type="tel"
        placeholder="Phone number"
      />
      <div>{props.children}</div>
      <Input
        type="password"
        className="mt-2"
        placeholder="Confirm password"
      />
      <label for="Birth" className=" mt-2">
        Date of Birth :
      </label>
      <input
        type="date"
        id="Birth"
        className="mt-2"
        value="2021-01-01"
        min="1930-01-01"
        max="2020-12-31"
        required
      />

      <div>
        <label for="" className=" mt-2">
          Gender :
        </label>
        <div className="d-flex justify-content-evenly">
          <div>
            <input type="radio" id="Male" name="gender"  />
            <label for="Male">Male</label>
          </div>
          <div>
            <input type="radio" id="Female" name="gender" />
            <label for="Female">Female</label>
          </div>
          <div>
            <input type="radio" id="Custom" name="gender" />
            <label for="Custom">Custom</label>
          </div>
        </div>
      </div>

      <div className="my-3">
        <input type="checkbox" id="terms" required />
        <span> </span>
        <label for="terms" className="text-secondary ">
        I agree to <u>Terms and Conditions</u>
        </label>
      </div>
      <a href='./' className="text-center mt-1">
        Already have an account ?
      </a>
</div>
     );
}

export default Register;