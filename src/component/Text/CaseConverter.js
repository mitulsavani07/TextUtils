import React, { useState } from 'react'
import $ from 'jquery';

const CaseConverter = (props) => {
  const clickUppercase = () => {
    setText(text.toUpperCase());
  }
  const clickLowercase = () => {
    setText(text.toLowerCase());
  }
  const clickCamelcase = () => {
    setText(
      text
        .split(' ')
        .map((word, index) =>
          index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('')
    );
  }
  const clickcopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value).then(() => {
      $('.copied-alert').fadeIn("slow");
      setTimeout(function () {
        $('.copied-alert').fadeOut("slow");
      }, 1000);
    });
    text.blur();
  }
  const clickclearText = () => {
    let newText = '';
    setText(newText);
  }
  const textChange = (e) => {
    setText(e.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className=''>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
        <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary ' value={text} name="" id="myBox" cols="30" rows="10" onChange={textChange} placeholder='Enter Yout Utils text'></textarea>
        <div className='flex flex-wrap mt-5 -mx-2 justify-between'>
          <div>
            <button onClick={clickUppercase} className='btn'>uppercase</button>
            <button onClick={clickLowercase} className='btn'>lowercase</button>
            <button onClick={clickCamelcase} className='btn'>camelcase</button>
          </div>
          <div>
            <button onClick={clickcopyText} className='btn'>Copy Text</button>
            <button onClick={clickclearText} className='btn'>Clear Text</button>
          </div>
        </div>
        <p className='my-10'>Word: {text.split(" ").length - 1} | Character: {text.length} | Read Minutes: {0.008 * text.split(" ").length}</p>
      </div>
    </>
  )
}

export default CaseConverter