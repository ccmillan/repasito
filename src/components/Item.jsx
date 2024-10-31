import React from "react";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <div className="producto">
      <img src={prod.imagen} />
      <div>
        <h4>{prod.titulo}</h4>
        <p>Precio: $ {prod.precio}</p>
        <p>Categoria: {prod.categoria}</p>
        <Link className="ver-mas" to={`/item/${prod.id}`}>
          {/* para cambiar de pag(`/item/${prod.id}`) */}
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;
