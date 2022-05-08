import React from "react";

import Landing from "../view/landing";
import NavBar from "../view/navBar";
import AccessPage from "./entery";

function LandingPage(params) {
  return (
    <div>
      <NavBar />
      <Landing />
      <AccessPage />
    </div>
  );
}

export default LandingPage;
