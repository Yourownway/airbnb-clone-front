/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AddPlace() {
  const [addPlace, setAddPlace] = useState({
    cityId: '4',
    name: 'dsd',
    photos: 'fds',
    description: 'fsd',
    rooms: '1',
    bathrooms: '1',
    maxGuests: '1',
    priceByNight: '100',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddPlace({
      ...addPlace,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const headers = {
    //   'Content-Type': 'application/json',
    //   Authorization:
    //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJSb2xlIjoiaG9zdCIsImlhdCI6MTU5NDcyNDE2MSwiZXhwIjoxNTk0NzI3NzYxfQ.K4zyuTGM_pfwpkvDERES8jaISFMcFTgSdIjbu6qzznc',
    //   Accept: 'application/json',
    // };

    axios
      .post(
        '/api/places/',
        // {
        //   headers: headers,
        // },
        addPlace
      )
      .then((res) => {
        console.log('this is the addplace', addPlace);
      })
      .catch((error) => {
        console.log('this is not workind dude', error);
      });
  };
  return (
    <div className="container">
      <h2>Ajouter une annonce pour commencer à gagner de l'argent</h2>
      <p>Une fois l'annonce publiées, vous pourrez la modifer à tout moment.</p>

      <form className="addPlace" action="POST" onSubmit={handleSubmit}>
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
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={addPlace.description}
          onChange={handleChange}
        ></textarea>
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
        <input type="submit" value="Envoyer" id="btn" />
        {JSON.stringify(addPlace)}
      </form>
      <Link to="/">
        <span> &#8249; </span>
        Revenir à la page d'accueil
      </Link>
    </div>
  );
}
