import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Inscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      role: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  selectedOption = (event) => {
    this.selectedOption('host');
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      checked: event.target.role,
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    // const data = JSON.stringify(this.state);
    console.log(this.state);

    axios
      .post('/api/signup', this.state)
      .then((res) => {
        console.log('this is the res', res);
      })
      .catch((error) => {
        console.log('this is not workind dude', error);
      });
    // const sendInscriptiojn = (inscription) => {
    //   return fetch('/signup', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(this.state),
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .catch((err) => console.log(err));
    // };
  }

  render() {
    const { role, firstName, lastName, email, password } = this.state;
    return (
      <div className="container">
        <div className="inscription">
          <h2>INSCRIPTION</h2>
          <form action="POST" className="addPlace_form" onSubmit={this.handleSubmit}>
            <p>Rôle:</p>
            <div className="inscription_radio">
              <label htmlFor="role">Hôte</label>
              <input
                type="radio"
                checked={role}
                id="role"
                name="role"
                value="host"
                onChange={this.handleChange}
                checked={this.selectedOption === 'host'}
              />
              <label htmlFor="role">Voyageur</label>
              <input
                type="radio"
                checked={role}
                id="role"
                name="role"
                value="tourist"
                onChange={this.handleChange}
                checked={this.selectedOption === 'tourist'}
              />
            </div>
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />

            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />

            <label htmlFor="email">Adresse e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />

            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />

            <input type="submit" value="Envoyer" id="btn" />
            {JSON.stringify(this.state)}
          </form>

          {/* <Link to="/">
            <span> &#8249; </span>
            Revenir à la page d'accueil
          </Link> */}
        </div>
      </div>
    );
  }
}

export default Inscription;
