import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    alert("Mensaje enviado correctamente.");
  };

  return (
    <section className="contact-section">
      <h2> Contacto </h2> <br/>
      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset className="contact-field">
          <label htmlFor="name"> Nombre </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </fieldset>

        <fieldset className="contact-field">
          <label htmlFor="email"> Correo electrónico </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@dominio.com"
            required
          />
        </fieldset>

        <fieldset className="contact-field">
          <label htmlFor="message"> Mensaje </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe aquí tu mensaje"
            required
          />
        </fieldset>

        <button type="submit" className="submit-btn"> Enviar </button>
      </form>
    </section>
  );
}
