import React, { useState } from 'react';
import { 
    updateUser, 
    deleteUser,
    RegisterRol,
    updateRol,
    DeleteRol
} from '../services/users.js';


function SendUpdateUser() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setResponse(null);
        setError(null);
        setLoading(true);
        try {
            const response = await updateUser(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            console.log(error, "capturado");

            setError(error);
            setLoading(false);
        }
    }

    const deleteUsers = async (id) => {
        setResponse(null);
        setError(null);
        setLoading(true);

        try {
            const response = await deleteUser(id);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }


    return { register, loading, error, response, deleteUsers,updateUser };
}


function SendRol  () {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const register = async (data) => {
        setResponse(null);
        setError(null);
        setLoading(true);
        try {
            const response = await RegisterRol(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }

    const deleteRol = async (id) => {
        setResponse(null);
        setError(null);
        setLoading(true);

        try {
            const response = await DeleteRol(id);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }

    const UpdateRol = async (data) => {
        setResponse(null);
        setError(null);
        setLoading(true);

        try {
            const response = await updateRol(data);
            setResponse(response.message);
            setLoading(false);
        } catch (error) {
            if (error) {
                setError(error.detail);
            } 
            setLoading(false);
        }
    }

    return { register, loading, error, response, deleteRol,UpdateRol };
}


export { SendUpdateUser,SendRol };