import React, { useState } from "react";
import $ from 'jquery';

export default function SplitText(props) {
  const [text, setText] = useState("");
  const [words, setWords] = useState([]);

  const handleSplitText = () => {
    const splitWords = text.split("\n");
    setWords(splitWords);
  };

  const clickcopyText = () => {
    let text = document.getElementById("result");
    text.select();
    navigator.clipboard.writeText(text.value).then(() => {
      $('.copied-alert').fadeIn("slow");
      setTimeout(function () {
        $('.copied-alert').fadeOut("slow");
      }, 1000);
      text.blur(); // remove text selection
    });
  };

  const clickclearText = () => {
    let newText = '';
    setText(newText);
    setWords([]);
  };

  // const wordsAsString = words.join(' ');

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
      <div className='flex flex-wrap -mx-4'>
        <div className='lg:w-1/2 w-full px-4'>
          <label htmlFor="input" className='font-semibold text-lg md:text-xl inline-block mb-4'>Input:</label>
          <textarea
            className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary'
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className='lg:w-1/2 w-full px-4 mt-5 lg:mt-0'>
          <label htmlFor="result" className='font-semibold text-lg md:text-xl inline-block mb-4'>Result:</label>
          <textarea
            className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary'
            cols="30"
            rows="10"
            id="result"
            value={words.join(" ")}
          ></textarea>
        </div>
      </div>
      <button onClick={handleSplitText} className='btn'>Split Text</button>
      <button onClick={clickcopyText} className='btn'>Copy Text</button>
      <button onClick={clickclearText} className='btn'>Clear Text</button>
    </div>
  );
}
