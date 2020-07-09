import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to="/">
          <img src="airbnb.png" alt="" />
          <h3>Explorer</h3>
        </Link>
      </div>
      <div>
        <Link to="/enregistres">
          <img src="heart.png" alt="" />
          <h3>Enregistrés</h3>
        </Link>
      </div>
      <div>
        <Link to="/connexion">
          <img src="user.png" alt="" />
          <h3>Connexion</h3>
        </Link>
      </div>
    </nav>
  );
}
