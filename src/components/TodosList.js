import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <ul className="todo-list-container">
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          handleAssignUserTrigger={props.handleAssignUserTrigger}
          selectedTask={props.selectedTask}
          isOpen={props.isOpen}
          handleAssignUser={props.handleAssignUser}
          handleClearAssignee={props.handleClearAssignee}
          setIsOpen={props.setIsOpen}
        />
      ))}
    </ul>
  );
};

export default TodosList;
