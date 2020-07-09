import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav">
      <Link className="Nav_container_logo" to="/">
        <img src="logo_airbnb.svg" alt="Logo de airbnb" />
      </Link>
      <div className="Nav_container_links">
        <div className="Nav_link">
          <Link to="/places">
            <img src="airbnb.png" alt="" />
            <h3>Explorer</h3>
          </Link>
        </div>

        <div className="Nav_link">
          <Link to="/enregistres">
            <img src="heart.png" alt="" />
            <h3>Enregistrés</h3>
          </Link>
        </div>

        <div className="Nav_link">
          <Link to="/connexion">
            <img src="user.png" alt="" />
            <h3>Connexion</h3>
          </Link>
        </div>

        <div className="Nav_test">
          <Link to="/maintenance">
            <h3>Héberger des voyageurs</h3>
          </Link>
        </div>
        <div className="Nav_test">
          <Link to="/maintenance">
            <h3>Créer une expérience</h3>
          </Link>
        </div>
        <div className="Nav_test">
          <Link to="/maintenance">
            <h3>Aide</h3>
          </Link>
        </div>
        <div className="Nav_test">
          <Link to="/connexion">
            <h3>Connexion</h3>
          </Link>
        </div>
        <div className="Nav_test Nav_test_inscriptionBtn">
          <Link to="/maintenance">
            <h3>Inscription</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}
