import type { JSX } from "react";
import "./App.css";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import Sandwich from "./components/Sandwich/Sandwich";
import Alcohol from "./components/Alcohol/Alcohol";

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Alcohol />
      <Sandwich />
      <CarShop />
    </div>
  );
}

export default App;
