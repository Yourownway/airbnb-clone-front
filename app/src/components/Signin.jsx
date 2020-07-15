/* eslint-disable no-alert */
import { useState, useContext } from 'react';
import axios from 'axios';
import ContextAuth from './ContextAuth';

export default function Signin() {
  const { dispatch } = useContext(ContextAuth);
  const [connexion, setConnexion] = useState({
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setConnexion({
      ...connexion,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setConnexion({
        ...connexion,
        isSubmitting: true,
        errorMessage: null,
      });
      const res = await axios.post('/api/signin', connexion);
      dispatch({ type: 'LOGIN' });
      console.log('dispatch 2 : ', dispatch);
      console.log('Console.log de res : ', res);
      // console.log('Console.log de res.data.token : ', res.data.token);
      // console.log('Console.log de res.data : ', res.data);
    } catch (error) {
      setConnexion({
        ...connexion,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      });
      // console.log('error.message : ', error.message);
      // console.log('error.statusText : ', error.statusText);
    }
  };

  return { handleSubmit, handleChange, connexion };
}
