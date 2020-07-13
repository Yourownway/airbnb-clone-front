import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

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
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="Modal"
      >
        <div className="Modal_container">
          <div className="Modal_container_header">
            <h1>Inscription</h1>
          </div>
          <form className="Modal_container_form">
            <input type="text" name="firstName" id="firstName" placeholder="Nom" />
            <input type="text" name="lastName" id="lastName" placeholder="Prénom" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="password" id="password" placeholder="Mot de passe" />
            <button type="submit">Continuer</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
