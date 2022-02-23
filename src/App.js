import { useEffect, useState } from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    fetch("https://api.npoint.io/d8c0635b132f2141a5ed")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
      });
  }, []);

  return (
    <div className="d-flex">
      <Section1
        products={products}
        setSelectedProduct={setSelectedProduct}
        setShowImage={setShowImage}
      />
      <Section2 selectedProduct={selectedProduct} setShowImage={setShowImage} />
      <Section3 imageUrl={showImage ? selectedProduct.imgUrl : null} />
    </div>
  );
}
