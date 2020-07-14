/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core/';

export default function ModalSignup() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <form className="Modal_container_form">
              <input type="text" name="firstName" id="firstName" placeholder="Nom" />
              <input type="text" name="lastName" id="lastName" placeholder="Prénom" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input type="password" name="password" id="password" placeholder="Mot de passe" />
              <div className="Modal_container_radio">
                <div className="Modal_container_radio_button">
                  <input type="radio" name="role" id="host" checked />
                  <label htmlFor="host">Hôte</label>
                </div>
                <div className="Modal_container_radio_button">
                  <input type="radio" name="role" id="tourist" />
                  <label htmlFor="tourist">Touriste</label>
                </div>
              </div>
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
