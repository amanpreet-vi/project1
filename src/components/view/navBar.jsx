import React from "react";
import "../resource/stylesheet/navbar.css";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="navContainer">
        <div className="hamBurger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="links">
          <div>about</div>
          <div>contact us</div>
          <div>enter</div>
        </div>
      </div>
    </div>
  );
}
