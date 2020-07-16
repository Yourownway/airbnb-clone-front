/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core/';
import Signin from './Signin';

export default function ModalSignin() {
  const { connexion, handleChange, handleSubmit } = Signin();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log('isSubmitting : ', connexion.isSubmitting);
  return (
    <div>
      <button className="Modal_button" type="button" onClick={handleOpen}>
        Connexion
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Modale de connexion"
        aria-describedby="Cette modale vous permet de vous connecter"
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
              <h1>Connexion</h1>
            </div>
            <form className="Modal_container_form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={connexion.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={connexion.password}
                onChange={handleChange}
                required
              />
              <p>
                Nous vous appellerons ou vous enverrons un SMS pour confirmer votre numéro. Les
                frais standards d'envoi de messages et d'échange de données s'appliquent.
              </p>
              <button type="submit" disabled={connexion.isSubmitting}>
                Continuer
              </button>
              {connexion.errorMessage && <span>{connexion.errorMessage}</span>}
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
