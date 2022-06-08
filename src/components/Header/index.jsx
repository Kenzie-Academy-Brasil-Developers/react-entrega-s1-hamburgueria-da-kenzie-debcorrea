import { Logo } from "./../Logo";
import { InputSearch } from "./../InputSearch";
import "./style.css";

export function Header({ products, setFilteredProducts }) {
  return (
    <header className="header">
      <div className="headerContainer">
      <Logo />
      <InputSearch products={products} setFilteredProducts={setFilteredProducts} />
      </div>
    </header>
  );
}
