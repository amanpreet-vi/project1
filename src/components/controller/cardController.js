/** @format */

import React from "react";
import Cards from "../view/card";

export default function CardController() {
  return (
    <div className="card-list">
      {/* {districts.map((d, i) => (
        <Cards district={d} />
      ))} */}
      {/* <Cards /> */}
      <Cards
        district={{
          name: "KANPUR DEHAT",
          constituency: [
            "AKBARPUR-RANIYA",
            "BHOGNIPUR",
            "RASULABAD (SC)",
            "SIKANDRA",
          ],
        }}
      />
      <Cards
        district={{
          name: "KANPUR NAGAR",
          constituency: [
            "ARYA NAGAR",
            "BILHAUR (SC)",
            "BITHOOR",
            "GHATAMPUR (SC)",
            "GOVINDNAGAR",
            "KALYANPUR",
            "KANPUR CANTT.",
            "KIDWAI NAGAR",
            "MAHARAJPUR",
            "SISHAMAU",
          ],
        }}
      />
    </div>
  );
}
