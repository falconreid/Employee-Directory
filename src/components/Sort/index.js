import React from "react";
import "./style.css";

function Sort(props) {
  return (
    <div className="sort">
      <span>{props.children}</span>
    </div>
  );
}

export default Sort;
