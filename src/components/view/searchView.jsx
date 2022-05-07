import React from "react";
import "../resource/search.css";
import arrowSearch from "../resource/search.png";

export default function SearchView() {
  return (
    <div>
      <form action="#" className="searchContainer">
        <input
          className="search"
          type="text"
          name="searchedContent"
          placeholder="Enter name of Candidate"
        />
        <button type="submit">
          <img src={arrowSearch} alt="search" />
        </button>
      </form>
    </div>
  );
}
