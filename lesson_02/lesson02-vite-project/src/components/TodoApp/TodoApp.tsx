import { useState } from "react";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import styles from "./TodoApp.module.css";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}
//Определяем интерфейс Task, который описывает объект задачи:
// id: number — уникальный идентификатор задачи.
// text: string — текст задачи.
// completed: boolean — статус выполнения.

const validationSchema = Yup.object({
  text: Yup.string()
    .trim()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Обязательное поле. Введите задачу"),
});

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");
  //tasks (массив Task[]) — список задач.
  // newTask (строка) — содержит текст новой задачи.
  // setTasks и setNewTask — функции для обновления состояний

const addTask = (text: string) => {
  const trimmed = text.trim();
  if (!trimmed) return;
  const newItem: Task = { id: Date.now(), text: trimmed, completed: false };
  setTasks((prev) => [...prev, newItem]);
}
  // Убираем пробелы.
  // Если строка пустая — выходим (return).
  // Создаём объект newItem типа Task.
  // Добавляем его в массив tasks через setTasks (распаковываем старый массив и добавляем новую задачу в конец).

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  //Перебираем tasks с map(), если task.id совпадает с id, меняем completed (true -> false и наоборот).
  // Остальные задачи остаются без изменений.

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //Функция deleteTask работает следующим образом:

  // Принимает id задачи, которую нужно удалить.
  // Вызывает setTasks, обновляя состояние списка задач.
  // Использует filter(), чтобы создать новый массив,
  //  исключая задачу с переданным id:
  // tasks.filter(task => task.id !== id) — оставляет только те задачи,
  //  у которых id не равен переданному id.
  // В результате создаётся новый массив без удалённой задачи.
  // Обновляет состояние (setTasks), заменяя старый массив новым,
  //  в котором нет удалённой задачи.

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>📝To-Do List</h1>

      <Formik
        initialValues={{ text: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addTask(values.text);
          setNewTask(""); // сбрасываем локальный стейт
          resetForm(); // сбрасываем Formik
        }}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form className={styles.form}>
            <div className={styles.inputContainer}>
              <Field
                type="text"
                name="text"
                placeholder="Add a new task"
                className={styles.input}
                value={values.text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleChange(e);
                  setNewTask(e.target.value);
                }}
              />
              <button type="submit" className={styles.addButton}>
                Add
              </button>
            </div>

            {errors.text && touched.text && (
              <div className={styles.error}>{errors.text}</div>
            )}

            <ul className={styles.list}>
              {tasks.length === 0 ? (
                <p className={styles.empty}>Список пуст</p>
              ) : (
                tasks.map((task) => (
                  <li key={task.id} className={styles.taskItem}>
                    <span
                      className={`${styles.taskText} ${
                        task.completed ? styles.completed : ""
                      }`}
                      onClick={() => toggleTask(task.id)}
                    >
                      {task.text}
                    </span>
                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      className={styles.deleteButton}
                    >
                      ✕
                    </button>
                  </li>
                ))
              )}
            </ul>
          </Form>
        )}
      </Formik>
    </div>
  );
}
