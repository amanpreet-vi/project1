import React from "react";

import Landing from "../view/landing";
import NavBar from "../view/navBar";
import CardController from "./cardController";
import AccessPage from "./entery";

function LandingPage(params) {
  return (
    <div>
      <NavBar />
      <Landing />
      <AccessPage />
      <CardController />
    </div>
  );
}

export default LandingPage;
