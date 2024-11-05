import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">{item.categoria}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
            handleRestar={handleRestar}
            handleSumar={handleSumar}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

// traer props {item} from ItemDetailContainer, y pasarlos con props a ItemCount. para saber que cantidad existe en stock, y no vender mas de lo debido
