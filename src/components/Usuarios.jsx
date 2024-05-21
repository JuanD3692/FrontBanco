import React, { useState, useEffect } from "react";
import Table from '../components/Tables.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal.css'
import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();
import { SendUpdateUser } from '../hooks/users.jsx';
import { SendRegisterUser } from '../hooks/sendData.jsx'

const CrearUsuario = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correoRegister, setCorreoRegister] = useState('')
    const [passwordRegister, setPasswordRegister] = useState('')
    const [pais, setPais] = useState('')
    const [rol, setRol] = useState(2)
    const { error, register, response, loading } = SendRegisterUser()
    const [roles, setRoles] = useState([])

    useEffect(() => {
        fetch(`${ENDPOINT}/roles`)
            .then(res => res.json())
            .then(data => {
                setRoles(data);
            })
            .catch(err => console.log(err))
    }, [ENDPOINT]);

    const HandleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id: 0,
            nombre: nombre,
            apellido: apellido,
            id_pais: parseInt(pais),
            correo: correoRegister,
            contraseña: passwordRegister,
            id_rol: rol
        }
        register(data)

    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };




    return (
        <>
            <Button variant="primary" onClick={handleOpenModal}>
                Crear usuario
            </Button>

            <Modal show={isModalOpen} >
                <Modal.Header >
                    <Modal.Title>Registro de usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form action="" onSubmit={HandleSubmit}>


                        <div className='container mt-5'>
                            <div className='row d-flex justify-content-center'>

                                <div className='col-5'>
                                    <input type="text" className='form-control' placeholder='nombre' onChange={(e) => setNombre(e.target.value)}  required/>
                                </div>

                                <div className='col-5'>
                                    <input type="text" className='form-control' placeholder='Apellido' onChange={(e) => setApellido(e.target.value)} required/>
                                </div>

                            </div>
                        </div>

                        <div className='container mt-4'>
                            <div className='row d-flex justify-content-center'>

                                <div className='col-5'>
                                    <input type="email" className='form-control' placeholder='correo' onChange={(e) => setCorreoRegister(e.target.value)} required />
                                </div>

                                <div className='col-5'>
                                    <input type="password" className='form-control' placeholder='contraseña' onChange={(e) => setPasswordRegister(e.target.value)} required/>
                                </div>

                            </div>
                        </div>

                        <div className='container mt-4'>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-5 pais'>
                                    <select name="" id="" className='form-select' onChange={(e) => setRol(e.target.value)}>
                                        <option defaultValue> Seleccionar</option>
                                        {roles.map((rol,index) => (
                                            <option key={index} value={rol.id}>{rol.nombre}</option>
                                        ))
                                        }
                                    </select>
                                </div>

                                <div className='col-5'>
                                <select name="" id="" className='form-select' onChange={(e) => setPais(e.target.value)}>
                                        <option defaultValue>Seleccionar</option>
                                        <option value="1">Colombia</option>
                                        <option value="2">Venezuela</option>
                                        <option value="3">Ecuador</option>
                                    </select>
                                    </div>
                            </div>
                        </div>


                        <div className='container'>
                            <div className='row d-flex justify-content-center'>

                                {error && (
                                    <div className="col-8 mt-2 alert response-login alert-danger text-center"> {error}</div>
                                )}
                                {response && (
                                    <div className="col-8 mt-2 alert response-login alert-success text-center"> {response}</div>
                                )}

                            </div>
                        </div>

                        <div className="d-flex justify-content-center text-center">
                            <button className='text-center btn btn-success mt-4'>Registrarse</button>
                        </div>

                      {
                          <RegistroMasivo />
                        
                      }
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}




