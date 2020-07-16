/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AddPlace() {
  const [addPlace, setAddPlace] = useState({
    cityId: '6',
    name: 'Belle apprtement',
    photos:
      'https://a0.muscache.com/im/pictures/2f43547d-3f6f-4a26-97a7-d2b319a536f8.jpg?im_w=1920',
    description: 'Belle appartement !',
    rooms: '1',
    bathrooms: '1',
    maxGuests: '1',
    priceByNight: '100',
    user: 'host',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddPlace({
      ...addPlace,
      [name]: value,
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const token = localStorage.getItem('token');
  //   console.log('TOKEN -------------- ', token);
  //   const res = await axios.post('/api/places/', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`,
  //     },
  //     addPlace,
  //   });
  //   console.log('RES ----------- ', res);
  // };

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
  };

  return (
    <div className="container">
      <form className="addPlace" action="POST">
        <label htmlFor="cityID">ville</label>
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
        <input type="text" id="name" name="name" value={addPlace.name} onChange={handleChange} />
        <label htmlFor="photos">Photo principale</label>
        <input
          type="text"
          id="photos"
          name="photos"
          value={addPlace.photos}
          onChange={handleChange}
        />
        <label htmlFor="description">Description du logement</label>
        <input
          type="text"
          name="description"
          id="description"
          value={addPlace.description}
          onChange={handleChange}
        />

        <label htmlFor="rooms">Nombre de chambres</label>
        <input
          type="number"
          id="rooms"
          name="rooms"
          value={addPlace.rooms}
          onChange={handleChange}
        />
        <label htmlFor="bathrooms">Nombre de salle de bain</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={addPlace.bathrooms}
          onChange={handleChange}
        />
        <label htmlFor="maxGuests">Nombre de voyageur</label>
        <input
          type="number"
          id="maxGuests"
          name="maxGuests"
          value={addPlace.maxGuests}
          onChange={handleChange}
        />
        <label htmlFor="priceByNight">Prix par nuit</label>
        <input
          type="number"
          id="priceByNight"
          name="priceByNight"
          value={addPlace.priceByNight}
          onChange={handleChange}
        />
        <label htmlFor="user">User</label>
        <input type="text" id="user" name="user" value={addPlace.user} onChange={handleChange} />

        <button type="submit" value="Envoyer" id="btn" onClick={handleSubmit}>
          Envoyer
        </button>
        {JSON.stringify(addPlace)}
      </form>
      <Link to="/">
        <span> &#8249; </span>
        Revenir à la page d'accueil
      </Link>
    </div>
  );
}
