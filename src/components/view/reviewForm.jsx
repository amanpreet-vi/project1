/** @format */
import "../resource/stylesheet/reviewForm.css";
import React from "react";

export default function ReviewForm({ handlechange, onSubmit, errorMessage }) {
  return (
    <>
      <div className="reviewForm">
        <form target="#">
          <div>
            <select name="rating" onChange={handlechange("rating")} id="rating">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <textarea
              name="comment"
              onChange={handlechange("comment")}
            ></textarea>
          </div>
          <div>
            <button onClick={onSubmit} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
