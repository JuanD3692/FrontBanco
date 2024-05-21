import React, { useState } from 'react';
import '../styles/contacto.css';
import { HsendContact } from "../hooks/sendData";

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [telefono, setTelefono] = useState('');

 const { loading, response, register } = HsendContact();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      "id": 0,
      "nombre": name,
      "correo": email,
      "telefono": telefono,
      "descripcion": message

    };
    register(data);
    setName('');
    setEmail('');
    setMessage('');
    setTelefono('');
  };


  return (
    <section className='contact-area '>

      <div className="d-flex justify-content-center">
          <div className="menu-content pb-60 pt-10 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">Contactanos</h1>
              <p> "¡Contáctanos y cuéntanos qué piensas! Estamos ansiosos por escucharte."      </p>
            </div>
          </div>
        </div>
      
      <div className='container'>

      <form onSubmit={handleSubmit} className='pb-120 w-100'>
          <div className='row'>

            <div className='col-lg-6 d-flex flex-column address-wrap'>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className='common-input mb-20 form-control'
                placeholder='Nombre completo'
              />

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='common-input mb-20 form-control'
                placeholder='Correo electrónico'
              />


              <input
                type="text"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                className='common-input mb-20 form-control'
                placeholder='Telefono'
                minLength={10}
              />                      </div>

            <div className='col-md-6'>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className='common-textarea form-control'
                style={{ height: '150px' }}
                placeholder='Escribe tu mensaje'
              />
              <button className="btn btn-primary mt-20 w-25 ">Enviar <span className="lnr lnr-arrow-right"></span></button>                      </div>
          </div>

        


          {loading && <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}

          {response && <div className="alert alert-success mt-3" role="alert">
            {response}
          </div>}
          


      </form>
      </div>

    </section>
  );
}

export default ContactForm;
