/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../controller/authentication";
import "../resource/stylesheet/info.css";

export default function Info({ candidate }) {
  const { user } = isAuthenticated();
  console.log("in info");
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
        {user.role === 1 ? (
          <>
            <Link
              to={{
                pathname: "/admin/dashboard/candidate/update",
                state: candidate,
              }}
            >
              <button>Update</button>
            </Link>
            <button>Delete</button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
