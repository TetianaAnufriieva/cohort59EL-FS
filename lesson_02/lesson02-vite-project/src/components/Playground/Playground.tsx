import { useEffect, useState, type JSX } from "react";

export default function Playground(): JSX.Element {
  const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
  const [numberOfBirds, setNumberOfBirds] = useState<number>(0);

  function handleAddDog(): void {
    setNumberOfDogs(numberOfDogs + 1);
  }

  function handleAddBirds(): void {
    setNumberOfBirds(numberOfBirds + 10);
  }

  // useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опциональный параметр -
  // массив зависимостей

  // Ex.1 - пустой массив зависимостей
  useEffect(() => {
    console.log("useEffect 1 - только при первой отрисовке === mount");
  }, []);

  // Ex.2 - без массив зависимостей
  useEffect(() => {
    console.log(
      "useEffect 2 - при первой отрисовке (mount), а также при любых изменениях переменной состояния"
    );
  });

  // Ex.3 - c указанием зависимостей
  useEffect(() => {
    console.log(
      "useEffect 3 - при первой отрисовке (mount), а также при изменении переменной состояния, в нашем случае - numberOfDogs"
    );
  }, [numberOfDogs]);

  return (
    <div>
      <h1>Playground</h1>
      <p>Number of dogs: {numberOfDogs}</p>
      <p>Number of birds: {numberOfBirds}</p>
      <button type="button" onClick={handleAddDog}>
        Let the dog in
      </button>
      <button type="button" onClick={handleAddBirds}>
        New bird
      </button>
    </div>
  );
}
