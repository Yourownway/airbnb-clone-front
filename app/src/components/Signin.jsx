/* eslint-disable no-alert */
import { useState, useContext } from 'react';
import axios from 'axios';
import ContextAuth from './ContextAuth';

export default function Signin() {
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

  const { dispatch } = useContext(ContextAuth);
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setConnexion({
        ...connexion,
        isSubmitting: true,
        errorMessage: null,
      });
      const res = await axios.post('/api/signin', connexion);
      if (res.status === 200) {
        return dispatch({ type: 'LOGIN', payload: res });
      }
    } catch (error) {
      setConnexion({
        ...connexion,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      });
    }
  };

  return { handleSubmit, handleChange, connexion };
}
