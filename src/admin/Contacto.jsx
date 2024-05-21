import React, { useState,useEffect } from 'react';
import DashboardLayout from '../dashboard';
import Table from '../components/Tables.jsx';
import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import  {HsendContact} from '../hooks/sendData.jsx';


const Contacto = () => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { register, loading, error, response, DeleteContacto,UpdaContacto } = HsendContact();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

const ActualizarContacto = ({selected}) => {
    const [nombre, setNombre] = useState(selected.nombre);
    const [telefono, setTelefono] = useState(selected.telefono);
    const [descripcion, setDescripcion] = useState(selected.descripcion);
    const [correo, setCorreo] = useState(selected.correo);
    const [id, setId] = useState(selected.id);



    const handleDelete = async (e) => {
        // ask if the user is sure to delete the contact
        e.preventDefault();
        const confirm = window.confirm("¿Estas seguro de eliminar el contacto?");
        confirm ? DeleteContacto(id) : null;

    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const confirm = window.confirm("¿Estas seguro de actualizar el contacto?");
        const data = {
            id,
            nombre,
            correo,
            telefono,
            descripcion
        }
        confirm ? UpdaContacto(data) : null;
    }

    return (
        <>

            <Modal show={isModalOpen} onHide={handleCloseModal} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Editar Contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        </div>
                        
                        
                        <div className="mb-3">
                            <label htmlFor="correo" className="form-label">Correo</label>
                            <input type="text" className="form-control" id="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        </div>

                        
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripcion</label>
                            <input type="text" className="form-control" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
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


                        <div className='text-center'>
                            <button type="submit" className="btn btn-primary text-center">Actualizar</button>
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



    useEffect(() =>{
       const getContacto = async () =>{
              const res = await fetch(`${ENDPOINT}/contactos`);
              const data = await res.json();
              setData(data);
         }
            getContacto();  
        
    },[])

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
            name: "telefono",
            label: "Telefono",
            options: {
                filter: true,
                sort: false,
            }
        
        },
        {
            name:"correo",
            label:"Correo",
            options:{
                filter:true,
                sort:false,
            }
        },
        {
            name:"descripcion",
            label:"Descripcion",
            options:{
                filter:true,
                sort:false,
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
        }
    };

    return(
        <>

          <DashboardLayout>
               
            <Table
            title={"Contacto"}
            columns={columns}
            data={data}
            options={options}
            />
            <ActualizarContacto selected={selected}  />
            </DashboardLayout>
        </>
    )
}

export default Contacto;