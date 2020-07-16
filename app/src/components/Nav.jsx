import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import ContextRecherche from './Context';
import ModalSignup from './ModalSignup';
import ModalSignin from './ModalSignin';
import contextAuth from './ContextAuth';

export default function Nav() {
  const { state, dispatch } = useContext(contextAuth);

  useEffect(() => {
    console.log('Console.log de state', state);
    return () => {};
  }, [state]);

  // Permet l'affichage des deux boutons inscription / connexion
  const InscriptioConnexion = () => {
    return (
      <>
        <div className="Nav_noSmartphone">
          <ModalSignin />
        </div>
        <div className="Nav_noSmartphone Nav_noSmartphone_inscriptionBtn">
          <ModalSignup />
        </div>
      </>
    );
  };

  // Permet l'affichage du bouton Profil
  const ProfilUser = () => {
    return (
      <div className="Nav_noSmartphone Nav_noSmartphone_profil ">
        <button type="button" onClick={Logout}>
          <h3>{state.user && state.user.firstName}</h3>
          <img src="defaultProfil.jpg" alt="Utilisateur" />
        </button>
      </div>
    );
  };

  const Switch = () => {
    if (state.isAuthenticated === false) {
      return <InscriptioConnexion />;
    }
    return <ProfilUser />;
  };

  console.log('isAuthenticated : ', state.isAuthenticated);

  const context = useContext(ContextRecherche);

  const search = (searchValue) => {
    context.setRecherche(searchValue);
  };

  const Logout = () => {
    return dispatch({ type: 'LOGOUT' });
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
          {/* <ModalSignup /> */}
        </div>

        <div className="Nav_noSmartphone">
          <Link to="/addPlace">
            <h3>Héberger des voyageurs</h3>
          </Link>
        </div>
        <div className="Nav_noSmartphone">
          <Link to="/addPlace">
            <h3>Créer une expérience</h3>
          </Link>
        </div>
        <div className="Nav_noSmartphone">
          <Link to="/places" onClick={() => context.setRecherche('')}>
            <h3>Aide</h3>
          </Link>
        </div>
        {/* <div className="Nav_noSmartphone">
          <ModalSignin />
        </div>
        <div className="Nav_noSmartphone Nav_noSmartphone_inscriptionBtn">
          <ModalSignup />
        </div> */}
        <Switch />
      </div>
      <Search search={search} />
    </nav>
  );
}
