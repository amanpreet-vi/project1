/** @format */

import React from "react";
import "../resource/stylesheet/sign.css";

export default function SignUpView({ handleChange, onSubmit }) {
  return (
    <>
      <div className="signContainer">
        <form>
          <input
            type="text"
            placeholder="Full Name"
            onChange={handleChange("name")}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange("email")}
          />
          <input
            type="text"
            placeholder="Pan Number"
            onChange={handleChange("pancard")}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange("password")}
          />
          <div className="signRow">
            <button type="submit" onClick={onSubmit}>
              Submit
            </button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}
