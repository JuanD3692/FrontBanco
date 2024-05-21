import React, { useState, useEffect } from "react";
import DashboardLayout from '../dashboard';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal.css'
import { EndPoint } from '../config/config.js'
const ENDPOINT = EndPoint();

import {
    SendRegisterFamilia,
    SendRegisterReino,
    SendRegisterClase,
    SendRegisterDominio,
    SendRegisterEspecie,
    SendRegisterGenero,
    SendRegisterOrden,

}
    from '../hooks/sendData.jsx'




function StaticExample6() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, response, loading, error } = SendRegisterFamilia();

    // REGISTRO TAXONOMICO
    const [nombre, setNombre] = useState('');
    const [numeroEspecies, setNumeroEspecies] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: 0,
            nombre: nombre,
            num_especies: numeroEspecies,
        }
        register(data);
    }

    return (
        <div>
            <Button variant="primary" className="m-2" onClick={handleShow}>
                Registrar Familia
            </Button>

            <Modal show={show} onHide={handleClose} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Registro taxonomico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container">

                            <div className="row">


                                <h2 className="text-center">Familia</h2>
                                <div className="col-4 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Nombre cientifico" onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="numero de especies" onChange={(e) => setNumeroEspecies(e.target.value)} />
                                </div>


                            </div>
                        </div>

                        <div className="p-2">
                            {response && (
                                <div className="alert alert-success">{response}</div>
                            )}
                        </div>






                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Registrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}



