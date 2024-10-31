import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer itemId={2} />
    </div>
  );
}

export default App;
