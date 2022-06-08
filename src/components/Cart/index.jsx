import { EmptyCart } from "../EmptyCart";
import { CartProduct } from "../CartProduct";
import "./style.css";

export function Cart({ currentSale, setCurrentSale }) {
  return (
    <section className="cart">
      <div className="cartTitle">
        <h2>Carrinho de compras</h2>
      </div>

      {currentSale.length > 0 ? (
        <CartProduct
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      ) : (
        <EmptyCart />
      )}
    </section>
  );
}
