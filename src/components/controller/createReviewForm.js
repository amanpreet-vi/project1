/** @format */

import { useState } from "react";
import { Redirect } from "react-router-dom";
import ReviewForm from "../view/reviewForm";
import { createReview } from "./reviewApiCall";
import { searchCandidateByConstituency } from "./searchCandidate";

const CreateReviewForm = ({ candidateID, userID, token }) => {
  const [values, setValues] = useState({
    rating: 0,
    comment: "",
    error: "",
  });

  const [didRedirect, setDidRedirect] = useState(false);

  const { rating, comment } = values;

  const redirectTo = () => {
    if (didRedirect) {
      return (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      );
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "" });
    createReview(rating, comment, token, candidateID, userID).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          rating: 0,
          comment: "",
        });
      }
      setDidRedirect(true);
    });
  };
  return (
    <>
      <ReviewForm handlechange={handleChange} onSubmit={onSubmit} />
      {redirectTo()}
    </>
  );
};

export default CreateReviewForm;
