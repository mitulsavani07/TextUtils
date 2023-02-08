import React, { useState, useEffect } from 'react'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedIndex === null) {
      setTodos([...todos, inputValue]);
    } else {
      setTodos(
        todos.map((todo, index) => {
          if (index === selectedIndex) {
            return inputValue;
          }
          return todo;
        })
      );
      setSelectedIndex(null);
    }
    setInputValue("");
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setSelectedIndex(index);
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className='container mx-auto px-4'>
        <form onSubmit={handleSubmit} className="mb-5">
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            className="bg-blue-500 text-white p-2 rounded mt-2"
            type="submit"
          >
            {selectedIndex === null ? "Add Todo" : "Update Todo"}
          </button>
        </form>
        <ul className="list-none">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="border border-gray-400 p-2 my-2 flex justify-between"
            >
              <span>{todo}</span>
              <div>
                <button
                  className="bg-yellow-500 text-white p-2 rounded mr-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default TodoList;
