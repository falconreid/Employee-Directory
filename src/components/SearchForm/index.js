import React from "react";
import "./SearchName.css";
import employees from "../../employees.json";

function SearchName({ name }) {
  // render() {
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
          // value={this.state.search}
          // onChange={}
        />
      </div>
    </div>
  );
}

export default SearchName;
