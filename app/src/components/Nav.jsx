import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import ContextRecherche from './Context';
import ModalSignup from './ModalSignup';
import ModalSignin from './ModalSignin';

export default function Nav() {
  const context = useContext(ContextRecherche);

  const search = (searchValue) => {
    context.setRecherche(searchValue);
  };

  return (
    <nav className="Nav">
      <Link className="Nav_container_logo" to="/">
        <img src="logo_airbnb.svg" alt="Logo de airbnb" />
      </Link>

      <div className="Nav_container_links">
        <div className="Nav_link">
          <Link to="/places" onClick={() => context.setRecherche('')}>
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
          {/* <ModalSignin /> */}
        </div>

        <div className="Nav_noSmartphone">
          <Link to="/maintenance">
            <h3>Héberger des voyageurs</h3>
          </Link>
        </div>
        <div className="Nav_noSmartphone">
          <Link to="/maintenance">
            <h3>Créer une expérience</h3>
          </Link>
        </div>
        <div className="Nav_noSmartphone">
          <Link to="/places" onClick={() => context.setRecherche('')}>
            <h3>Aide</h3>
          </Link>
        </div>
        <div className="Nav_noSmartphone">
          <ModalSignin />
        </div>
        <div className="Nav_noSmartphone Nav_noSmartphone_inscriptionBtn">
          <ModalSignup />
        </div>
      </div>
      <Search search={search} />
    </nav>
  );
}
