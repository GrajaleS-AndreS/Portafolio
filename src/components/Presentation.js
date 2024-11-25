import React from 'react';
import '../styles/Presentation.css';

const Presentation = () => {
  return (
    <section className="presentation">
      <div className="presentation-content">
        <img src="avatar.png" alt="presentation" className="presentation-img"/>
        <div className="presentation-text">
          <h1> Andres </h1>
          <p> Soy un desarrollador enfocado en el front-end y el back-end. 
          Aunque aún estoy aprendiendo, conozco el manejo de HTML, CSS y JavaScript.
          Me esfuerzo por aprender y mejorar mis habilidades para construir páginas completas y funcionales. </p>
        </div>
      </div>
      <br/>
      <div className="social-links">
        <a href="https://github.com/GrajaleS-AndreS" target="_blank" rel="noopener noreferrer" className="social-btn">
          <img src="github.png" alt="GitHub" className="social-icon"/>
          GitHub
        </a>
        <a href="https://www.instagram.com/andres0659/" target="_blank" rel="noopener noreferrer" className="social-btn">
          <img src="instagram.png" alt="Instagram" className="social-icon"/>
          Instagram
        </a>
      </div>
    </section>
  );
}

export default Presentation;
