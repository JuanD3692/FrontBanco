import React, { useState, useEffect } from "react";
const UserContext = React.createContext({});
import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();


export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.localStorage.getItem('jwt'));
  const [role, setRole] = useState(window.localStorage.getItem('role'));


  const tokenStatus = {
    "success": "success",
    "fail": "Could not validate credentials",
  }


  useEffect(() => {
    const verifyJWT = async () => {
      try {
        const response = await fetch(`${ENDPOINT}/verify_token`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
          },
        });
        const data = await response.json();
        if (data.detail === tokenStatus.fail) {
          window.localStorage.removeItem('jwt');
          window.localStorage.removeItem('role');
          setJWT(null);
        }
       
      } catch (error) {
        console.log(error);
      }
    };
    verifyJWT();
  }, [ENDPOINT]);



  return (
    <UserContext.Provider value={{ jwt, setJWT, role, setRole }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
