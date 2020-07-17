/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core/';
import Signup from './Signup';

export default function ModalSignup() {
  const { user, handleChange, handleSubmit } = Signup();
  const { firstName, lastName, email, password, role } = user;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
                  value={firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Nom"
                  value={lastName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <select name="role" id="role" value={role} onChange={handleChange}>
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

                <button type="submit" onClick={handleClose}>
                  Continuer
                </button>
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
