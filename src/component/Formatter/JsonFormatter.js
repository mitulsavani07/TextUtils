import React, { useState } from 'react';
import $ from 'jquery';

export default function JsonFormatter(props) {
  const [json, setjson] = useState('');
  const [text, setText] = useState('');

  function formatJson() {
    try {
      const parsed = JSON.parse(text);
      return JSON.stringify(parsed, null, 2);
    } catch (error) {
      return text;
    }
  }

  function handleFormatJson() {
    setjson(formatJson());
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
  }

  const clickclearText = () => {
    let newText = '';
    setjson(newText);
    setText(newText);
  }

  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
        <div className='flex flex-wrap -mx-4'>
          <div className='lg:w-1/2 w-full px-4'>
            <label htmlFor="input" className='font-semibold text-lg md:text-xl inline-block mb-4'>Input:</label>
            <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' placeholder={`Enter Your JSON`} name="" id="myBox" cols="30" rows="10" value={text} onChange={e => setText(e.target.value)}></textarea>
          </div>
          <div className='lg:w-1/2 w-full px-4 mt-5 lg:mt-0'>
            <label htmlFor="result" className='font-semibold text-lg md:text-xl inline-block mb-4'>Result:</label>
            <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10" id="result" value={json} readOnly />
          </div>
        </div>
        <div className=''>
          <button className='btn' onClick={handleFormatJson}>Format JSON</button>
          <button onClick={clickcopyText} className='btn'>Copy Text</button>
          <button onClick={clickclearText} className='btn'>Clear Text</button>
        </div>
      </div>
    </>
  )
}
