import "./App.css";
import "./style/reset.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, []);

  return (
    <div className="App">
      <Header products={products} setFilteredProducts={setFilteredProducts} />

      <div className="containerMain">
        <main>
          {filteredProducts.length > 0 ? (
            <ProductsList
              products={filteredProducts}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          ) : (
            <ProductsList
              products={products}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
            />
          )}
        </main>

        <aside>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </aside>
      </div>
    </div>
  );
}

export default App;
