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
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") {
      return;
    }
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
    setSelectedItems(selectedItems.filter((i) => i !== index));
  };

  const handleSelectAll = () => {
    if (selectedItems.length === todos.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(todos.map((_, index) => index));
    }
  };

  const handleDeleteSelected = () => {
    setTodos(todos.filter((_, index) => !selectedItems.includes(index)));
    setSelectedItems([]);
  };

  return (
    <>
      <div className='max-w-3xl w-full mx-auto my-5'>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>Todo List</h1>
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
        <div className="flex justify-between items-center">
          <div>
            <button
              className="py-2 px-4 bg-primary text-white rounded"
              onClick={handleSelectAll}
            >
              {selectedItems.length === todos.length ? "Deselect All" : "Select All"}
            </button>
            {selectedItems.length > 0 && (
              <button
                className="ml-2 bg-red-600 text-white px-4 py-2 rounded text-sm"
                onClick={handleDeleteSelected}
              >
                Delete Selected
              </button>
            )}
          </div>
          <span>{todos.length} items</span>
        </div>
        <ul className="list-none mt-5">
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
