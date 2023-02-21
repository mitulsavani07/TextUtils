import React, { useState } from 'react';
import beautify from 'js-beautify';
import $ from 'jquery';

export default function HtmlFormatter(props) {
  const [js, setjs] = useState('');
  const [text, setText] = useState('');


  function handleFormatHtml() {
    const formattedHtml = beautify.html(text, {
      indent_size: 2,
      wrap_attributes_indent_size: 2,
      end_with_newline: true,
    });
    setjs(formattedHtml);
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
    setjs(newText);
    setText(newText);
  }

  return (
    <>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
      <div className='flex flex-wrap -mx-4'>
        <div className='lg:w-1/2 w-full px-4'>
          <label htmlFor="input" className='font-semibold text-lg md:text-xl inline-block mb-4'>Input:</label>
          <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' placeholder={`Enter Your HTML Code`} name="" id="myBox" cols="30" rows="10" value={text} onChange={e => setText(e.target.value)}></textarea>
        </div>
        <div className='lg:w-1/2 w-full px-4 mt-5 lg:mt-0'>
          <label htmlFor="result" className='font-semibold text-lg md:text-xl inline-block mb-4'>Result:</label>
          <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10" id="result" value={js} readOnly />
        </div>
      </div>
      <div className=''>
        <button className='btn' onClick={handleFormatHtml}>Format HTML</button>
        <button onClick={clickcopyText} className='btn'>Copy Text</button>
        <button onClick={clickclearText} className='btn'>Clear Text</button>
      </div>
    </>
  )
}
