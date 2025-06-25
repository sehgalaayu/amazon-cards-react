// title and description
import Price from "./Price.jsx";
import "./Product.css";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let features = [
    ["8,000 DPI", "5 Programmable Buttons"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Intuitive touch surface", "Designed for iPad Pro"],
    ["Wireless Mouse 2.4GHz", "Optical Orientation"],
  ];
  let offer = [
    "\u20B95000 off with exchange",
    "\u20B95000 off with exchange",
    "\u20B95000 off with exchange",
    "\u20B95000 off with exchange"
  ];
  let note = [
    "*Including exchange offer",
    "*Including exchange offer",
    "*Including exchange offer",
    "*Including exchange offer"
  ];
  return (
    <div className="Product">
      <h4 style={{width:'100%',textAlign:'center',fontSize:'1.25rem',fontWeight:800,marginBottom:8}}>{title}</h4>
      <div style={{width:'100%',textAlign:'center',color:'#222',fontSize:'1.08rem',marginBottom:12}}>{offer[idx]}</div>
      <ul style={{width:'100%',paddingLeft:'22px',margin:'0 0 0 0',textAlign:'left',color:'#232f3e',fontSize:'1rem',fontWeight:500}}>
        {features[idx].map((f, i) => (
          <li key={i} style={{marginBottom:'4px'}}>{f}</li>
        ))}
      </ul>
      <div style={{flexGrow:1}}></div>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      <div style={{width:'100%',textAlign:'center',color:'#888',fontSize:'0.95rem',marginTop:8}}>{note[idx]}</div>
    </div>
  );
}

export default Product;
