import style from "./MyButton.module.css";

interface MyButtonProps {
  buttonName: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function MyButton({
  buttonName,
  onClick,
  type = "button",
}: MyButtonProps) {
  return (
    <button
      className={style.button_component}
      onClick={onClick}
      type={type}
    >{buttonName}</button>
  );
}
