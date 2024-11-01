import React from "react";
import { Form } from "react-router-dom";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado");
  };
  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" placeholder="Ingresa tu nombre" />
        <input type="text" placeholder="Ingresa tu e-mail" />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
