import React, { useState } from 'react';
import cssbeautify from 'cssbeautify';
import $ from 'jquery';

export default function CssFormatter(props) {
  const [css, setCss] = useState('');
  const [result, setResult] = useState('');

  function formatCss() {
    return cssbeautify(css);
  }

  function handleFormatCss() {
    // setCss(formatCss());
    setResult(formatCss());
  }
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
    setCss(newText);
    setResult(newText);
  }

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
      <div className='flex flex-wrap -mx-4'>
        <div className='lg:w-1/2 w-full px-4'>
          <label htmlFor="input" className='font-semibold text-lg md:text-xl inline-block mb-4'>Input:</label>
            <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10"
              value={css}
              onChange={(event) => setCss(event.target.value)}
            />
        </div>
        <div className='lg:w-1/2 w-full px-4 mt-5 lg:mt-0'>
          <label htmlFor="result" className='font-semibold text-lg md:text-xl inline-block mb-4'>Result:</label>
          <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10" id="result" value={result} readOnly />
        </div>
      </div>
      <button onClick={handleFormatCss} className='btn'>Format CSS</button>
      <button onClick={clickcopyText} className='btn'>Copy Text</button>
      <button onClick={clickclearText} className='btn'>Clear Text</button>
    </div>
  );
}
