import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import UserConnexion from './Connexion';

class AddPlace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityId: '',
      name: '',
      photos: '',
      description: '',
      rooms: '',
      bathrooms: '',
      maxGuests: '',
      priceByNight: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit(event) {
    event.preventDefault();
    // const data = JSON.stringify(this.state);
    console.log(this.state);

    // const headers = {
    //   'Content-Type': 'application/json',
    //   Accept: 'application/json',
    //   Authorization:
    //     'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJSb2xlIjoiaG9zdCIsImlhdCI6MTU5NDcxNjA0MywiZXhwIjoxNTk0NzE5NjQzfQ.6BNrR06of7QxVS16jthxIyG1eg5NoaSKybVoLeZG3AM',
    // };
    // axios
    //   .post(
    //     '/api/places',
    //     {
    //       headers: headers,
    //     },
    //     this.state
    //   )
    //   .then((res) => {
    //     console.log('this is the res', res);
    //   })
    //   .catch((error) => {
    //     console.log('this is not workind dude', error);
    //   });

    // const sendPlace = (places) => {
    //   return fetch('/api/places/', {
    //     method: 'POST',
    //     headers: {
    //       Authorization:
    //         'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJSb2xlIjoiaG9zdCIsImlhdCI6MTU5NDY3NTAzOCwiZXhwIjoxNTk0Njc4NjM4fQ.3qPUj_okfqy5pKYW9dO55ciVdXYbcgwGDYKdYLdg2Yo',
    //       ContentType: 'application/json',
    //     },
    //     body: this.state,
    //   })
    //     .then((response) => {
    //       return console.log(response.json());
    //     })
    //     .catch((err) => console.log(err));
    // };
    // console.log('headers', sendPlace);

    const sendPlace = (places) => {
      return fetch('/api/places/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `bearer ${this.state.data.token}`,
        },
        body: JSON.stringify(this.state),
      })
        .then((response) => {
          return response.json();
        })
        .catch((err) => console.log(err));
    };
    // console.log('add token', `bearer ${data.token}`);
    // console.log('add token', `bearer ${UserConnexion.res.data}`);
    console.log(this.state.user);
  }

  render() {
    const {
      cityId,
      name,
      photos,
      description,
      rooms,
      bathrooms,
      maxGuests,
      priceByNight,
    } = this.state;
    return (
      <div className="addPlace">
        <h2>Ajouter une annonce pour commencer à gagner de l'argent</h2>
        <p>Une fois l'annonce publiées, vous pourrez la modifer à tout moment.</p>

        <form action="POST" className="addPlace_form" onSubmit={this.handleSubmit}>
          <label htmlFor="cityID">ville</label>
          <select name="cityId" id="cityId" value={cityId} onChange={this.handleChange}>
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
          <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
          <label htmlFor="photos">Photo principale</label>
          <input
            type="text"
            id="photos"
            name="photos"
            value={photos}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description du logement</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={description}
            onChange={this.handleChange}
          ></textarea>
          <label htmlFor="rooms">Nombre de chambres</label>
          <input type="number" id="rooms" name="rooms" value={rooms} onChange={this.handleChange} />
          <label htmlFor="bathrooms">Nombre de salle de bain</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={bathrooms}
            onChange={this.handleChange}
          />
          <label htmlFor="maxGuests">Nombre de voyageur</label>
          <input
            type="number"
            id="maxGuests"
            name="maxGuests"
            value={maxGuests}
            onChange={this.handleChange}
          />
          <label htmlFor="priceByNight">Prix par nuit</label>
          <input
            type="number"
            id="priceByNight"
            name="priceByNight"
            value={priceByNight}
            onChange={this.handleChange}
          />
          <input type="submit" value="Envoyer" id="btn" />
          {JSON.stringify(this.state)}
        </form>
        <Link to="/">
          <span> &#8249; </span>
          Revenir à la page d'accueil
        </Link>
      </div>
    );
  }
}

export default AddPlace;
