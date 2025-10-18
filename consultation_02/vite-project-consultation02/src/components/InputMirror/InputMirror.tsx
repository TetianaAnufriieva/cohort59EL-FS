import { useState, type JSX } from "react";

export default function InputMirror(): JSX.Element {
  const [text, setText] = useState<string>("");

function handleChange(event):void {
    setText(event.target.value);
  }
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Введите текст..."
        style={{ padding: "5px", fontSize: "48px" }}
      />
      <h1>Вы ввели: {text}</h1>
    </div>
  );
}
