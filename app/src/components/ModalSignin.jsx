/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Modal, Backdrop, Fade } from '@material-ui/core/';
import axios from 'axios';

export default function ModalSignin() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [connexion, setConnexion] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setConnexion({
      ...connexion,
      [name]: value,
    });
  };

  const message = () => {
    // eslint-disable-next-line no-alert
    alert('Tu es bien connecté !');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('/api/signin', connexion)
      .then((res) => {
        console.log('this is the res', connexion);
        console.log('this is the data', res.data.token);
        message();
      })
      .catch((error) => {
        console.log('this is not workind dude', error);
      });
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
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={connexion.password}
                onChange={handleChange}
              />
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
