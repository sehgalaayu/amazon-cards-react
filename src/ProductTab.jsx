import Product from "./Product.jsx";

function ProductTab() {
    let styles={
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px auto",
    maxWidth: "1200px",
    gap: "20px"


    }
  return (
    <div className="ProductTab" style={styles}>
      <Product  title="Logitech MX Master 3S" idx={0} />
      <Product  title="Apple Pencil (2nd Gen)" idx={1} />
      <Product  title="Zebronics Zeb-Transformer" idx={2} />
      <Product  title="Portronics Toad 23 Wireless Mouse" idx={3} />
    </div>
  );
}

export default ProductTab;