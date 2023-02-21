import React, { useState } from 'react';
import Prettier from 'prettier/standalone';
import ParserBabel from 'prettier/parser-babel';
import $ from 'jquery';

export default function JavaScriptFormatter(props) {
  const [js, setjs] = useState('');
  const [text, setText] = useState('');

  function handleFormat() {
    const options = {
      parser: 'babel',
      plugins: [ParserBabel],
    };
    const formattedText = Prettier.format(text, options);
    setjs(formattedText);
  }

  const clickCopyText = () => {
    let text = document.getElementById('result');
    text.select();
    navigator.clipboard.writeText(text.value).then(() => {
      $('.copied-alert').fadeIn("slow");
      setTimeout(function () {
        $('.copied-alert').fadeOut("slow");
      }, 1000);
      text.blur(); // remove text selection
    });
  };

  const clickClearText = () => {
    let newText = '';
    setjs(newText);
    setText(newText);
  };

  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
        <div className='flex flex-wrap -mx-4'>
          <div className='lg:w-1/2 w-full px-4'>
            <label htmlFor="input" className='font-semibold text-lg md:text-xl inline-block mb-4'>Input:</label>
            <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' placeholder={`Enter Your JavaScript Code`} name='' id='myBox' cols='30' rows='10' value={text} onChange={(e) => setText(e.target.value)}></textarea>
          </div>
          <div className='lg:w-1/2 w-full px-4 mt-5 lg:mt-0'>
            <label htmlFor="result" className='font-semibold text-lg md:text-xl inline-block mb-4'>Result:</label>
            <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10" id="result" value={js} readOnly />
          </div>
        </div>
        <div className=''>
          <button className='btn' onClick={handleFormat}>
            Format
          </button>
          <button onClick={clickCopyText} className='btn'>
            Copy Text
          </button>
          <button onClick={clickClearText} className='btn'>
            Clear Text
          </button>
        </div>
      </div>
    </>
  );
}
