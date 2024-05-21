import React,{useState,useEffect} from "react";
import DashboardLayout from '../dashboard';
import Usuarios from '../components/Usuarios.jsx';

const UserAdmin = () => {
    return(
        <>
        <DashboardLayout>
            <Usuarios />
            
        </DashboardLayout>
        </>
    )
}

export default UserAdmin;