import { useEffect, useState, type JSX } from "react";
import type Product from "./types/Product";
import { Link } from "react-router-dom";
import { useTheme } from "../themeContext/useTheme";
import style from "./UserProduct.module.css";

export default function UserProducts(): JSX.Element {
  const [products, setProducts] = useState<Product[]>([]);
  const { theme, toggleTheme } = useTheme(); // используем хук для темы

  async function loadProduct(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/products");
    const arr = await res.json(); // Подожди, пока серверный ответ (res) будет преобразован из JSON в JavaScript-объект, и сохрани результат в переменную arr
    setProducts(arr);
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div
      className={`${style.container} ${
        theme === "dark" ? style.dark : style.light
      }`}
    >
      <ul>
        {products.map((product) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={product.id} // когда работаеи с List-айтемами, нужен уникальный ключ для каждой записи (спросят на собеседовании)
          >
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
            <Link to={String(product.id)}>Перейти к товару</Link>
          </li>
        ))}
      </ul>
      <button type="button" className={style.themeToggle} onClick={toggleTheme}>
        Переключить тему на (текущая: {theme})
      </button>
    </div>
  );
}
