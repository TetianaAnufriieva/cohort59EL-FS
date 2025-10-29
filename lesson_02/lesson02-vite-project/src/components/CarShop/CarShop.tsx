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
      <Bike gears={21} brand={"Trek"} price={750.30} image={"https://images.bike24.com/media/720/i/mb/da/df/cd/madoneslr7axs-25-46688-d-primary-1727464.jpg"}/>
     
    </div>
  );
}
