import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function Sandwich(): JSX.Element {
  const dispatch = useDispatch();
  function handleAddBread(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addBread", payload: "🍞" });
  }
  function handleAddCheese(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addCheese", payload: "🧀" });
  }
  function handleAddBacon(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addBacon", payload: "🥓" });
  }
  function handleAddSalat(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/addSalat", payload: "🥬" });
  }

  function handleReset(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({ type: "sandwich/reset" });
  }
  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  // useSelector - функция для получения значения централизованного состояния
  return (
    <div>
      {sandwich}
      <button type="button" onClick={handleAddBread}>
        Bread
      </button>
      <button type="button" onClick={handleAddCheese}>
        Cheese
      </button>
      <button type="button" onClick={handleAddBacon}>
        Bacon
      </button>
      <button type="button" onClick={handleAddSalat}>
        Salat
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
