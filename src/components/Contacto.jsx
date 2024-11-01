import React, { useState } from "react";
import { Form } from "react-router-dom";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado", { nombre, email });
  };

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleNombre}
        />
        <input
          type="text"
          placeholder="Ingresa tu e-mail"
          value={email}
          onChange={handleEmail}
        />
        <button type="submit" className="enviar">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
