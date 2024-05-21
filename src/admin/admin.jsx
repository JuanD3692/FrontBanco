import React, { useState, useEffect } from "react";
import DashboardLayout from "../dashboard";
import IndexPage from '../pages/app';


const InicioAdmin = () => {
    return (
        <>
        <DashboardLayout>
        <IndexPage />
        </DashboardLayout>
        </>
    )
}

export default InicioAdmin;


