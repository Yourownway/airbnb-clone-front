import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav>
        <div>
          <img src="" alt="" />
          <Link to="/">Explorer</Link>
        </div>
        <div>
          <img src="" alt="" />
          <Link to="/enregistres">Enregistrés</Link>
        </div>
        <div>
          <img src="" alt="" />
          <Link to="/connexion">Connexion</Link>
        </div>
      </nav>
    </div>
  );
}
