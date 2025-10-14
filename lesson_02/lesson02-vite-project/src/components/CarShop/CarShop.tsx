import type { JSX } from "react";
import Car from "../Car/Car";
import Bike from "../Bike/Bike";

export default function CarShop(): JSX.Element {
  return (
    <div>
      <h1>Car Shop</h1>
      <h2>Cars</h2>
      {/* Вызываем */}
      <Car brand={"BMW7"} color={"purple"} image={""} />
      <Car brand={"FordFocus"} color={"red"} image={""} />
      <Bike gears={21} brand={"Trek"} price={750.30} image={"https://sportishka.com/uploads/posts/2022-04/1650967338_37-sportishka-com-p-chopperi-kharlei-devidson-modelnii-ryad-kr-39.jpg"}/>
     
    </div>
  );
}
