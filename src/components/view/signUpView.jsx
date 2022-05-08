import React from "react";
import "../resource/stylesheet/sign.css";

export default function SignUpView() {
  return (
    <div className="signContainer">
      <form target="#">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Pan Number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm" />
        <div class="signRow">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}
