import type { JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayOut from "./components/LayOut/LayOut";
import Home from "./components/Home/Home";
import Alcohol from "./components/Alcohol/Alcohol";
import CarShop from "./components/CarShop/CarShop";
import Counter from "./components/Counter/Counter";
import UsersPage from "./components/UsersPage/UsersPage";
import UserPage from "./components/UsersPage/UserPage";
import Playground from "./components/Playground/Playground";
import { ThemeSwitcher } from "./components/ThemeSwitcher/ThemeSwitcher";
import Feedback from "./components/Feedback/Feedback";
import { InputMirror } from "./components/InputMirror/InputMirror";
import RandomDog from "./components/RandomDog/RandomDog";
import Sandwich from "./components/Sandwich/Sandwich";
import UserProduct from "./components/UserProducts/UserProduct";
import UserProducts from "./components/UserProducts/UserProducts";


function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="alcohol" element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
        <Route path="counter" element={<Counter />} />
        <Route path="home" element={<Home />} />
        <Route path="userspage" element={<UsersPage />} />
        <Route path="/userspage/:userId" element={<UserPage />} />

        <Route path="feedback" element={<Feedback />} />
        <Route path="inputmirror" element={<InputMirror />} />
        <Route path="playground" element={<Playground />} />
        <Route path="randomdog" element={<RandomDog />} />
        <Route path="sandwich" element={<Sandwich />} />
        <Route path="themeswitcher" element={<ThemeSwitcher />} />

        <Route path="userproducts" element={<UserProducts />} />
        <Route path="/userproducts/:productId" element={<UserProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
