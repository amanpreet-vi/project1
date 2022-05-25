/** @format */

import React from "react";
// import CardController from "../controller/cardController";

import "../resource/stylesheet/landing.css";
import SearchView from "./searchView";

function Landing() {
  return (
    <>
      <div className="landingContainer">
        <SearchView />
      </div>
    </>
  );
}

export default Landing;
