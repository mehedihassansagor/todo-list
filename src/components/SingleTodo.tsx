interface IProps {
  todo: { title: string; isComplete: boolean; id: number };
  handleDeleteTodo: (id: number) => void;
  handleUpdateTodo: (id: number) => void;
}

const SingleTodo = ({
  todo,
  handleDeleteTodo,
  handleUpdateTodo,
}: IProps): JSX.Element => {
  return (
    <div className="flex justify-between my-2 cursor-pointer p-2 items-center">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-1 h-4 w-4 checked:bg-blue-600 checked:border-transparent cursor-pointer focus:outline-none focus:border-transparent"
          checked={todo.isComplete}
          onChange={() => handleUpdateTodo(todo.id)}
        />
        <h1
          className={`text-md font-medium text-gray-500 ${
            todo.isComplete ? "line-through" : ""
          }`}
        >
          {todo.title}
        </h1>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-500"
        onClick={() => handleDeleteTodo(todo.id)}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  );
};

export default SingleTodo;
