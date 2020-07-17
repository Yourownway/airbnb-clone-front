/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function AddPlace() {
  const [addPlace, setAddPlace] = useState({
    cityId: parseInt('11'),
    name: '',
    photos:
      'https://www.presse-citron.net/wordpress_prod/wp-content/uploads/2019/03/airbnb-hoteltonight.jpg',
    description: '',
    rooms: parseInt('0'),
    bathrooms: parseInt('0'),
    maxGuests: parseInt('1'),
    priceByNight: parseInt('1'),
    user: 'host',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddPlace({
      ...addPlace,
      [name]: value,
    });
  };

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: '/api/places',
      data: addPlace,
    });
    history.push('/places');
  };

  return (
    <>
      <div className="addPlace_container">
        <form className="addPlace_container_form" action="POST">
          <h1>Gagnez de l'argent en tant qu'hôte Airbnb</h1>
          <h2>Parlez-nous un peu de votre logement</h2>
          <label htmlFor="cityId">ville</label>
          <select name="cityId" id="cityId" value={addPlace.cityId} onChange={handleChange}>
            <option value="1">Paris</option>
            <option value="2">Dijon</option>
            <option value="3">Rennes</option>
            <option value="4">Bordeaux</option>
            <option value="5">Marseille</option>
            <option value="6">Montpellier</option>
            <option value="7">Strasbourg</option>
            <option value="8">Lille</option>
            <option value="9">Lyon</option>
            <option value="10">Nice</option>
            <option value="11">Saint-Etienne</option>
            <option value="12">Nantes</option>
            <option value="13">Toulouse</option>
            <option value="14">Brest</option>
            <option value="15">Metz</option>
          </select>

          <label htmlFor="name">Titre de l'annonce</label>
          <input
            type="text"
            id="name"
            name="name"
            value={addPlace.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="photos">Photo principale</label>
          <input
            type="text"
            id="photos"
            name="photos"
            value={addPlace.photos}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description du logement</label>
          <input
            type="text"
            name="description"
            id="description"
            value={addPlace.description}
            onChange={handleChange}
            required
          />

          <label htmlFor="rooms">Nombre de chambres</label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            value={addPlace.rooms}
            onChange={handleChange}
            required
            min="0"
          />

          <label htmlFor="bathrooms">Nombre de salle de bain</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={addPlace.bathrooms}
            onChange={handleChange}
            required
            min="0"
          />

          <label htmlFor="maxGuests">Nombre de voyageur</label>
          <input
            type="number"
            id="maxGuests"
            name="maxGuests"
            value={addPlace.maxGuests}
            onChange={handleChange}
            required
            min="1"
          />

          <label htmlFor="priceByNight">Prix par nuit</label>
          <input
            type="number"
            id="priceByNight"
            name="priceByNight"
            value={addPlace.priceByNight}
            onChange={handleChange}
            required
            min="1"
          />

          <label htmlFor="user">User</label>
          <select name="user" id="user" value={addPlace.user} onChange={handleChange}>
            <option value="host">Hôte</option>
            <option value="tourist">Touriste</option>
          </select>

          <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
