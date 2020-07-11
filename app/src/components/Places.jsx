/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GoogleMap from './GoogleMap';

export default function PlacesMap() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/places');
      setPlaces(result.data);
    };
    fetchData();
  }, []);

  console.log('Console.log que je veux ! : ', places);

  return (
    <>
      <div className="container">
        {places.map((place) => (
          <>
            <div className="places">
              <Link className="places_link" to={`/places/${place.id}`}>
                <img
                  className="places_illustration"
                  src={place.photos}
                  alt="Une photo de mon appartement"
                />
                <div className="places_description">
                  <h2>
                    {place['City.name']} <span> &#8226; </span> {place.name}
                  </h2>
                  <p>
                    {place.maxGuests} voyageur <span> &#8226; </span>
                    {place.rooms} chambre <span> &#8226; </span>
                    {place.bathrooms} salle de bain
                  </p>
                  <p>
                    <b>{place.priceByNight} €</b> / nuit
                  </p>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
      <GoogleMap />
    </>
  );
}
