import React from "react";

import "../resource/stylesheet/candidate.css";
import Info from "./info";
import News from "./news";
import Rating from "./rating";
import Review from "./review";

export default function Candidate() {
  const data = {
    name: "Dr. G. S. Dharmesh",
    Constituency: "AGRA CANTT. (SC)",
    party: "BJP",
    criminalCases: 1,
    education: "Graduate Professional",
    total_assets: "RS 4,35,97,778.00",
  };

  return (
    <>
      <div className="candidateContainer">
        <div className="top">
          <Info candidate={data} />
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
