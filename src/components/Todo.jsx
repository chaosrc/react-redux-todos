import React, { useState } from "react";
import styles from "./Todo.module.scss";
export const TodoContainer = props => {
  return (
    <div className={styles.TodoContainer} {...props}>
      {props.children}
    </div>
  );
};

export const Title = props => {
  return <div className={styles.Title} {...props} />;
};

export const AddTodo = props => {
  const [todo, setTodo] = useState("");
  const handleAdd = () => {
    if (props.onAdd && todo) {
      props.onAdd(todo);
      setTodo("");
    }
  };
  return (
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} style={{fontSize: '24px'}} />{" "}
      <button onClick={handleAdd} className={styles.Add}>添加</button>
    </div>
  );
};

const TodoItem = props => {
  const handleDone = e => {
    console.log(e.target);
    props.onDone && props.onDone(e.target.checked);
  };
  return (
    <li className={`${styles.Item} ${props.isDone ? styles.ItemDone : ""}`}>
      <input
        type="checkbox"
        checked={props.isDone}
        onChange={handleDone}
      />
      {props.text}
    </li>
  );
};

export const TodoList = ({ list = [], onDone }) => {
  return (
    <ul className={styles.List}>
      {list.map((item, index) => (
        <TodoItem
          {...item}
          onDone={value => onDone({ index, value })}
          key={index}
        />
      ))}
    </ul>
  );
};
