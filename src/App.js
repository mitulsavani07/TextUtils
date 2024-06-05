import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
// import TextUtils from './component/Text/TextUtils';
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
import TextCounter from './component/Text/TextCounter';
import CssFormatter from './component/Formatter/CssFormatter';
import HtmlFormatter from './component/Formatter/HtmlFormatter';
import JavaScriptFormatter from './component/Formatter/JavaScriptFormatter';
import JsonFormatter from './component/Formatter/JsonFormatter';
import Main from './component/main';
import SplitText from './component/Text/SplitText';
import AutoPrefixer from './component/Formatter/AutoPrefixer';
import AgeCalculator from './component/Text/AgeCalculator';
import LoremIpsumGenerator from './component/Text/LoremIpsumGenerator';
import QrCode from './component/QrCode';
import TextToSpeech from './component/Text/TextToSpeech';
import PasswordGenerator from './component/Text/PasswordGenerator';
import AgeCompare from "./component/Text/AgeCompare";


function App() {
  return (
    <Router>
      <Navbar />  
      <div id="main" className='py-5 md:py-10 md:pr-7 px-4 md:pl-60 lg:pl-80 md:ml-7 duration-500 relative min-h-screen md:pb-28'>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Main/>}></Route>
          <Route exact path="/case-converter" element={<CaseConverter heading='Case Converter' />}></Route>
          <Route exact path="/find-and-replace" element={<FindAndReplace heading='Find And Replace' />}></Route>
          <Route exact path="/remove-duplicate-keywords" element={<RemoveDuplicateKeywords heading='Remove Duplicate Keywords' />}></Route>
          <Route exact path="/remove-duplicate-lines" element={<RemoveDuplicateLines heading='Remove Duplicate Lines' />}></Route>
          <Route exact path="/remove-empty-lines" element={<RemoveEmptyLines heading='Remove Empty Lines' />}></Route>
          <Route exact path="/remove-extra-spaces" element={<RemoveExtraSpaces heading='Remove Extra Spaces' />}></Route>
          <Route exact path="/remove-line-breaks" element={<RemoveLineBreaks heading='Remove Line Breaks' />}></Route>
          <Route exact path="/reverse-string" element={<ReverseString heading='Reverse a String' />}></Route>
          <Route exact path="/text-counter" element={<TextCounter heading='Text Counter' />}></Route>
          <Route exact path="/split-text" element={<SplitText heading='Split Text' />}></Route>
          <Route exact path="/age-calculator" element={<AgeCalculator heading="Age Calculator" />}></Route>
          <Route exact path="/lorem-ipsum-generator" element={<LoremIpsumGenerator heading="Lorem Ipsum Generator" />}></Route>
          <Route exact path="/text-to-speech" element={<TextToSpeech heading="Text To Speech"/>}></Route>
          <Route exact path="/password-generator" element={<PasswordGenerator/>}></Route>
          <Route exact path="/age-compare" element={<AgeCompare/>}></Route>
          <Route exact path="/todolist" element={<TodoList />}></Route>
          <Route exact path="/qr-code" element={<QrCode />}></Route>
          <Route exact path="/css-formatter" element={<CssFormatter heading='Css Formatter' />}></Route>
          <Route exact path="/html-formatter" element={<HtmlFormatter heading='HTML Formatter' />}></Route>
          <Route exact path="/javascript-formatter" element={<JavaScriptFormatter heading='JavaScript Formatter' />}></Route>
          <Route exact path="/json-formatter" element={<JsonFormatter heading='JSON Formatter' />}></Route>
          <Route exact path="/autoprefixer" element={<AutoPrefixer heading='JSON Formatter' />}></Route>
          <Route exact path="/about" element={<h2>About</h2>}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
