import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./OnlineCourseRegistration.module.css";
import * as Yup from "yup";

interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
  course: string;
  levelTraining: string;
  comment: string;
  consent: boolean;
}

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .required("Обязательное поле"),
  lastName: Yup.string()
    .min(2, "Фамилия должна содержать минимум 2 символа")
    .required("Обязательное поле"),
  age: Yup.number()
    .typeError("Введите число")
    .min(16, "Возраст должен быть не менее 16 лет")
    .max(80, "Возраст не может превышать 80 лет")
    .required("Обязательное поле"),
  course: Yup.string()
    .oneOf(["Frontend", "Backend", "Fullstack"], "Выберите курс")
    .required("Обязательное поле"),
  levelTraining: Yup.string()
    .oneOf(["Новичок", "Средний", "Продвинутый"], "Выберите уровень подготовки")
    .required("Обязательное поле"),
  comment: Yup.string().max(
    300,
    "Комментарий не должен превышать 300 символов"
  ),
  consent: Yup.boolean()
    .oneOf([true], "Необходимо согласие на обработку данных")
    .required("Подтвердите согласие"),
});

export default function OnlineCourseRegistration() {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    age: 0,
    course: "",
    levelTraining: "",
    comment: "",
    consent: false,
  };

  const handleSubmit = (values: FormValues) => {
    console.log("Введённые данные: ", values);
    alert("Спасибо! Регистрация прошла успешно");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.formContainer}>
        <Field
          className={styles.inputField}
          name="firstName"
          placeholder="Имя"
        />
        <ErrorMessage
          name="firstName"
          component="div"
          className={styles.errorMessage}
        />

        <Field
          className={styles.inputField}
          name="lastName"
          placeholder="Фамилия"
        />
        <ErrorMessage
          name="lastName"
          component="div"
          className={styles.errorMessage}
        />

        <Field
          className={styles.inputField}
          type="email"
          name="email"
          placeholder="Email"
        />
        <ErrorMessage
          name="email"
          component="div"
          className={styles.errorMessage}
        />

        <Field
          className={styles.inputField}
          type="number"
          name="age"
          placeholder="Возраст"
        />
        <ErrorMessage
          name="age"
          component="div"
          className={styles.errorMessage}
        />

        <Field as="select" className={styles.inputField} name="course">
          <option value="">Выберите курс</option>
          <option value="Frontend">Frontend (React)</option>
          <option value="Backend">Backend (Java)</option>
          <option value="Fullstack">Fullstack</option>
        </Field>
        <ErrorMessage
          name="course"
          component="div"
          className={styles.errorMessage}
        />

        <div className={styles.radioGroup} role="group">
          <label>
            <Field type="radio" name="levelTraining" value="Новичок" />
            Новичок
          </label>
          <label>
            <Field type="radio" name="levelTraining" value="Средний" />
            Средний
          </label>
          <label>
            <Field type="radio" name="levelTraining" value="Продвинутый" />
            Продвинутый
          </label>
        </div>
        <ErrorMessage
          name="levelTraining"
          component="div"
          className={styles.errorMessage}
        />

        <Field
          as="textarea"
          className={styles.inputField}
          name="comment"
          placeholder="Комментарий"
        />
        <ErrorMessage
          name="comment"
          component="div"
          className={styles.errorMessage}
        />

        <label className={styles.checkboxLabel}>
          <Field type="checkbox" name="consent" />
          Согласие на обработку персональных данных
        </label>
        <ErrorMessage
          name="consent"
          component="div"
          className={styles.errorMessage}
        />

        <button type="submit" className={styles.submitButton}>
          Отправить
        </button>
      </Form>
    </Formik>
  );
}
