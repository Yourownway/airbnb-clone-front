import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Routes from './components/Routes';
import Footer from './components/Footer';

export default function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <h1>Hello world</h1>
      <h2>Salut copain!</h2>
    </div>
=======
    <Router>
      <Header />
      <Nav />
      <Routes />
      <Footer />
    </Router>
>>>>>>> Lucas
  );
}
