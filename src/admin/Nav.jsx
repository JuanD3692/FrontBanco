import React from 'react';
import useUser from '../hooks/userUser.jsx';
import { Navigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Admin = () => {
    const { isLogged, role,logout } = useUser()

    const roles = {
        admin: '1',
        usuario: '2',
    };

    if (!isLogged || role === roles.usuario) {
        return <Navigate to={'/login'} />;
    }


    return (
        <div>
             {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Brand href="#">TaxoExplore</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu de navegación
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/registro">Registro</Nav.Link>
                  <Nav.Link href="/roles">Roles</Nav.Link>
                  <Nav.Link href="/usuarios">Usuarios</Nav.Link>
                  <Nav.Link href="/contacto">Contacto</Nav.Link>
                  <Nav.Link href="/login" onClick={logout}>Salir</Nav.Link>

                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        </div>
    )
}

export default Admin;