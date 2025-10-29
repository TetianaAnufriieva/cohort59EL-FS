import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type Product from "./types/Product";

export default function UserProduct(): JSX.Element {
  const { productId } = useParams();
  const initialValue: Product = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const [product, setProduct] = useState<Product>(initialValue);
  useEffect(() => {
    async function loadProduct(): Promise<void> {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const obj = await res.json();
      setProduct(obj);
    }
    loadProduct();
  }, [productId]);

  return (
    <div style={{ border: "solid black 2px", margin: "10px" }} key={productId}>
      <img
        src={product.image}
        style={{ width: "200px", height: "250px" }}
        alt="product"
      />
      <div>
        <b>Название:</b> {product.title}
      </div>
      <div>
        <b>Цена:</b> {product.price} евро
      </div>
      <div>
        <b>Описание:</b> {product.description}
      </div>
      <div>
        <b>Категория:</b> {product.category}
      </div>
      <div>
        <b>Рейтинг:</b> {product.rating.rate} {product.rating.count}
      </div>
      <Link to="../userproducts">Вернуться к списку товаров</Link>
    </div>
  );
}
