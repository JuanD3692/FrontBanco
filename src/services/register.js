import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();

//registerContacto
export async function registerContacto(data) {
    try {
        const response = await fetch(`${ENDPOINT}/contacto`, {
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


export async function registerEspecie(data) {
    try {
        console.log(data);
        const response = await fetch(`${ENDPOINT}/create_especie`, {
            method: 'POST',
            body: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
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

export async function registerUser(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_user`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            // Add additional headers here if needed
          }
        });
  
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            const errorData = await response.json();
            throw new HTTPException(response.status, errorData.detail);
        }

    } catch (error) {
        console.error(error);
        throw error; // Re-lanzar el error para que pueda ser capturado en el hook
    }
}

// 

// SERVICE TO REGISTER A NEW FAMILY
export async function registerFamilia(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_familia`, {
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

// SERVICE TO REGISTER A NEW GENUS
export async function registerGenero(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_genero`, {
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

// SERVICE TO REGISTER A NEW SPECIE
export async function registerOrden(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_orden`, {
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

// SERVICE TO REGISTER A NEW KINGDOM
export async function registerReino(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_reino`, {
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

export async function registerClase(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_clase`, {
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


export async function registerDominio(data) {
    try {
        const response = await fetch(`${ENDPOINT}/create_dominio`, {
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
export async function updateEspecies(id,data) {
    try {
        for (var pair of data.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        const response = await fetch(`${ENDPOINT}/especies/`, {
            method: 'PUT',
            body: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
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