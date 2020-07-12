import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/App.scss';

import Header from './components/Header';
import Routes from './components/Routes';
import Footer from './components/Footer';
import ContextRecherche from './components/Context';

export default function App() {
  const [recherche, setRecherche] = useState('');

  const contextValue = {
    recherche,
    setRecherche,
  };

  return (
    <Router>
      <ContextRecherche.Provider value={contextValue}>
        <Header />
        <Routes />
        <Footer />
      </ContextRecherche.Provider>
    </Router>
  );
}
