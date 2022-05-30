/** @format */

import React, { useState } from "react";
import { isAuthenticated } from "../controller/authentication";
import CreateReviewForm from "../controller/createReviewForm";

import "../resource/stylesheet/candidate.css";
import Info from "./info";
import News from "./news";
import Rating from "./rating";
import Review from "./review";

export default function Candidate({ candidate }) {
  return (
    <>
      <div className="candidateContainer">
        <div className="top">
          <Info candidate={candidate} />
          <News newsArticles={candidate.newsArticles} />
        </div>
        <div className="bottom">
          <Rating stars={candidate.ratings} />
          {isAuthenticated() ? (
            <CreateReviewForm
              candidateID={candidate._id}
              userID={isAuthenticated().user._id}
              token={isAuthenticated().token}
            />
          ) : (
            <></>
          )}

          <Review reviews={candidate.reviews} candidateID={candidate._id} />
        </div>
      </div>
    </>
  );
}
