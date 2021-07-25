import { useState } from "react";
import SingleTodo from "./components/SingleTodo";
import { todoData } from "./todoData";

interface TodoList {
  title: string;
  isComplete: boolean;
  id: number;
}

function App() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoList[]>(todoData);

  const handleAddTodo = (): void => {
    setTodoList([
      ...todoList,
      {
        title: todoTitle,
        id: todoList.length + 1,
        isComplete: false,
      },
    ]);
    setTodoTitle("");
  };

  const handleDeleteTodo = (id: number): void => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const handleUpdateTodo = (id: number): void => {
    const index = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = [...todoList];
    const isComplete = todoList[index].isComplete;
    newTodoList[index].isComplete = !isComplete;
    setTodoList(newTodoList);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="w-full md:w-1/2 lg:w-1/3 shadow-sm p-4 bg-white mx-4 rounded-lg">
        <h2 className="text-2xl font-bold mt-4 text-gray-500">Todo List</h2>
        <div className="flex my-4 justify-center">
          <input
            type="text"
            onChange={(e) => setTodoTitle(e.target.value)}
            placeholder="What to do?"
            value={todoTitle}
            name="todo"
            className="placeholder-gray-500 placeholder-opacity-100 px-4 py-2 w-3/4 border border-gray-900 rounded-l-lg"
          />
          <button
            className="px-6 py-2 bg-gray-900 text-white border border-gray-900 text-xs uppercase font-semibold tracking-wide"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <div>
          {todoList.map((todo) => (
            <SingleTodo
              todo={todo}
              key={todo.id}
              handleDeleteTodo={handleDeleteTodo}
              handleUpdateTodo={handleUpdateTodo}
            />
          ))}
        </div>
      </div>
      <h1 className="text-md text-gray-500 mt-4 font-semibold">
        created by 
        <span className="bg-blue-500 text-white py-1 px-3 rounded-lg">
        SAGOR
        </span>
      </h1>
    </div>
  );
}

export default App;
