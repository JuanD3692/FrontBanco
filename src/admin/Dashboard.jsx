import React from 'react';
import Admin from './admin.jsx';
import Dashboard from "../components/dashboard.jsx";
import "../styles/dashboard.css";
const Dashboardi = () =>{
    return(
        <>
            <Admin />
            <div className="dashboard card-body shadow-sm m-5">
                <h1>Plantas registradas</h1>
                <Dashboard />
        </div>
        </>
    )
}

export default Dashboardi