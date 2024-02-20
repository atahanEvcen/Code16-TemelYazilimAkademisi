import toDoList from "../../assets/toDoList.svg";
import styles from "./header.module.css";
import { useState } from "react";

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={toDoList} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Yeni Görev Ekle"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>Oluştur. </button>
      </form>
    </header>
  );
}
