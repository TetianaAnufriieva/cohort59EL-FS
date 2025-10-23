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
// import CarShop from "./components/CarShop/CarShop";
// import Counter from "./components/Counter/Counter";
// import Sandwich from "./components/Sandwich/Sandwich";
// import Alcohol from "./components/Alcohol/Alcohol";
// import Playground from "./components/Playground/Playground";
// import Test1 from "./components/RandomDog/RandomDog";
// import RandomDog from "./components/RandomDog/RandomDog";
// import UsersPage from "./components/UsersPage/UsersPage";

function App(): JSX.Element {
  return (
    // <div>
    //   <UsersPage />
    //   <RandomDog />
    //   <Playground />
    //   <Counter />
    //   <Alcohol />
    //   <Sandwich />
    //   <CarShop />
    // </div>

    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path="alcohol" element={<Alcohol />} />
        <Route path="carshop" element={<CarShop />} />
        <Route path="counter" element={<Counter />} />
        <Route path="home" element={<Home />} />
        <Route path="userspage" element={<UsersPage />} />
        <Route path="/userspage/:userId" element={<UserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
