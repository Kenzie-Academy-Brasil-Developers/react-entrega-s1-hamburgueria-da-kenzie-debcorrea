import "./style.css";

export function Product({ product, currentSale, setCurrentSale }) {
  const checkCart = (product) => {
    return currentSale?.find((cartProduct) => product.id === cartProduct.id);
  };

  return (
    <li className="listItem">
      <div className="imageContainer">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="detailsContainer">
        <h2>{product.name}</h2>

        <span>{product.category}</span>

        <p>
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <button
          onClick={() =>
            !checkCart(product) ? setCurrentSale([...currentSale, product]) : ""
          }
        >
          Adicionar
        </button>
      </div>
    </li>
  );
}