function StaticExample5() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // REGISTRO TAXONOMICO
    const [nombre, setNombre] = useState('');
    const [numeroEspecies, setNumeroEspecies] = useState('');
    const [nombreComun, setNombreComun] = useState('');
    const { register, response, loading, error } = SendRegisterReino();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: 0,
            nombre: nombre,
            num_especies: numeroEspecies,
            "seudonimo": nombreComun
        }
        register(data);
    }


    return (
        <div>
            <Button variant="primary" className="m-2" onClick={handleShow}>
                Registrar Reino
            </Button>

            <Modal show={show} onHide={handleClose} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Registro taxonomico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container">

                            <div className="row">
                                <h2 className="text-center">Reino</h2>
                                <div className="col-4 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Nombre cientifico" onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="numero de especies" onChange={(e) => setNumeroEspecies(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="Nombre común" onChange={(e) => setNombreComun(e.target.value)} />
                                </div>

                            </div>
                        </div>

                        <div className="p-2">
                            {response && (
                                <div className="alert alert-success">{response}</div>
                            )}
                        </div>

                        {
                            error ? <h1>error...</h1> : <h1>{error}</h1>
                        }
                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Registrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}



function StaticExample4() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { register, response, loading, error } = SendRegisterOrden();

    // REGISTRO TAXONOMICO
    const [nombre, setNombre] = useState('');
    const [numeroEspecies, setNumeroEspecies] = useState('');
    const [nombreComun, setNombreComun] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: 0,
            nombre: nombre,
            "seudonimo": nombreComun,
            num_especies: numeroEspecies,
        }
        register(data);
    }


    return (
        <div>
            <Button variant="primary" className="m-2" onClick={handleShow}>
                Registrar Orden
            </Button>

            <Modal show={show} onHide={handleClose} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Registro taxonomico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container">

                            <div className="row">
                                <h2 className="text-center">Orden</h2>
                                <div className="col-4 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Nombre cientifico" onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="numero de especies" onChange={(e) => setNumeroEspecies(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="Nombre común" onChange={(e) => setNombreComun(e.target.value)} />
                                </div>

                            </div>
                        </div>

                        <div className="p-2">
                            {response && (
                                <div className="alert alert-success">{response}</div>
                            )}
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Registrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}






function StaticExample3() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // REGISTRO TAXONOMICO
    const [nombre, setNombre] = useState('');
    const [numeroEspecies, setNumeroEspecies] = useState('');
    const [nombreComun, setNombreComun] = useState('');
    const { register, response, loading, error } = SendRegisterDominio();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: 0,
            nombre: nombre,
            num_especies: numeroEspecies,
            "seudonimo": nombreComun
        }
        register(data);
    }


    return (
        <div>
            <Button variant="primary" className="m-2" onClick={handleShow}>
                Registrar Dominio
            </Button>

            <Modal show={show} onHide={handleClose} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Registro taxonomico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container">

                            <div className="row">
                                <h2 className="text-center">Dominio</h2>
                                <div className="col-4 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Nombre cientifico" onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="numero de especies" onChange={(e) => setNumeroEspecies(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="Nombre común" onChange={(e) => setNombreComun(e.target.value)} />
                                </div>

                            </div>
                        </div>

                        <div className="p-2">
                            {response && (
                                <div className="alert alert-success">{response}</div>
                            )}
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Registrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}





function StaticExample2() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // REGISTRO TAXONOMICO
    const [nombre, setNombre] = useState('');
    const [numeroEspecies, setNumeroEspecies] = useState('');
    const [nombreComun, setNombreComun] = useState('');
    const { register, response, loading, error } = SendRegisterClase();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: 0,
            nombre: nombre,
            num_especies: numeroEspecies,
            "seudonimo": nombreComun
        }
        register(data);

    }


    return (
        <div>
            <Button variant="primary" className="m-2" onClick={handleShow}>
                Registrar Clase
            </Button>

            <Modal show={show} onHide={handleClose} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Registro taxonomico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container">

                            <div className="row">
                                <h2 className="text-center">Clase</h2>
                                <div className="col-4 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Nombre cientifico" onChange={(e) => setNombre(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="numero de especies" onChange={(e) => setNumeroEspecies(e.target.value)} />
                                </div>

                                <div className="col-4 form-group">
                                    <input type="text" className="form-control" placeholder="Nombre común" onChange={(e) => setNombreComun(e.target.value)} />
                                </div>

                            </div>
                        </div>

                        <div className="p-2">
                            {response && (
                                <div className="alert alert-success">{response}</div>
                            )}
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Registrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}




function StaticExample1() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // REGISTRO TAXONOMICO
    const [genero, setGenero] = useState('');
    const [numeroEspecies, setNumeroEspecies] = useState('');
    const { register, response, loading, error } = SendRegisterGenero();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: 0,
            nombre: genero,
            num_especies: numeroEspecies,
        }
        register(data);
    }


    return (
        <div>
            <Button variant="primary" className="m-2" onClick={handleShow}>
                Registrar Genero
            </Button>

            <Modal show={show} onHide={handleClose} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Registro taxonomico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container">
                            <div className="row">
                                <h2 className="text-center">Genero</h2>
                                <div className="col-6 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Genero" onChange={(e) => setGenero(e.target.value)} />
                                </div>

                                <div className="col-6 form-group">
                                    <input type="text" className="form-control" placeholder="numero de especies" onChange={(e) => setNumeroEspecies(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="p-2">
                            {response && (
                                <div className="alert alert-success">{response}</div>
                            )}
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Registrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}










function StaticExample() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [clases, setClases] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [familias, setFamilias] = useState([]);
    const [ordenes, setOrdenes] = useState([]);
    const [dominios, setDominios] = useState([]);
    const [reinos, setReinos] = useState([]);
    const { register, response, loading, error } = SendRegisterEspecie();

    // REGISTRO TAXONOMICO
    const [especie, setEspecie] = useState('');
    const [genero, setGenero] = useState('');
    const [familia, setFamilia] = useState('');
    const [orden, setOrden] = useState('');
    const [clase, setClase] = useState('');
    const [dominio, setDominio] = useState('');
    const [reino, setReino] = useState('');
    const [imagen, setImagen] = useState('');
    const [altura, setAltura] = useState('');


    const routes = [
        { key: 'clases', url: `${ENDPOINT}/clases`, setData: setClases },
        { key: 'generos', url: `${ENDPOINT}/generos`, setData: setGeneros },
        { key: 'familias', url: `${ENDPOINT}/familias`, setData: setFamilias },
        { key: 'ordenes', url: `${ENDPOINT}/orden`, setData: setOrdenes },
        { key: 'dominios', url: `${ENDPOINT}/dominios`, setData: setDominios },
        { key: 'reinos', url: `${ENDPOINT}/reinos`, setData: setReinos },
    ]

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


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('id',0)
        formData.append('nombre',especie)
        formData.append('id_genero',parseInt(genero))
        formData.append('id_familia',parseInt(familia))
        formData.append('id_orden',parseInt(orden))
        formData.append('id_reino',parseInt(reino))
        formData.append('id_clase',parseInt(clase))
        formData.append('id_dominio',parseInt(dominio))
        formData.append('nombre_archivo', imagen);
        formData.append('altura_promedio', altura);
        register(formData);
    }


    const handleImagenChange = (e) => {
        const file = e.target.files[0];
        setImagen(file);
      };
    

    return (
        <div>
            <Button variant="primary" className="m-2" onClick={handleShow}>
                Registrar especie
            </Button>

            <Modal show={show} onHide={handleClose} className="dialog">
                <Modal.Header closeButton>
                    <Modal.Title>Registro taxonomico</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
                        <div className="container">
                            <div className="row">
                                <h2 className="text-center">Especie</h2>
                                <div className="col-6 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Especie" onChange={(e) => setEspecie(e.target.value)} />
                                </div>

                                <div className="col-6 form-group">
                                    <input type="file" className="form-control" onChange={handleImagenChange} />
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-12 form-group">
                                    <input type="text" className="form-control mb-2" id="nombre" placeholder="Altura (m)" onChange={(e) => setAltura(e.target.value)} />
                                </div>

                            </div>
                        </div>


                        <div className="container mt-1">
                            <div className="row">
                                <div className="col-6 form-group">
                                    <h2>Genero</h2>
                                    <select name="" id="" className="form-select" onChange={(e) => setGenero(e.target.value)} >
                                        <option value="">Seleccionar</option>
                                        {
                                            generos.map((genero, index) => (
                                                <option value={genero.id} key={index}>{genero.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className="col-6 form-group ">
                                    <h2>Familia</h2>
                                    <select name="" id="" className="form-select" onChange={(e) => setFamilia(e.target.value)}>
                                        <option >Seleccionar</option>
                                        {familias.map((familia, index) => (
                                            <option value={familia.id} key={index}>{familia.nombre}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-3">
                            <div className="row">

                                <div className="col-6 form-group">
                                    <h2>Orden</h2>
                                    <select name="" id="" className="form-select" onChange={(e) => setOrden(e.target.value)}>
                                        <option value="">Seleccionar</option>
                                        {ordenes.map((orden, index) => (
                                            <option value={orden.id} key={index}>{orden.nombre}</option>
                                        ))
                                        }
                                    </select>
                                </div>


                                <div className="col-6 form-group ">
                                    <h2>Clase</h2>
                                    <select name="" id="" className="form-select" onChange={(e) => setClase(e.target.value)} >
                                        <option value="">Seleccionar</option>
                                        {
                                            clases.map((clase, index) => (
                                                <option value={clase.id} key={index}>{clase.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>



                        <div className="container mt-3">
                            <div className="row">
                                <div className="col-6 form-group mt-2">
                                    <h2>Dominio</h2>
                                    <select name="" id="" className="form-select" onChange={(e) => setDominio(e.target.value)}>
                                        <option value="">Seleccionar</option>
                                        {dominios.map((dominio, index) => (
                                            <option value={dominio.id} key={index}>{dominio.nombre}</option>
                                        ))
                                        }
                                    </select>
                                </div>

                                <div className="col-6 form-group mt-2">
                                    <h2>Reino</h2>
                                    <select name="" id="" className="form-select" onChange={(e) => setReino(e.target.value)}>
                                        <option value="">Seleccionar</option>
                                        {
                                            reinos.map((reino, index) => (
                                                <option value={reino.id} key={index}>{reino.nombre}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="p-2">
                            {response && (
                                <div className="alert alert-success">{response}</div>
                            )}
                        </div>

                        <div className="p-2">
                            {error && (
                                <div className="alert alert-danger">{error}</div>
                            )}
                        </div>

                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <Button variant="danger" onClick={handleClose}>
                        Cerrar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleSubmit}>
                        Registrar
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
}



const Registro = () => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const data = [
        { name: ["aaa", "\n", "b"], company: "Test Corp", city: "Yonkers", state: "NY" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "CT" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "FL" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "TX" },
    ];

    const columns = [
        {
            name: "name",
            label: "Nombre",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "company",
            label: "Company",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "city",
            label: "City",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "state",
            label: "State",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const options = {
        responsive: 'standard',

    };

    {
        /*     
            <Table
                title={"Registro de plantas"}
                data={data}
                columns={columns}
                options={options}
            /> 
        */
    }

    return (
        <div>
           <DashboardLayout>
            <div className="container text-center" >
                <div className="row d-flex justify-content-center">

                    <h1 >Menu de opciones</h1>

                    <div className="col-1 m-3">
                        < StaticExample6 />
                        <StaticExample5 />
                        <StaticExample />
                    </div>

                    <div className="col-1 m-3">
                        < StaticExample4 />
                        < StaticExample3 />
                    </div>

                    <div className="col-1  m-3">
                        < StaticExample2 />
                        < StaticExample1 />
                    </div>
                </div>
            </div>
            </DashboardLayout>
        </div>
    )
}

export default Registro;