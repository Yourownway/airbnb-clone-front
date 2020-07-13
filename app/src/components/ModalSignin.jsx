/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core/';

export default function ModalSignin() {
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
              <h1>Connexion</h1>
            </div>
            <form className="Modal_container_form">
              <input type="email" name="email" id="email" placeholder="Email" />
              <input type="password" name="password" id="password" placeholder="Mot de passe" />
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
