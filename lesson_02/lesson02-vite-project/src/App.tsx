import type { JSX } from "react";
import "./App.css";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import Sandwich from "./components/Sandwich/Sandwich";
import Alcohol from "./components/Alcohol/Alcohol";
import Playground from "./components/Playground/Playground";
import Test1 from "./components/RandomDog/RandomDog";
import RandomDog from "./components/RandomDog/RandomDog";
import UsersPage from "./components/UsersPage/UsersPage";

function App(): JSX.Element {
  return (
    <div>
      <UsersPage />
      <RandomDog />
      <Playground />
      <Counter />
      <Alcohol />
      <Sandwich />
      <CarShop />
    </div>
  );
}

export default App;
