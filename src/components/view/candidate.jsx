import React from "react";

import "../resource/stylesheet/candidate.css";
import Info from "./info";
import News from "./news";
import Rating from "./rating";
import Review from "./review";

export default function Candidate() {
  return (
    <>
      <div className="candidateContainer">
        <div className="top">
          <Info />
          <News />
        </div>
        <div className="bottom">
          <Rating stars={3} />
          <Review />
        </div>
      </div>
    </>
  );
}
