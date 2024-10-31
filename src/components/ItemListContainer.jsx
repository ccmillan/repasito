import { Component, useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoria;
  const [titulo, setTitulo] = useState("Productos");

  // usar useParams en el Component que se desea renderizar

  useEffect(() => {
    pedirDatos().then((res) => {
      if (categoria) {
        setProductos(res.filter((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      } else {
        setProductos(res);
        setTitulo("Productos");
      }
    });
  }, [categoria]);
  // filtrar desde productos, si pedirItemPorId.categoria corresponde con la categoria proporcionada de useParams.

  // [categoria] en el arrary para que el useEffect se actualice cuando la categoria cambie

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
