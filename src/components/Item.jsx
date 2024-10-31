import React from "react";

const Item = ({ prod }) => {
  return (
    <div className="producto">
      <img src={prod.imagen} />
      <div>
        <h4>{prod.titulo}</h4>
        <p>Precio: $ {prod.precio}</p>
        <p>Categoria: {prod.categoria}</p>
        <a className="ver-mas" href={`/item/${prod.id}`}>
          {/* para cambiar de pag(`/item/${prod.id}`) */}
          Ver mas
        </a>
      </div>
    </div>
  );
};

export default Item;
