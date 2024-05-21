import React, { useState, useEffect } from "react";
import Table from '../components/Tables.jsx';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal.css'
import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();
import { UpdateEspecies } from '../hooks/sendData.jsx';
import DashboardLayout from '../dashboard';
const Plantas = () => {

    const [data, setUsuarios] = useState([]);
    const [selected, setSelected] = useState([]);



    const LoadEspecie = async () => {
        fetch(`${ENDPOINT}/especies`)
            .then(res => res.json())
            .then(data => {
                setUsuarios(data);
            })
            .catch(err => console.log(err))
            
    }

    useEffect(() => {
        LoadEspecie();
    }, [ENDPOINT]);

    const options = {
        responsive: 'standard',
        selectableRows: 'none',
        download: false,
        print: false,
        filter: true,
        viewColumns: false,
        onRowClick: (rowData) => {
            const selectedRow = data.find((row) => row.id === rowData[0]);
            setSelected(selectedRow);
        },


    };


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
            name: "nombre_comun",
            label: "Nombre",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "Genero",
            label: "Genero",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    const genero = value[0]; // Supongo que el nombre del género está en el primer elemento del arreglo "Genero"
                    return (
                        <span>{genero.nombre}</span>
                    );
                }
            }
        }, 
        {
            name: "Familia",
            label: "Familia",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    const Familia = value[0]; // Supongo que el nombre del género está en el primer elemento del arreglo "Genero"
                    return (
                        <span>{Familia.nombre}</span>
                    );
                }
            }
        },       
        {
            name: "Orden",
            label: "Orden",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    const Orden = value[0]; // Supongo que el nombre del género está en el primer elemento del arreglo "Genero"
                    return (
                        <span>{Orden.nombre}</span>
                    );
                }
            }
        },   
        {
            name: "Clase",
            label: "Clase",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    const Clase = value[0]; // Supongo que el nombre del género está en el primer elemento del arreglo "Genero"
                    return (
                        <span>{Clase.nombre}</span>
                    );
                }
            }
        }, 
        {
            name: "Dominio",
            label: "Dominio",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    const Dominio = value[0]; // Supongo que el nombre del género está en el primer elemento del arreglo "Genero"
                    return (
                        <span>{Dominio.nombre}</span>
                    );
                }
            }
        },
        {
            name: "Reino",
            label: "Reino",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    const Reino = value[0]; // Supongo que el nombre del género está en el primer elemento del arreglo "Genero"
                    return (
                        <span>{Reino.nombre}</span>
                    );
                }
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
                        
                        <StaticExample  datos={selected}/>
                    );
                }
            }
        }
    ];

  
    

    function StaticExample() {

    
        useEffect(() => {
            const fetchDataConcurrently = async () => {
                const promises = routes.map(async (route) => {
                    const response = await fetch(route.url);
                    const data = await response.json();
                    route.setData(data);

                });

                await Promise.all(promises);

            };
            fetchDataConcurrently();
        }, [ENDPOINT]);
    
        const [show, setShow] = useState(false); // Set the initial value to true
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [clases, setClases] = useState([]);
        const [generos, setGeneros] = useState([]);
        const [familias, setFamilias] = useState([]);
        const [ordenes, setOrdenes] = useState([]);
        const [dominios, setDominios] = useState([]);
        const [reinos, setReinos] = useState([]);
        const { updateEspecie, response, loading, error } = UpdateEspecies();
         // REGISTRO TAXONOMICO
         const [especie, setEspecie] = useState(selected.nombre_comun);
         const [genero, setGenero] = useState(selected.id_genero);
         const [familia, setFamilia] = useState(selected.id_familia);
         const [orden, setOrden] = useState(selected.id_orden);
         const [clase, setClase] = useState(selected.id_clase);
         const [dominio, setDominio] = useState(selected.id_dominio);
         const [reino, setReino] = useState(selected.id_reino);
         const [imagen, setImagen] = useState(selected.url);
     
    
        const routes = [
            { key: 'clases', url: `${ENDPOINT}/clases`, setData: setClases },
            { key: 'generos', url: `${ENDPOINT}/generos`, setData: setGeneros },
            { key: 'familias', url: `${ENDPOINT}/familias`, setData: setFamilias },
            { key: 'ordenes', url: `${ENDPOINT}/orden`, setData: setOrdenes },
            { key: 'dominios', url: `${ENDPOINT}/dominios`, setData: setDominios },
            { key: 'reinos', url: `${ENDPOINT}/reinos`, setData: setReinos },
        ]
    
        const handleSubmit = async (e) => {
            e.preventDefault();



            const formData = new FormData();
            formData.append('id',parseInt(selected.id))
            formData.append('nombre',especie)
            formData.append('id_genero',parseInt(genero))
            formData.append('id_familia',parseInt(familia))
            formData.append('id_orden',parseInt(orden))
            formData.append('id_reino',parseInt(reino))
            formData.append('id_clase',parseInt(clase))
            formData.append('id_dominio',parseInt(dominio))
            formData.append('nombre_archivo', imagen);
            formData.append('altura_promedio', selected.altura);
            updateEspecie(selected.id,formData);
          
        }
        return (
            
            <div>
                 
                <Button variant="primary" className="m-2" onClick={handleShow}>
                    Editar
                </Button>
              
                <Modal show={show} onHide={handleClose} className="dialog">
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar taxonomia</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >
                        
                            <div className="container">
                                <div className="row">
                                    <h2 >Especie</h2>
                                    <div className="col-6 form-group">
                                        <input type="text" className="form-control mb-2" id="nombre" defaultValue={selected.nombre_comun} placeholder="Especie" onChange={(e) => setEspecie(e.target.value)} />
                                    </div>
    
                                    <div className="col-6 form-group">
                                        <input type="file" className="form-control" onChange={(e) => setImagen(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                           
                            <div className="container mt-1">
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <h2>Genero</h2>
                                        <select name="" id="" className="form-select" onChange={(e) => setGenero(e.target.value)}>
                                            {selected.Genero && selected.Genero.length > 0 && (
                                             
                                               <option value={selected.id_genero}>{selected.Genero[0].nombre}</option>
                                              
                                               
                                            )}
                                            {generos.map((genero, index) => {
                                                if (!selected.Genero || genero.nombre !== selected.Genero[0].nombre) {
                                                    return (
                                                        <option value={genero.id} key={index}>{genero.nombre}</option>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </div>
                                          
                                    <div className="col-6 form-group ">
                                        <h2>Familia</h2>
                                        <select name="" id="" className="form-select" onChange={(e) => setFamilia(e.target.value)}>
                                            {selected.Familia && selected.Familia.length > 0 && (
                                                <option value={selected.id_familia}>{selected.Familia[0].nombre}</option>
                                            )}
                                            {familias.map((familia, index) => {
                                                if (!selected.Familia || familia.nombre !== selected.Familia[0].nombre) {
                                                    return (
                                                        <option value={familia.id} key={index}>{familia.nombre}</option>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
    
                            <div className="container mt-3">
                                <div className="row">
    
                                    <div className="col-6 form-group">
                                        <h2>Orden</h2>
                                        <select name="" id="" className="form-select" onChange={(e) => setOrden(e.target.value)}>
                                            {selected.Orden && selected.Orden.length > 0 && (
                                                <option value={selected.id_orden}>{selected.Orden[0].nombre}</option>
                                            )}
                                            {ordenes.map((orden, index) => {
                                                if (!selected.Orden || orden.nombre !== selected.Orden[0].nombre) {
                                                    return (
                                                        <option value={orden.id} key={index}>{orden.nombre}</option>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </div>
    
    
                                    <div className="col-6 form-group ">
                                        <h2>Clase</h2>
                                        <select name="" id="" className="form-select" onChange={(e) => setClase(e.target.value)}>
                                            {selected.Clase && selected.Clase.length > 0 && (
                                                <option value={selected.id_clase}>{selected.Clase[0].nombre}</option>
                                            )}
                                            {clases.map((clase, index) => {
                                                if (!selected.Clase || clase.nombre !== selected.Clase[0].nombre) {
                                                    return (
                                                        <option value={clase.id} key={index}>{clase.nombre}</option>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
    
    
    
                            <div className="container mt-3">
                                <div className="row">
                                    <div className="col-6 form-group mt-2">
                                        <h2>Dominio</h2>
                                        <select name="" id="" className="form-select" onChange={(e) => setDominio(e.target.value)}>
                                            {selected.Dominio && selected.Dominio.length > 0 && (
                                                <option value={selected.id_dominio}>{selected.Dominio[0].nombre}</option>
                                            )}
                                            {dominios.map((dominio, index) => {
                                                if (!selected.Dominio || dominio.nombre !== selected.Dominio[0].nombre) {
                                                    return (
                                                        <option value={dominio.id} key={index}>{dominio.nombre}</option>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </div>
    
                                    <div className="col-6 form-group mt-2">
                                        <h2>Reino</h2>
                                        <select name="" id="" className="form-select" onChange={(e) => setReino(e.target.value)}>
                                            {selected.Reino && selected.Reino.length > 0 && (
                                                <option value={selected.id_reino}>{selected.Reino[0].nombre}</option>
                                            )}
                                            {reinos.map((reino, index) => {
                                                if (!selected.Reino || reino.nombre !== selected.Reino[0].nombre) {
                                                    return (
                                                        <option value={reino.id} key={index}>{reino.nombre}</option>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                                   
                            <div className="p-2">
                               
                            </div>
    
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
    
                        <Button variant="danger" onClick={handleClose}>
                            Cerrar
                        </Button>
    
                        <Button variant="success" type="submit" onClick={handleSubmit}>
                            Actualizar
                        </Button>
    
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
   
    return (
        <>
        <DashboardLayout>
            <Table
                title={"Especies registradas"}
                data={data}
                columns={columns}
                options={options}
            />  
        </DashboardLayout>
        </>
    )
}


export default Plantas;