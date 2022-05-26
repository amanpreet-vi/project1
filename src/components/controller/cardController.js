/** @format */

import React from "react";
import Cards from "../view/card";

export default function CardController({ districts }) {
  return (
    <div className="card-list">
      {districts.map((d, i) => (
        <Cards district={d} key={i} />
      ))}
      {<Cards />}
    </div>
  );
}
