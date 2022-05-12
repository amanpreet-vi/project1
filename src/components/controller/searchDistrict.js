/** @format */

// import React from 'react';
import { API } from "../../backend";

export default function searchDistrict(district) {
  return fetch(`${API}/up/district/${district}`, { method: "GET" })
    .then((res) => {
      console.log("in");
      return res.json();
    })
    .catch(console.log);
}
