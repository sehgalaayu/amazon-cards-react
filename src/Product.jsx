// title and description
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    "8,000 DPI",
    "Intuitive touch surface",
    "Mechanical keyboard",
    "Wireless Mouse 2.4GHz",
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default Product;
