import React from "react";
import './CharacterCard.css';

export default function CharacterCard(props) {
  return (
    <div className="character">
      <div className="card">
        <h1>Name:{props.chars.name}</h1>
        <img src={props.chars.image} alt="rick and morty" />
        <h1>{props.chars.gender}</h1>
        <h1>{props.chars.status}</h1>
      </div>  
      
    </div>
  );
}