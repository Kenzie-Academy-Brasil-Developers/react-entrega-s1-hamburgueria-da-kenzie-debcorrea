import { useState } from "react";
import "./style.css";

export function InputSearch({ products, setFilteredProducts }) {
  const [inputValue, setInputValue] = useState("");

  const showProducts = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="form">
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Digitar Pesquisa"
      />
      <button onClick={() => showProducts()}>Pesquisar</button>
    </form>
  );
}
