import { useEffect, useState, type JSX } from "react";
import type User from "./types/User";

export default function UsersPage(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);

  async function loadUsers(): Promise<void> {
    const res = await fetch("https://fakestoreapi.com/users");
    const arr = await res.json();
    setUsers(arr);
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li
            style={{ border: "solid black 2px", margin: "10px" }}
            key={user.id} // когда работаеи с List-айтемами, нужен уникальный ключ для каждой записи (спросят на собеседовании)
          >
            <div>Ник: {user.username}</div>
            <div>Имя, Фамилия: {user.name.firstname} {user.name.lastname}</div>
            <div>Телефон: {user.phone}</div>
            <div>Эмейл: {user.email}</div>
            <div>ZIP-код: {user.address.zipcode}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
