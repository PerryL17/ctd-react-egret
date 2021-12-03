import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem(props) {
  return (
    <li className={style.ListItem}>
      {props.todo.fields.Title}
      <span className={style.Space}></span>
      <button
        className={style.Button}
        onClick={() => props.onRemoveTodo(props.todo.id)}
        type="button"
      >
        POW
      </button>
    </li>
  );
}
TodoListItem.propTypes = {
  onRemoveTodo: PropTypes.func,
  todo: PropTypes.string,
};
export default TodoListItem;
