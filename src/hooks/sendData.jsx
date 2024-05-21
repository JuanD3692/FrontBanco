import React, { useState } from 'react';
import 
{ registerFamilia,
 registerReino,
 registerOrden,
 registerGenero,
 registerClase,
 registerDominio,
 registerEspecie,
 registerUser
 ,registerContacto
 ,updateEspecies 
} from '../services/register';
 

 import {  deleteContact,updateContacto } from '../services/users.js';


function HsendContact(data){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setResponse(null);
        setError(null);
        setLoading(true);
        try {
            const response = await registerContacto(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }

    const DeleteContacto = async (id) => {
        setResponse(null);
        setError(null);
        setLoading(true);
        try {
            const response = await deleteContact(id);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }


    const UpdaContacto = async (data) => {
        setResponse(null);
        setError(null);
        setLoading(true);
        try {
            const response = await updateContacto(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }

    return { register, loading, error, response, DeleteContacto,UpdaContacto };
}

function SendRegisterEspecie(data) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setResponse(null);
        setError(null);
        setLoading(true);
        try {
            const response = await registerEspecie(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}


function SendRegisterFamilia(data) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setLoading(true);
        try {
            const response = await registerFamilia(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}


function SendRegisterReino(data) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setLoading(true);
        try {
            const response = await registerReino(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}


function SendRegisterOrden(data) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setLoading(true);
        try {
            const response = await registerOrden(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}


function SendRegisterGenero(data) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setLoading(true);
        try {
            const response = await registerGenero(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}

function SendRegisterClase(data) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setLoading(true);
        try {
            const response = await registerClase(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}






function SendRegisterUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

     const register = async (data) => {
        setError(null);
        setLoading(true);
        try {
            const response = await registerUser(data);
            setResponse(response.message);
            setError(null);
            setLoading(false);
        } catch (error) {
            if (error.detail) {
                setResponse(null);
                setError(error.detail);
            } else {
                setError('Error desconocido');
            }
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}

function UpdateEspecies() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const updateEspecie = async (id,data) => {
        setLoading(true);
        try {
            const response = await updateEspecies(id,data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return { updateEspecie, loading, error, response };
}
function SendRegisterDominio(data) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setLoading(true);
        try {
            const response = await registerDominio(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }
    return { register, loading, error, response };
}

export {HsendContact, SendRegisterFamilia, SendRegisterReino, SendRegisterOrden, SendRegisterGenero ,SendRegisterClase ,SendRegisterDominio ,SendRegisterEspecie ,SendRegisterUser, UpdateEspecies};
