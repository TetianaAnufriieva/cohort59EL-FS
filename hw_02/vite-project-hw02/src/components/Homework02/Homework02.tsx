import type { JSX } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import style from "./Homework02.module.css";

export default function Homework02(): JSX.Element {
  return (
    <div>
      <h2>Карточки пользователей</h2>
      <div className={style.listCards}>
        <ProfileCard
          avatarURL={"https://i.pravatar.cc/400?img=58"}
          firstName={"Алексей"}
          lastName={"Новиков"}
          job={"Фотограф"}
          hobby={"Путешествия и уличная фотография"}
        />
        <ProfileCard
          avatarURL={"https://i.pravatar.cc/400?img=59"}
          firstName={"Дмитрий"}
          lastName={"Соколов"}
          job={"Руководитель проектов"}
          hobby={"Чтение бизнес-книг и походы"}
        />
        <ProfileCard
          avatarURL={"https://i.pravatar.cc/400?img=44"}
          firstName={"Анна"}
          lastName={"Кузнецова"}
          job={"Швея"}
          hobby={"Дизайн одежды и вышивка"}
        />
      </div>
    </div>
  );
}
