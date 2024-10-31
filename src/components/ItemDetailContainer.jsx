import React, { useEffect, useState } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ itemId }) => {
  const [item, setItem] = useState(null);
  //   TypeError: Cannot read properties of null (reading 'imagen')

  //   significa que esa prop(null) no ha cabiado, es un elemento que todavia no existe

  useEffect(() => {
    pedirItemPorId(itemId).then((res) => {
      setItem(res);
    });
  }, []);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
