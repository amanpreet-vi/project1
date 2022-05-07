import React from "react";

import { Route, Router } from "react-router-dom";

import Landing from "../view/landing";
//import NavBar from "../view/navBar";

function LandingPage(params) {
  return (
    <Router>
      <Route path="/" element={Landing} />
    </Router>
  );
}

export default LandingPage;
