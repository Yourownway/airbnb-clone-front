import React from 'react';
import { Link } from 'react-router-dom';

export default function Maintenance() {
  return (
    <div className="maintenance">
      <h1>OUPS ! Cette page est en maintenance !</h1>
      <Link to="/">
        <span> &#8249; </span>
        Revenir à la page d'accueil
      </Link>
    </div>
  );
}
