/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core/';
import axios from 'axios';

export default function ModalSignup() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState({
    role: 'host',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const message = () => {
    // eslint-disable-next-line no-alert
    alert('Tu es bien inscrit !');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/signup', user)
      .then((res) => {
        console.log('this is the res', user);
        message();
      })
      .catch((error) => {
        console.log('this is not workind dude', error);
      });
  };

  return (
    <div>
      <button className="Modal_button" type="button" onClick={handleOpen}>
        Inscription
      </button>
      <Modal
        disableEnforceFocus
        open={open}
        onClose={handleClose}
        aria-labelledby="Modale d'inscription"
        aria-describedby="Cette modale vous permet de vous incrire"
        className="Modal"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <div className="Modal_container">
            <div className="Modal_container_header">
              <button className="Modal_button" type="button" onClick={handleClose}>
                X
              </button>
              <h1>Inscription</h1>
            </div>
            <form className="Modal_container_form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Prénom"
                value={user.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Nom"
                value={user.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={user.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={user.password}
                onChange={handleChange}
              />
              <select name="role" id="role" value={user.role} onChange={handleChange}>
                <option value="host" onChange={handleChange}>
                  Hôte
                </option>
                <option value="tourist" onChange={handleChange}>
                  Voyageur
                </option>
              </select>
              <p>
                Nous vous appellerons ou vous enverrons un SMS pour confirmer votre numéro. Les
                frais standards d'envoi de messages et d'échange de données s'appliquent.
              </p>
              <button type="submit">Continuer</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
