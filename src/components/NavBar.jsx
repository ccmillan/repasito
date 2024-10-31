import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Carpishop</h1>
      </Link>

      {/* cambial a por Link, y href por to... para navegar por la app sin tener que recargar la pagina cada vez al cambiar de link   */}

      <ul className="menu">
        {/* cambiar to a rutas "/", "nosotros". para al clickear nos lleven a los links correctos */}
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="nosotros">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="#">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="#">
            Contacto
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="#"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
