import "./../styles/App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";



const initialProducts = [
  {
    id: 1,
    name: "Samsung Galaxy S8 64GB Black",
    price: 16303,
    description:
      "Samsung Galaxy S8 64GB Black smartphone with stunning display and powerful performance.",
    image: "https://hotline.ua/img/tx/144/144618870_s265.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S9 64GB Black",
    price: 20888,
    description:
      "Samsung Galaxy S9 64GB Black with improved camera and performance.",
    image: "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s9-1.jpg",
  },
  {
    id: 3,
    name: "Samsung Galaxy S8+ 64GB Black",
    price: 18701,
    description:
      "Samsung Galaxy S8+ with larger screen and premium build quality.",
    image:
      "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s8plus-1.jpg",
  },
  {
    id: 4,
    name: "Samsung Galaxy S9+ 64GB Black",
    price: 49999,
    description:
      "Samsung Galaxy S9+ flagship with dual camera and Snapdragon 845.",
    image:
      "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s9plus-1.jpg",
  },
  {
    id: 5,
    name: "Samsung Galaxy Note 9 6/128GB Midnight Black",
    price: 29768,
    description: "Samsung Galaxy Note 9 with S Pen and massive battery.",
    image:
      "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note-9-1.jpg",
  },
  {
    id: 6,
    name: "Samsung Galaxy Note 8 64GB Black",
    price: 22171,
    description:
      "Samsung Galaxy Note 8 with dual camera and S Pen functionality.",
    image:
      "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note-8-1.jpg",
  },
  {
    id: 7,
    name: "Samsung Galaxy A50 64GB Black",
    price: 15999,
    description: "Samsung Galaxy A50 with triple camera and AMOLED display.",
    image: "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a50-1.jpg",
  },
  {
    id: 8,
    name: "Samsung Galaxy M30 64GB Black",
    price: 12999,
    description: "Samsung Galaxy M30 with massive 5000mAh battery.",
    image:
      "https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m30-2019-1.jpg",
  },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  return (
    <div>
      <BrowserRouter>
        <nav
          style={{
            background: "#f0f0f0",
            padding: "12px 24px",
            display: "flex",
            gap: "24px",
          }}
        >
          <Link to="/">HOME</Link>
          <Link to="/admin">ADMIN</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route
            path="/products/:id"
            element={<ProductDetails products={products} />}
          />
          <Route
            path="/admin"
            element={
              <AdminPanel products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/admin/products/:id"
            element={
              <AdminPanel products={products} setProducts={setProducts} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
