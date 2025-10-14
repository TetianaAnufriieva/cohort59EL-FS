import type { JSX } from "react";
import style from "./Bike.module.css";

interface Props {
  gears: number;
  brand: string;
  price: number;
  image: string;
}

export default function Bike(props: Props): JSX.Element {
  const { gears, brand, price, image } = props; // сделали деструктиризацию
  return (
    <div>
      Brand: {brand}
      Gears: {gears}
      Price: {price}
      <img className={style.image} src={image} alt="" />
    </div>
  );
}
