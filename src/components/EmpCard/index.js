import React from "react";
import "./style.css";

function EmpCard({ image, name, position, email }) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={name} src={process.env.PUBLIC_URL + image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {name}
          </li>
          <li>
            <strong>Position:</strong> {position}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmpCard;
