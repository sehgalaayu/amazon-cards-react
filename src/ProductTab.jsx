import Product from "./Product.jsx";
import "./ProductTab.css";

function ProductTab() {
  return (
    <div className="ProductTab">
      <Product  title="Logitech MX Master 3S" idx={0} />
      <Product  title="Apple Pencil (2nd Gen)" idx={1} />
      <Product  title="Zebronics Zeb-Transformer" idx={2} />
      <Product  title="Portronics Toad 23 Mouse" idx={3} />
    </div>
  );
}

export default ProductTab;