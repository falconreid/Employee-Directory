import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./SearchName.css";

import employees from "../../employees.json";

const SearchName = (props) => {
  // const [searchTerm, setSearchTerm] = props.useState("");
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // React.useEffect(() => {
  //   const results = employees.filter((employees) =>
  //     employee.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

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
          // value={searchTerm}
          // onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchName;
