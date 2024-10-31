import React from "react";
import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {
  return (
    <div className="container">
      <h2 className="main-title">{toCapital(titulo)}</h2>
      <div className="productos">
        {productos.map((prod) => (
          <Item prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
