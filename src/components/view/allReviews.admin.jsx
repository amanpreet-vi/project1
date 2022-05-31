/** @format */

import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { isAuthenticated } from "../controller/authentication";
import { deleteReview, getAllReviews } from "../controller/reviewApiCall";
import "../resource/stylesheet/allReview.css";

export default function AllReviews() {
  const { user, token } = isAuthenticated();
  const [didRedirect, setDidRedirect] = useState(false);

  const [reviews, setReviews] = useState([]);

  const redirectTo = () => {
    if (didRedirect) {
      return (
        <Redirect
          to={{
            pathname: "/admin/dashboard",
          }}
        />
      );
    }
  };

  const handleClick = (reviewID, candidateID) => (event) => {
    event.preventDefault();
    deleteReview(token, candidateID, reviewID, user._id).then(() => {
      setDidRedirect(true);
    });
  };

  useEffect(() => {
    getAllReviews(user._id, token)
      .then((data) => {
        setReviews(data);
      })
      .catch(console.log);
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <div className="allReviewContainer">
        {reviews.length === 0 ? (
          <div>No Review Yet</div>
        ) : (
          reviews.map((review, i) => {
            return (
              <div className="reviewBox" key={i}>
                <div>
                  <h1>{review.author.name}</h1>
                  <span>Rating: </span>
                  {review.rating}
                </div>
                <div>{review.comment}</div>
                {user._id === review.author || user.role === 1 ? (
                  <button
                    onClick={handleClick(review._id, review.candidate)}
                    type="submit"
                  >
                    Delete
                  </button>
                ) : (
                  <></>
                )}
              </div>
            );
          })
        )}
        {redirectTo()}
      </div>
    </div>
  );
}
