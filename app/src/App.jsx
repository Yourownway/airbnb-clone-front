import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/App.scss';

import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';
import ContextRecherche from './components/Context';
import ContextAuth from './components/ContextAuth';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  console.log('ACTION : ', action);
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [recherche, setRecherche] = useState('');

  console.log('initialState : ', initialState);
  console.log('reducer : ', reducer);
  console.log('state : ', state);
  console.log('dispatch :', dispatch);
  console.log('localStorage :', localStorage);

  const contextValue = {
    recherche,
    setRecherche,
  };

  const contextAuth = {
    state,
    dispatch,
  };
  return (
    <Router>
      <ContextAuth.Provider value={contextAuth}>
        <ContextRecherche.Provider value={contextValue}>
          <Header />
          <Routes />
          <Footer />
        </ContextRecherche.Provider>
      </ContextAuth.Provider>
    </Router>
  );
}
