import React from "react";
import { Link } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", padding: "24px" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
          <img src={product.image} alt={product.name} style={{ width: "80px", height: "100px", objectFit: "contain" }} />
          <div>
            <p style={{ color: "#1a73e8", fontWeight: "500", marginBottom: "8px" }}>{product.name}</p>
            <p style={{ marginBottom: "8px" }}>Price: {product.price}</p>
            <Link to={`/products/${product.id}`}>
              <button data-testid={`buy-${product.id}`} style={{ padding: "4px 16px", background: "#888", color: "#fff", border: "none", cursor: "pointer", borderRadius: "2px" }}>Buy</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;