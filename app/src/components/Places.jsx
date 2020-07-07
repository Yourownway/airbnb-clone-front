/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Places() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/places');
      setPlaces(result.data);
    };
    fetchData();
  }, []);

  console.log('Console.log de places : ', places);

  return (
    <div>
      {places.map((place) => (
        <>
          <h2>{place.name}</h2>
          <h3> Location :{place['City.name']}</h3>
          <p> Description :{place.description} </p>
          <p> Rooms :{place.rooms}</p>
          <p> Bathrooms :{place.bathrooms}</p>
          <p> Max guests :{place.maxGuests}</p>
          <p> Price by night :{place.priceByNight} $</p>
          <Link to={`/places/${place.id}`}>En savoir +</Link>
        </>
      ))}
    </div>
  );
}