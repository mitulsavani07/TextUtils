import './App.css';
import Navbar from './component/Navbar';
import TextUtils from './component/Text/TextUtils';
import TodoList from './component/TodoList';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from './component/Topbar';
import CaseConverter from './component/Text/CaseConverter';
import FindAndReplace from './component/Text/FindAndReplace';
import RemoveDuplicateKeywords from './component/Text/RemoveDuplicateKeywords';
import RemoveDuplicateLines from './component/Text/RemoveDuplicateLines';
import RemoveEmptyLines from './component/Text/RemoveEmptyLines';
import RemoveExtraSpaces from './component/Text/RemoveExtraSpaces';
import RemoveLineBreaks from './component/Text/RemoveLineBreaks';
import ReverseString from './component/Text/ReverseString';


function App() {
  return (
    <Router>
      <Navbar />  
      <div id="main" className='py-5 md:py-10 md:pr-7 px-4 md:pl-60 lg:pl-80 md:ml-7 duration-500 relative'>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<TextUtils heading='Text Utils' />}></Route>
          <Route exact path="/case-converter" element={<CaseConverter heading='Case Converter' />}></Route>
          <Route exact path="/find-and-replace" element={<FindAndReplace heading='Find And Replace' />}></Route>
          <Route exact path="/remove-duplicate-keywords" element={<RemoveDuplicateKeywords heading='Remove Duplicate Keywords' />}></Route>
          <Route exact path="/remove-duplicate-lines" element={<RemoveDuplicateLines heading='Remove Duplicate Lines' />}></Route>
          <Route exact path="/remove-empty-lines" element={<RemoveEmptyLines heading='Remove Empty Lines' />}></Route>
          <Route exact path="/remove-extra-spaces" element={<RemoveExtraSpaces heading='Remove Extra Spaces' />}></Route>
          <Route exact path="/remove-line-breaks" element={<RemoveLineBreaks heading='Remove Line Breaks' />}></Route>
          <Route exact path="/reverse-string" element={<ReverseString heading='Reverse a String' />}></Route>
          <Route exact path="/todolist" element={<TodoList />}></Route>
          <Route exact path="/about" element={<h2>About</h2>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
