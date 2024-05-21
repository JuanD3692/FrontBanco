// YourModule.js
import { useState, useEffect } from 'react';
import { EndPoint } from '../config/config.js';

const ENDPOINT = EndPoint();

const useAccountData = () => {
  const [userData, setUserData] = useState({});

  const loadUserData = async () => {
    try {
      const response = await fetch(`${ENDPOINT}/current_user`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        },
      });

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadUserData();
  }, [ENDPOINT]);

  return {
    displayName: userData.nombre + ' ' + userData.apellido,
    email: userData.correo,
    photoURL: '/assets/images/avatars/avatar_25.jpg',
  };
};


export {  useAccountData };
