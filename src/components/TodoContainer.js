import React, { useState } from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const [state, setState] = useState({
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
        user: { id: "", name: "" },
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
        user: { id: "", name: "" },
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
        user: { id: "", name: "" },
      },
    ],
  });
  const [selectedTask, setSelectTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleAssignUserTrigger = (id) => {
    setSelectTask(id);
    setIsOpen((prev) => (selectedTask === id ? !prev : true));
  };

  const handleAssignUser = (user, taskId) => {
    const todosCopy = [...state.todos];
    const selectedTodo = todosCopy.find((todo) => todo.id === taskId);

    if (selectedTodo) {
      selectedTodo.user = { id: user.id, name: user.name };
    }

    setState({
      todos: todosCopy,
    });
    setIsOpen(false);
  };

  const handleClearAssignee = (taskId) => {
    const todosCopy = [...state.todos];
    const selectedTodo = todosCopy.find((todo) => todo.id === taskId);

    if (selectedTodo) {
      selectedTodo.user = { id: "", name: "" };
    }

    setState({
      todos: todosCopy,
    });
    setIsOpen(false);
  };

  const handleChange = (id) => {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  const delTodo = (id) => {
    setState({
      todos: [
        ...state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
      user: { id: "", name: "" },
    };
    setState({
      todos: [...state.todos, newTodo],
    });
  };

  return (
    <div className="container">
      <Header />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={state.todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
        handleAssignUserTrigger={handleAssignUserTrigger}
        selectedTask={selectedTask}
        isOpen={isOpen}
        handleAssignUser={handleAssignUser}
        handleClearAssignee={handleClearAssignee}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default TodoContainer;
