/* eslint-disable no-alert */
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [user, setUser] = useState({
    role: 'host',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const message = () => {
    alert('Tu es bien inscrit !');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/signup', user);
    message();
    console.log(user);
  };

  return { handleSubmit, handleChange, user, setUser };
}
