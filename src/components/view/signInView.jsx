import React from "react";
import "../resource/stylesheet/sign.css";

export default function SignInView() {
  return (
    <div className="signContainer">
      <form target="#">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
