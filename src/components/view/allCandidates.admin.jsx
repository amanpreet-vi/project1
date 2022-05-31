/** @format */

import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getallCandidate } from "../controller/admin";
import { isAuthenticated } from "../controller/authentication";
import { deleteReview } from "../controller/reviewApiCall";
import "../resource/stylesheet/allCandidate.css";
import Info from "./info";

import "../resource/stylesheet/review.css";

export default function AllCandidates() {
  const { user, token } = isAuthenticated();
  const [candidates, setCandidates] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(undefined);
  const [prev, setPrev] = useState(undefined);
  const [didRedirect, setDidRedirect] = useState(false);

  const preload = () => {
    getallCandidate(page, 10, token, user._id)
      .then((data) => {
        console.log(data);
        const { Candidates, next, prev } = data;
        setNext(next ? next.page : undefined);
        setPrev(prev ? prev.page : undefined);
        setCandidates([...Candidates]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function scroll() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    console.log("in use");
    preload();
  }, [page]);

  return (
    <>
      <div className="allCandidateContainer">
        <div className="upper"></div>
        <div>
          <div className="jumbotron">
            {candidates.map((candidate) => {
              return <Info candidate={candidate} />;
            })}
          </div>
          <div className="buttonContainer">
            {prev ? (
              <button
                onClick={() => {
                  setPage(prev);
                  scroll();
                }}
              >
                Prev
              </button>
            ) : (
              <></>
            )}
            {next ? (
              <button
                onClick={() => {
                  setPage(next);
                  scroll();
                }}
              >
                next
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
