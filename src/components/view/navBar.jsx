import React from "react";
import "../resource/stylesheet/navbar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="navContainer">
        <a className="title" href="/">
          <div>
            Vote<span>chain</span>
          </div>
        </a>
        <div className="hamBurger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="links">
          <div>about</div>
          <div>contact us</div>
          <a href="signin">
            <div>sign in</div>
          </a>
          <a href="signup">
            <div>sign up</div>
          </a>
        </div>
      </div>
    </div>
  );
}
