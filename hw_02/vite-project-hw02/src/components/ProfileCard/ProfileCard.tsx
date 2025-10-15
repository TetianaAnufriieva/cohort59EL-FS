import type { JSX } from "react";
import style from "./ProfileCard.module.css";

interface Props {
  avatarURL: string;
  firstName: string;
  lastName: string;
  job: string;
  hobby: string;
}

export default function ProfileCard(props: Props): JSX.Element {
  const { avatarURL, firstName, lastName, job, hobby } = props;
  return (
    <div className={style.card}>
      <img className={style.imgCard} src={avatarURL} alt="AvatarLogo" />
      <div>
        <h3>{firstName} {lastName}</h3>
        <p>
          <span className={style.title}> Род деятельности:</span> {job} <br />
          <span className={style.title}> Хобби:</span> {hobby} <br />
        </p>
      </div>
    </div>
  );
}
