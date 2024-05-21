import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();


//UPDATE USER
export async function updateUser(data) {
    try {
        const response = await fetch(`${ENDPOINT}/users-update`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'content-type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}


export async function updateContacto(data) {
    try {
        const response = await fetch(`${ENDPOINT}/contactos-update`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'content-type': 'application/json'
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}


//DELETE USER 
export async function deleteUser(id) {
    let error = false;
    try {
        const response = await fetch(`${ENDPOINT}/users-delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'content-type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new HTTPException(response.status, errorData.detail);
        }

    } catch (error) {
        throw error; // Re-lanzar el error para que pueda ser capturado en el hook
    }
}

export async function deleteContact(id) {
    try {
        const response = await fetch(`${ENDPOINT}/contactos-delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'content-type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new HTTPException(response.status, errorData.detail);
        }

    } catch (error) {
        throw error; // Re-lanzar el error para que pueda ser capturado en el hook
    }
}

export async function RegisterRol(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_rol`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'content-type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new HTTPException(response.status, errorData.detail);
        }

    } catch (error) {
        throw error; // Re-lanzar el error para que pueda ser capturado en el hook
    }
}


//updateRol
export async function updateRol(data) {
    try {
        const response = await fetch(`${ENDPOINT}/roles-update`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'content-type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new HTTPException(response.status, errorData.detail);
        }

    } catch (error) {
        throw error; // Re-lanzar el error para que pueda ser capturado en el hook
    }
}

//DeleteRol
export async function DeleteRol(id) {
    try {
        const response = await fetch(`${ENDPOINT}/roles-delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'content-type': 'application/json'
            }
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            const errorData = await response.json();
            throw new HTTPException(response.status, errorData.detail);
        }

    } catch (error) {
        throw error; // Re-lanzar el error para que pueda ser capturado en el hook
    }
}

class HTTPException {
    constructor(status_code, detail) {
        this.status_code = status_code;
        this.detail = detail;
    }
}