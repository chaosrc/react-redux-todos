import React from "react";
import { connect } from "react-redux";
import { TODO_ADD, TODO_DONE } from "./action";
import { TodoContainer, Title, AddTodo, TodoList } from "../components/Todo";

export const Todo = props => {
  return (
    <TodoContainer>
      <Title>TODOS</Title>
      <AddTodo onAdd={props.onAdd} />
      <TodoList list={props.list} onDone={props.onDone} />
    </TodoContainer>
  );
};
const mapStateToPorps = state => ({ list: state.todos });
const mapDispatchToProps = dispatch => ({
  onAdd: text => dispatch({ type: TODO_ADD, text }),
  onDone: ({index, value}) => dispatch({ type: TODO_DONE, index, value })
});
export const TodoApp = connect(
  mapStateToPorps,
  mapDispatchToProps
)(Todo);
