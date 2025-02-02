import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <h1>Carpishop</h1>
      </a>
      <ul className="menu">
        <li>
          <a className="menu-link" href="#">
            Inicio
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Nosotros
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Productos
          </a>
        </li>
        <li>
          <a className="menu-link" href="#">
            Contacto
          </a>
        </li>
        <li>
          <a className="menu-link" href="#"></a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
