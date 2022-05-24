/** @format */

import React from "react";
import CardView from "../view/card";

export default function CardController({ districts }) {
  return (
    <div className="card-list">
      {districts.map((d, i) => (
        <CardView district={d} key={i} />
      ))}
    </div>
  );
}