const Usuarios = () => {

    const [data, setUsuarios] = useState([]);
    const [selected, setSelected] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const LoadUser = async () => {
        fetch(`${ENDPOINT}/users`)
            .then(res => res.json())
            .then(data => {
                setUsuarios(data);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        LoadUser();
    }, [ENDPOINT]);


    const ModalActualizar = (props) => {

        const [nombre, setNombre] = useState(selected.nombre);
        const [apellido, setApellido] = useState(selected.apellido);
        const [correo, setCorreo] = useState(selected.correo);
        const [pais, setPais] = useState(selected.pais);
        const [rol, setRol] = useState(selected.rol);
        const [id, setId] = useState(selected.id);
        const { error, register, loading, response,deleteUsers } = SendUpdateUser();


        const Actualizar = (e) => {
            e.preventDefault();
            const data = {
                id: selected.id,
                nombre: nombre,
                apellido: apellido,
                id_pais: 1,
                correo: correo,
                contraseña: '',
                id_rol: 1,
            }
            register(data);
        }

        if (response) {
            LoadUser();
        }


        const handleDelete = (e) => {
            e.preventDefault();
            //aks for confirmation
            const confirm = window.confirm("¿Desea eliminar el usuario?");
            if (confirm) {
                deleteUsers(selected.id);
            }
        }

        return (
            <>



                <Modal show={isModalOpen} onHide={handleCloseModal} className="dialog">
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar usuario</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={Actualizar} >
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control mb-2" id="nombre" defaultValue={selected.nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </div>

                                    <div className="col-6 form-group">
                                        <label htmlFor="apellido">Apellido</label>
                                        <input type="text" className="form-control" defaultValue={selected.apellido} onChange={(e) => setApellido(e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label htmlFor="nombre">Correo</label>
                                        <input type="text" className="form-control mb-2" id="nombre" defaultValue={selected.correo} onChange={(e) => setCorreo(e.target.value)} />
                                    </div>

                                    <div className="col-6 form-group">
                                        <label htmlFor="apellido">Pais</label>
                                        <input type="text" className="form-control" defaultValue={selected.pais} />
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">

                                    <div className="col-6 form-group">
                                        <label htmlFor="nombre">Rol</label>
                                        <input type="text" className="form-control" readOnly id="nombre" defaultValue={selected.rol} onChange={(e) => setNombre(e.target.value)} />
                                    </div>

                                    <div className="col-6 form-group">
                                        <label htmlFor="rol"></label>
                                        <select className="form-select" onChange={(e) => setRol(e.target.value)}>
                                            <option defaultValue>Seleccione</option>
                                            <option value="1">Administrador</option>
                                            <option value="2">Usuario</option>
                                        </select>
                                    </div>

                                </div>
                            </div>


                            <div className="text-center mt-5">
                                <button type="submit" className="btn btn-success">Actualizar</button>
                            </div>


                            {
                                error && (
                                    <div className="p-2">
                                        <div className="alert alert-danger">{error}</div>
                                    </div>
                                )
                            }


                            {

                                <div className="p-2">
                                    {response && (
                                        <div className="alert alert-success">{response}</div>
                                    )}
                                </div>

                            }

                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="danger" onClick={handleDelete}>
                            Eliminar usuario
                        </Button>

                        <Button variant="secondary" onClick={props.handleCloseModal}>
                            Cerrar
                        </Button>


                    </Modal.Footer>
                </Modal>

            </>
        )
    }





    const columns = [
        {
            name: "id",
            label: "Codigo",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "nombre",
            label: "Nombre",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "apellido",
            label: "Apellido",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "pais",
            label: "Pais",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "correo",
            label: "Correo",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "rol",
            label: "Rol",
            options: {
                filter: true,
                sort: false,
            }

        },
        {
            name: "acciones",
            label: "Acciones",
            options: {
                filter: false,
                sort: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <button onClick={handleOpenModal} className="btn btn-primary" >Editar</button>
                    );
                }
            }
        }
    ];

    const options = {
        responsive: 'standard',
        selectableRows: 'none',
        download: false,
        print: false,
        filter: true,
        viewColumns: false,
        onRowClick: (rowData) => {
            const selectedRows = data.find((row) => row.id === rowData[0]);
            setSelected(selectedRows);
        },


    };
    return (
        <>
        <div className="m-2">
            < CrearUsuario  cargarUsuarios={LoadUser}/>

        </div>
            <Table
                title={"Usuarios"}
                data={data}
                columns={columns}
                options={options}
            />
            <ModalActualizar handleCloseModal={handleCloseModal} />
        </>
    )
}


export default Usuarios;