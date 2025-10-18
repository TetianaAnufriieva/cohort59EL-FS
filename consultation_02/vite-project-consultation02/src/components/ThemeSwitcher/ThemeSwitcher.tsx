import { useState, type JSX } from "react";
import style from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher(): JSX.Element {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function changeTheme(): void {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  const themeStyle =
    theme === "light"
      ? { backgroundColor: "white", color: "black" }
      : { backgroundColor: "black", color: "white" };

  return (
    <div style={themeStyle} className={style.mainContainer}>
      <div>
        <h1>Текущая тема: {theme}</h1>
        <button className={style.btn} type="button" onClick={changeTheme}>
          Сменить тему
        </button>
      </div>
    </div>
  );
}
