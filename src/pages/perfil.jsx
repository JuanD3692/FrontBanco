import React from "react";
import useUser from '../hooks/userUser.jsx';
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Perfil = () => {

    const { isLogged, role, logout } = useUser()

    const roles = {
        admin: '1',
        usuario: '2',
    };

    if (!isLogged || role === roles.admin) {
        return <Navigate to={'/login'} />;
    }

    const HandleLogout = () => {
        logout();
    }

    return (
        <>
            <Container className="p-3 login w-50 d-flex justify-content-center align-items-center flex-column">

                <h1>Proximamente.</h1>
                <button className="btn btn-danger" onClick={HandleLogout}>Volver</button>
            </Container>
        </>
    )
}

export default Perfil;

