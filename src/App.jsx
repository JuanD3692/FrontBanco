import React from 'react';
import {Route, Routes } from 'react-router-dom'; // Asegúrate de que estas importaciones estén presentes
import Login from './components/Login'; // Asegúrate de que esta importación esté presente
import { UserContextProvider } from "./context/UserContext.jsx";
import  Registro from './admin/plantas.jsx';
import Especies from './admin/plantasRegistradas.jsx'
import Reportes from './pages/blog.jsx';
import Perfil from './pages/perfil.jsx';
import Roles from './admin/roles.jsx';
import UserAdmin from './admin/usuarios.jsx';
import Dashboard from './admin/admin.jsx';
import Contacto  from './admin/Contacto.jsx';
import Blog from './pages/blog.jsx';
function App() {
  return (
    <UserContextProvider>
      <Routes>
       <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />              
        <Route path="/registro" element={<Registro />} />
        <Route path="/especies" element={<Especies />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/usuarios" element={<UserAdmin />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App; 

