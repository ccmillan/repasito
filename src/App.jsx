import { useState } from "react";
import Contacto from "./components/Contacto";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Nosotros from "./components/Nosotros";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContext } from "./context/CartContext";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];

    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );
    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {};
  return carrito.reduce((acc, prod) => acc + producto.cantidad, 0);

  return (
    <div>
      <CartContext.Provider
        value={{ carrito, agregarAlCarrito, cantidadEnCarrito }}
      >
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            {/* queremos caprurar el item(id) dinamico, no con una propiedad [itemId={2}], que capture la opcion que el usuario quiere elegir */}
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/productos/contacto" element={<Contacto />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;

// CartContext.Provider vamos a accesar a cualquier cosa proveida por Provider, desde cualquier parte de la app
