import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from '../components/Tables.jsx';
import {SendRol} from '../hooks/users.jsx';

const ActualizarRol = ({getRoles,userData}) => {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [id, setId] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {UpdateRol,error,loading,response,deleteRol} = SendRol();


    useEffect(() => {
        setNombre(userData.nombre);
        setDescripcion(userData.descripcion);
        setId(userData.id);
        getRoles();
      }, [userData,response]);
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirm = window.confirm("¿Estas seguro de actualizar el contacto?");
        const data = {
            id,
            nombre,
            descripcion
        }
      confirm ? UpdateRol(data) : null;
    }



    const handleDelete = async () => {
        const confirm = window.confirm("¿Estas seguro de eliminar el contacto?");
        confirm ? deleteRol(id) : null;

      }
    

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    

    return (
        <>

            <Button variant="primary" onClick={handleOpenModal}>
                Editar
            </Button>

            <Modal show={isModalOpen} onHide={handleCloseModal} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar rol</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="container mt-4">

                            <div className="row d-flex justify-content-center ">

                                <div className="col-8 form-group">
                                    <label htmlFor="">Nombre</label>
                                    <input type="text" className="form-control mb-2" id="nombre"  defaultValue={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="col-8 form-group">
                                    <label htmlFor="">Descripcion</label>
                                    <textarea name="" id="" cols="30" rows="5" className="form-control" defaultValue={descripcion}  onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                </div>

                            </div>


                            {
                                "error" && (
                                    <div className="p-2">
                                        <div className="alert alert-danger">{"error"}</div>
                                    </div>
                                )
                            }


                            {

                                <div className="p-2">
                                    {"response" && (
                                        <div className="alert alert-success">{"response"}</div>
                                    )}
                                </div>

                            }



                            <div className="text-center pt-4">
                                <button className="btn btn-success">Registrar</button>
                            </div>



                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>


                    <Button variant="danger" onClick={handleDelete}>
                        Eliminar
                    </Button>


                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}







const RegistrarRol = () => {


    const [data, setRoles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const {deleteRol,error,loading,register,response} = SendRol();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    const getRoles = async () => {
        fetch(`${ENDPOINT}/roles`)
        .then(res => res.json())
        .then(data => {
            setRoles(data);
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getRoles();
    }, [ENDPOINT,response])


    const RegistrarRol = () => {

        const [nombre, setNombre] = useState(selected.nombre);
        const [descripcion, setDescripcion] = useState(selected.descripcion);


        const handleSubmit = async (e) => {
            e.preventDefault();
            const confirm = window.confirm("¿Estas seguro?");
            const data = {
                id: 0,
                nombre,
                descripcion
            }
            confirm ? register(data) : null;
        }
        

        return (
            <>

                <Button variant="primary" onClick={handleOpenModal}>
                    Crear rol
                </Button>

                <Modal show={isModalOpen} onHide={handleCloseModal} className="dialog">
                    <Modal.Header closeButton>
                        <Modal.Title>Crear rol</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit}>
                            <div className="container mt-4">



                                <div className="row d-flex justify-content-center ">

                                    <h1 className='text-center'>Crear rol</h1>


                                    <div className="col-8 form-group">
                                        <input type="text" className="form-control mb-2" id="nombre" placeholder="Nombre del rol" onChange={(e) => setNombre(e.target.value)} />
                                    </div>

                                    <div className="col-8 form-group">
                                        <textarea name="" id="" cols="30" rows="5" className="form-control" placeholder='Descripcion de permisos' onChange={(e) => setDescripcion(e.target.value)}></textarea>

                                    </div>

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
                                        { response && (
                                            <div className="alert alert-success">{response}</div>
                                        )}
                                    </div>

                                }



                                <div className="text-center pt-4">
                                    <button className="btn btn-success">Registrar</button>
                                </div>



                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        );
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
            name: "descripcion",
            label: "Descripcion",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "actualizar",
            label: "Actualizar",
            options: {
                filter: true,
                sort: false,
                customBodyRender: () => {
                    return (
                       <>
                           {
                                 selected && (
                                      <ActualizarRol userData={selected} getRoles={getRoles} />
                                 )
                            
                           }
                       </>
                    )
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
        }
    };

    return (
        <>
            <form action="">

                <div className="container">
                    <div className="row">

                        <div className="col-2">
                            <RegistrarRol />
                        </div>

                    </div>
                </div>


                <div className="container mt-4">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-8">
                            <Table
                                title={"Roles"}
                                data={data}
                                columns={columns}
                                options={options}
                            />
                        </div>
                    </div>
                </div>


            </form>
        </>
    )
}


export default RegistrarRol;