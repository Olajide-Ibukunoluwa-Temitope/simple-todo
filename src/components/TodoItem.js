import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#d35e0f",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const users = [
    {
      id: uuidv4(),
      name: "Jone Joe",
    },
    {
      id: uuidv4(),
      name: "Janet Joe",
    },
    {
      id: uuidv4(),
      name: "Steve Joe",
    },
  ];

  const { completed, id, title, user: assignedUser } = props.todo;
  console.log("selectedTask", props.selectedTask, id);
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => props.handleChangeProps(id)}
      />
      <span style={completed ? completedStyle : null}>{title}</span>

      <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
      <div className="assign-user">
        {assignedUser.id ? (
          <div
            className="assigned-user-logo"
            onClick={() => props.handleAssignUserTrigger(id)}
          >
            <span>{assignedUser.name[0]}</span>
          </div>
        ) : (
          <i
            className="ri-user-add-line "
            onClick={() => props.handleAssignUserTrigger(id)}
          ></i>
        )}

        {props.selectedTask === id && props.isOpen && (
          <div className="user-list-container">
            <ul>
              {users.map((user) => {
                return (
                  <li
                    key={user.id}
                    className="user-list"
                    onClick={() => props.handleAssignUser(user, id)}
                  >
                    {user.name}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
