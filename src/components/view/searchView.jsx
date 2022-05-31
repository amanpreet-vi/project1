/** @format */

import React, { useState } from "react";
import "../resource/stylesheet/search.css";
import arrowSearch from "../resource/images/search.png";
import searchDistrict from "../controller/searchDistrict";

import CardController from "../controller/cardController";

export default function SearchView() {
  const [search, setSearch] = useState("");
  const [districts, setDistricts] = useState([]);
  const [error, setError] = useState(false);
  const [bottom, setBottome] = useState(0);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleOnsubmit = (e) => {
    e.preventDefault();
    setBottome(1);
    searchDistrict(search)
      .then((data) => {
        if (data.length === 0) setError(true);
        else {
          setError(false);
          setDistricts([...data]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="searchContainer">
        <form action="#">
          <input
            className="search"
            type="text"
            name="searchedContent"
            onChange={handleChange}
            placeholder="Enter name of District"
          />
          <button type="submit" onClick={handleOnsubmit}>
            <img src={arrowSearch} alt="search" />
          </button>
        </form>
      </div>
      {bottom === 0 ? (
        <div className="bottom"></div>
      ) : (
        <div className="resultContainer">
          {error ? (
            <p>Enter Valid District name</p>
          ) : (
            <CardController districts={districts} />
          )}
        </div>
      )}
    </>
  );
}
