import { CartTotal } from "../CartTotal";
import { toast } from "react-toastify";
import "./style.css";

export function CartProduct({ currentSale, setCurrentSale }) {
  const removeFromCart = (productId) => {
    const newCart = currentSale.filter((product) => product.id !== productId);
    setCurrentSale(newCart);
    toast.success("Produto removido do carrinho");
  };

  return (
    <ul className="cartList">
      {currentSale?.map((product) => (
        <li key={product.id} className="cartItem">
          <div className="imageCart">
            <img src={product.img} alt={product.name} />
          </div>

          <div className="detailsCart">
            <h3>{product.name}</h3>

            <span>{product.category}</span>
          </div>

          <div className="buttonCart">
            <button onClick={() => removeFromCart(product.id)}>Remover</button>
          </div>
        </li>
      ))}

      <CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </ul>
  );
}
