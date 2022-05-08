import React from "react";
import "../resource/stylesheet/sign.css";

export default function SignUpView() {
  return (
    <div className="signContainer">
      <form target="#">
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="reEntered" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
