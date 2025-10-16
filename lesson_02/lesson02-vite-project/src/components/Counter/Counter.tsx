import { useState, type JSX } from "react";
import style from "./Counter.module.css";

export default function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  // создали переменную состояния counter
  // и функцию setCounter для изменения состояния
  // useState -  это хук
  // в круглых скобках начальное состояние переменной состояния
  // хук useState  принимает начальное значение переменной состояния
  // возвращает массив в котором на первом месте переменная состояния
  // а на втором месте функция  сетер
  // Хук - это функция которая используется только внутри компонента
  // В жизненном цикле компонента React есть 3 фазы:
  // Сборка (mounting)
  // Обновление (updating)
  // Разборка (unmounting)

  function handlePlus(): void {
    setCounter(counter + 100);
  }

  function handleMinus(): void {
    setCounter(counter - 1);
  }

  function handleReset(): void {
    setCounter(0);
  }
  // Добавить кнопку для добавления денег сразу на 100 евро
  // Добавить кнопку для очистки счетчика в 0
  return (
    <div>
      <h1>Добавление денег</h1>
      <img
        src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg"
        alt=""
      ></img>
      <div className={`${style.container} ${style.counterClass}`}>
        <button className={style.btn} type="button" onClick={handlePlus}>
          Добавить деньги на счет
        </button>
        <span style={{ color: "red" }}> {counter} €</span>
        <button className={style.btn} type="button" onClick={handleMinus}>
          Cнять деньги со счета
        </button>
        <button className={style.btn} type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
