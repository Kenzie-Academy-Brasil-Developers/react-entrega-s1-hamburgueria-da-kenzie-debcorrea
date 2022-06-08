import "./style.css";

export function CartTotal({ currentSale, setCurrentSale }) {
  const totalValue = currentSale?.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  return (
    <div className="totalCart">
      <div className="valueSection">
        <p>Total</p>

        <span>
          {totalValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>

      <button onClick={() => setCurrentSale([])}>Remover todos</button>
    </div>
  );
}
