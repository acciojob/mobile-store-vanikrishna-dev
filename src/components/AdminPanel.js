import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function AdminPanel({ products, setProducts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Add product form state
  const [newProduct, setNewProduct] = useState({ name: "", description: "", image: "", price: "" });

  // Edit product state
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const product = products.find((p) => p.id === parseInt(id));
      if (product) setEditProduct({ ...product });
    } else {
      setEditProduct(null);
    }
  }, [id, products]);

  // Add product
  const handleAdd = () => {
    if (!newProduct.name || !newProduct.price) return;
    const nextId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;
    setProducts([...products, { ...newProduct, id: nextId, price: Number(newProduct.price) }]);
    setNewProduct({ name: "", description: "", image: "", price: "" });
  };

  // Delete product
  const handleDelete = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  // Save edited product
  const handleSave = () => {
    setProducts(products.map((p) => (p.id === editProduct.id ? { ...editProduct, price: Number(editProduct.price) } : p)));
    navigate("/admin");
  };

  // Edit view
  if (id && editProduct) {
    return (
      <div style={{ padding: "32px", maxWidth: "600px" }}>
        <div style={{ marginBottom: "16px" }}>
          <label><strong>Title</strong></label>
          <input className="form-control" value={editProduct.name} onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "6px", border: "1px solid #aaa", borderRadius: "4px" }} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label><strong>Description</strong></label>
          <textarea className="form-control" value={editProduct.description} onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
            style={{ display: "block", width: "100%", padding: "8px", marginTop: "6px", border: "1px solid #aaa", borderRadius: "4px", minHeight: "100px" }} />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label><strong>Image</strong></label>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "6px" }}>
            <input className="form-control" value={editProduct.image} onChange={(e) => setEditProduct({ ...editProduct, image: e.target.value })}
              style={{ flex: 1, padding: "8px", border: "1px solid #aaa", borderRadius: "4px" }} />
            <img src={editProduct.image} alt="" style={{ width: "48px", height: "48px", objectFit: "contain" }} />
          </div>
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label><strong>Price</strong></label>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "6px" }}>
            <input className="form-control" value={editProduct.price} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })}
              style={{ width: "200px", padding: "8px", border: "1px solid #aaa", borderRadius: "4px" }} />
            <button
              onClick={() => navigate("/admin")}
              data-testid="edit-view-delete"
              style={{ padding: "8px 16px", background: "#888", color: "#fff", border: "none", cursor: "pointer", borderRadius: "4px" }}>
              Delete
            </button>
            <button
              onClick={handleSave}
              data-testid="edit-view-save"
              style={{ padding: "8px 16px", background: "#555", color: "#fff", border: "none", cursor: "pointer", borderRadius: "4px" }}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Admin list view
  return (
    <div style={{ padding: "24px" }}>
      {/* Add product form */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
        <input className="form-control" placeholder="Name" value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={{ padding: "8px", border: "1px solid #aaa", borderRadius: "4px", flex: "1" }} />
        <input className="form-control" placeholder="Description" value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          style={{ padding: "8px", border: "1px solid #aaa", borderRadius: "4px", flex: "1" }} />
        <input className="form-control" placeholder="Image URL" value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          style={{ padding: "8px", border: "1px solid #aaa", borderRadius: "4px", flex: "1" }} />
        <input className="form-control" placeholder="Price" value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          style={{ padding: "8px", border: "1px solid #aaa", borderRadius: "4px", width: "120px" }} />
        <button onClick={handleAdd}
          style={{ padding: "8px 20px", background: "#555", color: "#fff", border: "none", cursor: "pointer", borderRadius: "4px" }}>
          Add
        </button>
      </div>

      {/* Product list */}
      {products.map((product, index) => (
        <div key={product.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #ddd", padding: "12px 16px", marginBottom: "8px", borderRadius: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <img src={product.image} alt={product.name} style={{ width: "50px", height: "60px", objectFit: "contain" }} />
            <div>
              <p style={{ color: "#1a73e8" }}>{product.name}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            {index === 0 ? (
              <>
                <button
                  onClick={() => navigate(`/admin/products/${product.id}`)}
                  className="edit-btn"
                  data-testid={`edit-${product.id}`}
                  style={{ padding: "6px 14px", background: "#555", color: "#fff", border: "none", cursor: "pointer", borderRadius: "4px" }}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="delete-btn"
                  data-testid={`delete-${product.id}`}
                  style={{ padding: "6px 14px", background: "#888", color: "#fff", border: "none", cursor: "pointer", borderRadius: "4px" }}>
                  Delete
                </button>
              </>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;