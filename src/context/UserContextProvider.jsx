import React, { useState } from 'react';
import UserContext from './UserContext';
import axios from 'axios';

const UserContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token') || '';
  const [user, setUser] = useState({
    token: initialToken,
    data: {},
  });

  const login = (email, password) => {
    axios.post('http://localhost:3002/login', {
      email,
      password
    })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        setUser({ token, data: {} });
      })
      .catch(error => {
        console.error('Erreur lors de la récupération du token:', error);
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser({ token: '', data: {} });
  };

  const getAuthorizationHeader = () => {
    const token = localStorage.getItem('token'); // Récupérer le token du stockage local (ou autre mécanisme de stockage)

    if (token) {
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }
  
    return {}; // Si aucun token n'est disponible, retourner un en-tête vide
  };

  return (
    <UserContext.Provider value={{ user, login, logout, getAuthorizationHeader }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;