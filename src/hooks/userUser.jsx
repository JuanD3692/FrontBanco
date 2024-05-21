import React, { useContext, useCallback, useState } from "react";
import Context from "../context/UserContext";
import loginService from "../services/login";

export default function useUser() {
  const { jwt, setJWT,role,setRole} = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });
  const login = useCallback(({ email, password }) => {
    setState({ loading: true, error: false });
    loginService({ email, password })
      .then(res => {
        window.localStorage.setItem('jwt', res.jwt);
        window.localStorage.setItem('role',res.data.id_rol);
        setState({ loading: false, error: false });
        console.log(res.data.id_rol);
        setJWT(res.jwt);
        setRole(res.data.id_rol);
      })
      .catch(err => {
        window.localStorage.removeItem('jwt');
        setState({ loading: false, error: true });
        console.log(err);
      });
  }, [setJWT]);

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt');
    window.localStorage.removeItem('role');
    setJWT(null);
    setRole(null);
  }, [setJWT]);

  return {
    isLogged: Boolean(jwt),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout,
    role: role
  };
}
