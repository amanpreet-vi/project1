import React from "react";
import "../resource/stylesheet/landing.css";
import SearchView from "./searchView";

function Landing() {
  return (
    <div className="landingContainer">
      <div>
        <SearchView />
      </div>
    </div>
  );
}

export default Landing;
