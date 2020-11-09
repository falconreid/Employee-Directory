import React from "react";
import "./SearchName.css";

function SearchName({ handleInputChange }) {
  return (
    <div className="searchbox">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="SearchForm">
            Search
          </span>
        </div>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="name"
          aria-label="Search"
          value={this}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
}

export default SearchName;
