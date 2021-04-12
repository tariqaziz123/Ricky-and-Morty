import React from "react";
import './LocationCard.css';

export default function LocationCard(props) {
  return (
    <div className="location">
      <h4>Location: {props.chars.name}  </h4>
      <h4>{props.chars.type}  </h4>
      {props.chars.results}
    </div>
  );
}