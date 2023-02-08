import './App.css';
import Navbar from './component/Navbar';
import TextUtils from './component/TextUtils';
import TodoList from './component/TodoList';

function App() {
  return (
    <>
      <Navbar/>
      <TextUtils heading='Text Utils'/>
      <TodoList />
    </>
  );
}

export default App;
