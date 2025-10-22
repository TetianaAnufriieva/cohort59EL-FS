import { useEffect, useState, type JSX } from "react";
import type Uni from "./types/Uni";
import style from "./University.module.css";
import { v4 as uuid4 } from "uuid";

export default function University(): JSX.Element {
  const [uni, setUni] = useState<Uni[]>([]);

  async function loadUni(): Promise<void> {
    const res = await fetch(
      "http://universities.hipolabs.com/search?country=Kazakhstan"
    );
    const arr = await res.json();
    setUni(arr);
  }

  useEffect(() => {
    loadUni();
  }, []);

  return (
    <div>
      <ul>
        {uni.map((el) => (
          <li key={uuid4()} className={style.item}>
            <div>
              Название университета:{el.name} ({el.alpha_two_code})
            </div>
            <div>Страна: {el.country}</div>
            <div>Web_page: {el.web_pages}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
