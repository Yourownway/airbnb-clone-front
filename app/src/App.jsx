import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/App.scss';

import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';
import ContextRecherche from './components/Context';
import ContextAuth from './components/ContextAuth';

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
// };

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')) || {},
  token: localStorage.getItem('token') || {},
};

const reducer = (state, action) => {
  console.log('ACTION : ', action);
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', action.payload.data.token);
      localStorage.setItem('user', JSON.stringify(action.payload.data.user));
      console.log('User : ', action.payload.data.user);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        user: action.payload.data.user,
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [recherche, setRecherche] = useState('');

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
