import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';

export default function Connexion() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="maintenance">
      <button type="button" onClick={handleOpen}>
        Open Modal
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
            <input type="text" name="" id="" placeholder="Nom" />
            <input type="text" name="" id="" placeholder="Prénom" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="password" name="" id="" placeholder="Mot de passe" />
            <button type="submit">Continuer</button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
