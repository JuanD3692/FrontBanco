import React,{useState,useEffect} from 'react';
import DashboardLayout from '../dashboard';
import  RegistrarRol from '../components/Roles.jsx';


const Roles = () =>{
    return(
        <>
            <DashboardLayout>
            <RegistrarRol />
            </DashboardLayout>
        </>
    )
}

export default Roles;