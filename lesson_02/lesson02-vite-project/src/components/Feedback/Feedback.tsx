import { useState, type JSX } from "react";
import MyButton from "../MyButton/MyButton";
import style from "./Feedback.module.css";

export default function Feedback(): JSX.Element {
  const [feedbackLike, setFeedbackLike] = useState(0);
  const [feedbackDislike, setFeedbackDislike] = useState(0);

  function handleFeedbackLike(): void {
    setFeedbackLike(feedbackLike + 1);
  }

  function handleFeedbackDislike(): void {
    setFeedbackDislike(feedbackDislike + 1);
  }

  function handleFeedbackReset(): void {
    setFeedbackLike(0);
    setFeedbackDislike(0);
  }
  return (
    <div>
      <h1>Создание компонента Feedback</h1>
      <div className={style.mainContainer}>
        <div>
          {feedbackLike}{" "}
          <MyButton
            buttonName={"Like 👍"}
            onClick={handleFeedbackLike}
            type={"button"}
          />
        </div>
        <div>
          <MyButton
            buttonName={"Reset Results"}
            onClick={handleFeedbackReset}
            type={"button"}
          />
        </div>
        <div>
          <MyButton
            buttonName={"Dislike 👎"}
            onClick={handleFeedbackDislike}
            type={"button"}
          />{" "}
          {feedbackDislike}
        </div>
      </div>
    </div>
  );
}
