import React from "react";
import { connect } from "react-redux";
import { TODO_ADD, TODO_DONE } from "./action";
import { TodoContainer, Title, AddTodo, TodoList } from "../components/Todo";
import styles from './TodoApp.module.scss';

export const Todo = props => {
  return (
    <TodoContainer>
      <Title>TODOS</Title>
      <div className={styles.todoContent}>
        <AddTodo onAdd={props.onAdd} />
        <TodoList list={props.list} onDone={props.onDone} />
      </div>
    </TodoContainer>
  );
};
const mapStateToPorps = state => ({ list: state.todos });
const mapDispatchToProps = dispatch => ({
  onAdd: text => dispatch({ type: TODO_ADD, text }),
  onDone: ({ index, value }) => dispatch({ type: TODO_DONE, index, value })
});
export const TodoApp = connect(
  mapStateToPorps,
  mapDispatchToProps
)(Todo);
