import "./style.css";

export function InputSearch({ products, setFilteredProducts }) {
  const showProducts = (inputValue) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <form onSubmit={(event) => event.preventDefault()} className="form">
      <input
        type="text"
        onChange={(event) => showProducts(event.target.value)}
        placeholder="Digitar Pesquisa"
      />
      <button>Pesquisar</button>
    </form>
  );
}
