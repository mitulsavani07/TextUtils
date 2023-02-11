import React, { useState, useEffect } from 'react'

const getLocalItems = () => {
  let list = localStorage.getItem('todos');
  if(list){
    return JSON.parse(localStorage.getItem('todos'));
  }else{
    return [];
  }
}

const TodoList = () => {
  const [todos, setTodos] = useState(getLocalItems);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  //   setTodos(storedTodos);
  // }, []);

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
      <div className='max-w-3xl w-full mx-auto px-4 my-5'>
        <form onSubmit={handleSubmit} className="mb-5 flex">
          <input
            className="border-gray-400 px-4 py-2 w-full rounded-lg mr-4 drop-shadow-primary dark:drop-shadow-none"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            className="btn whitespace-nowrap m-[0!important]"
            type="submit"
          >
            {selectedIndex === null ? "Add Todo" : "Update Todo"}
          </button>
        </form>
        <ul className="list-none">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="rounded-lg py-2 px-4 my-2 flex items-center text-base drop-shadow-primary dark:drop-shadow-none bg-white dark:bg-[#292A33] justify-between"
            >
              <span>{todo}</span>
              <div>
                <button
                  className="bg-[#FFBD3E] text-white px-4 py-2 rounded mr-2 text-sm"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded text-sm"
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
