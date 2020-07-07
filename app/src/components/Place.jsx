import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function OnePlace() {
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
      <h2>{place.name}</h2>
      <h3> Location : {place.city}</h3>
      <p> Description : {place.description}</p>
      <p> Rooms : {place.rooms}</p>
      <p> Bathrooms :{place.bathrooms}</p>
      <p> Max guests :{place.maxGuests}</p>
      <p> Price by night :{place.priceByNight} $</p>
      <Link to={'/places'}>Retour</Link>
    </div>
  );
}
