/* eslint-disable no-alert */
import { useState } from 'react';
import axios from 'axios';

export default function Signin(callback) {
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
    alert('Tu es bien connecté !');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post('/api/signin', connexion);
    message();
    console.log('Console.log de res.data.token : ', res.data.token);
    console.log('Console.log de res.data : ', res.data);
  };

  return { handleSubmit, handleChange, connexion };
}
