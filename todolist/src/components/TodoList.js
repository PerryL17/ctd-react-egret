import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList(props) {
  return (
    <>
      <ul>
        {props.todoList.map((todoItem) => {
          return (
            <TodoListItem
              onRemoveTodo={props.onRemoveTodo}
              key={todoItem.id}
              todo={todoItem}
            />
          );
        })}
      </ul>
    </>
  );
}
TodoList.propTypes = {
  todoList: PropTypes.array,
};
export default TodoList;
