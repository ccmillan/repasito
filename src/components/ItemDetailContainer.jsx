import React, { useEffect, useState } from "react";
import { pedirItemPorId } from "../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  // { itemId } ya no lo vamos a recibir como prop, sino como parametro dinamico

  const [item, setItem] = useState(null);
  const id = useParams().id;

  // useParams siempre devuelve un string

  // hook useParams nos devuelve un objeto con los parametros que hay en una url

  //   TypeError: Cannot read properties of null (reading 'imagen')

  //   significa que esa prop(null) no ha cabiado, es un elemento que todavia no existe

  useEffect(() => {
    pedirItemPorId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
