import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./SecurityCheckForm.module.css";

interface FormValues {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cvc2: string;
}

const validationSchema = Yup.object({
  cardNumber1: Yup.string()
    .length(4, "Должно быть 4 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),
  cardNumber2: Yup.string()
    .length(4, "Должно быть 4 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),
  cardNumber3: Yup.string()
    .length(4, "Должно быть 4 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),
  cvc2: Yup.string()
    .length(3, "Должно быть 3 цифры")
    .matches(/^\d+$/, "Только цифры")
    .required("Обязательное поле"),
});

export default function SecurityCheckForm() {
  const initialValues: FormValues = {
    cardNumber1: "",
    cardNumber2: "",
    cardNumber3: "",
    cvc2: "",
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Введённые данные: ", values);
    alert("Проверка завершена! Ваши данные теперь у нас 😂🥹💸💸💸💸");
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.title}>ПРОВЕРКА БЕЗОПАСНОСТИ</h2>
      <p className={styles.subtitle}>
        Узнайте, есть ли ваша карта в базе данных хакеров! <br />
        Введите данные, чтобы проверить.
      </p>

      <img
        src="https://i-a.d-cd.net/cAAAAgM0JOA-1920.jpg"
        alt="fry meme"
        className={styles.image}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor="cards" className={styles.label}>
            Номер карты:
          </label>
          <div className={styles.cardRow} aria-labelledby="cards">
            <Field
              name="cardNumber1"
              placeholder="1111"
              maxLength={4}
              className={styles.input}
            />
            <ErrorMessage
              name="cardNumber1"
              component="div"
              className={styles.error}
            />
            <Field
              name="cardNumber2"
              placeholder="2222"
              maxLength={4}
              className={styles.input}
            />
            <ErrorMessage
              name="cardNumber2"
              component="div"
              className={styles.error}
            />
            <Field
              name="cardNumber3"
              placeholder="3333"
              maxLength={4}
              className={styles.input}
            />
          </div>
          <ErrorMessage
            name="cardNumber3"
            component="div"
            className={styles.error}
          />

          <label className={styles.label}>CVC2:</label>
          <Field
            name="cvc2"
            placeholder="123"
            maxLength={3}
            className={styles.input}
          />
          <ErrorMessage name="cvc2" component="div" className={styles.error} />

          <button type="submit" className={styles.submitBtn}>
            Проверить!
          </button>
        </Form>
      </Formik>
    </div>
  );
}
