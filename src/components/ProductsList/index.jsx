import { Product } from "../Product";
import "./style.css";

export function ProductsList({ products, currentSale, setCurrentSale }) {
  return (
    <ul className="list">
      {products?.map((product) => (
        <Product
          key={product.id}
          product={product}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
        />
      ))}
    </ul>
  );
}
