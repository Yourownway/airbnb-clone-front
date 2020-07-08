/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Place() {
  const [place, setPlace] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/places/${id}`);
      setPlace(result.data);
    };

    fetchData();
  }, [id]);

  console.log('console log de place :', place);

  return (
    <div>
      <img src={place.photos} alt="Une photo de mon appartement" />
      <h2>{place.name}</h2>
      <h3> Location : {place.city}</h3>
      <p> Description : {place.description}</p>
      <p> Rooms : {place.rooms}</p>
      <p> Bathrooms : {place.bathrooms}</p>
      <p> Max guests : {place.maxGuests}</p>
      <p> Price by night : {place.priceByNight} $</p>
      <Link to="/places">Retour</Link>
    </div>
  );
}
