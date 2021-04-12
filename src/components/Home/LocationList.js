import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard'

export default function LocationList() {
  const [LocationList, GetLocationList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log('hello',response.data.results);
        GetLocationList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list" >
      <h2>Welcome to Rick n Morty Land</h2>
      {LocationList.map((chars, id) => {
        return <LocationCard key={id} chars={chars} />;
      })}
    </section>
  );
}