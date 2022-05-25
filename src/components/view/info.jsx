import React from "react";
import "../resource/stylesheet/info.css";

export default function Info({ candidate }) {
  return (
    <>
      <div className="infoContainer">
        <h2>Candidate Information</h2>
        <div className="pic"></div>
        <div>Name : {candidate.name}</div>
        <div>Constituency : {candidate.Constituency}</div>
        <div>Assets : {candidate.total_assets}</div>
        <div>Party : {candidate.party}</div>
        <div>Criminal Case : {candidate.criminalCases}</div>
        <div>Education : {candidate.education}</div>
      </div>
    </>
  );
}
