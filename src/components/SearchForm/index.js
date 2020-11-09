import React from "react";
// import ReactDOM from "react-dom";
import "./SearchName.css";

// import employees from "../../employees.json";

const SearchName = (props) => {
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
          onChange={this}
        />
      </div>
    </div>
  );
};

export default SearchName;
