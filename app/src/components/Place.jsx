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
    <div className="place">
      <div className="place_retour">
        <div className="place_arrow">
          <Link to="/places">
            <span>&#8249;</span>
            <p>
              {' '}
              Places <span> &#8226; </span> Airbnb
            </p>
          </Link>
        </div>
        <div className="place_heart">
          {' '}
          <span>&#9829;</span>
        </div>
      </div>
      <img className="place_illustration" src={place.photos} alt="Une photo de mon appartement" />
      <div className="container">
        <div className="container_name-location">
          <h2>{place.name}</h2>
          <Link to="#">
            <h3>{place.city}</h3>
          </Link>
        </div>
        <div className="main-container">
          <div className="main-container_description">
            <p> {place.description}</p>
            <p>
              {place.maxGuests} max guest <span> &#8226; </span>
              {place.rooms} room <span> &#8226; </span>
              {place.bathrooms} bathroom
            </p>
          </div>
          <div className="main-container_priceByNight">
            <p>
              <span>{place.priceByNight}$</span>/ night
            </p>
            <button>réserver</button>
          </div>
        </div>
      </div>
    </div>
  );
}
