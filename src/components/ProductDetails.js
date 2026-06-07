import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p style={{ padding: "24px" }}>Product not found.</p>;

  return (
    <div style={{ padding: "32px", maxWidth: "600px" }}>
      <img src={product.image} alt={product.name} style={{ width: "160px", objectFit: "contain", marginBottom: "16px" }} />
      <h2>{product.name}</h2>
      <p style={{ margin: "12px 0" }}>{product.description}</p>
      <p><strong>Price: {product.price}</strong></p>
      <button className="btn" onClick={() => navigate("/")} style={{ marginTop: "20px", padding: "8px 20px", cursor: "pointer" }}>
        Back
      </button>
    </div>
  );
}

export default ProductDetails;