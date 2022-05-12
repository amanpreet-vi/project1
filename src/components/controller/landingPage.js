import React from "react";

import Landing from "../view/landing";
import NavBar from "../view/navBar";
import "../resource/stylesheet/landingPage.css";

function LandingPage(params) {
  return (
    <div>
      <div className="landingContainer">
        <NavBar />
        <Landing />
      </div>
    </div>
  );
}

export default LandingPage;
