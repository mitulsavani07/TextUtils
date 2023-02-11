import './App.css';
import Navbar from './component/Navbar';
import TextUtils from './component/TextUtils';
import TodoList from './component/TodoList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from './component/Topbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div id="main" className='py-5 md:py-10 md:pr-7 px-4 md:pl-60 lg:pl-80 md:ml-7 duration-500'>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<TextUtils heading='Text Utils' />}></Route>
          <Route exact path="/todolist" element={<TodoList />}></Route>
          <Route exact path="/about" element={<h2>About</h2>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
