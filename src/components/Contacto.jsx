import React, { useState } from "react";
import { Form } from "react-router-dom";

const Contacto = () => {
  const [valores, setValores] = useState({
    nombre: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado", { valores });
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleValores = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={valores.nombre}
          onChange={handleValores}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu e-mail"
          value={valores.email}
          onChange={handleValores}
          name="email"
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
