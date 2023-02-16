import React, { useState } from 'react';
import $ from 'jquery';

export default function RemoveDuplicateKeywords(props) {
  const [text, setText] = useState('');

  const handleRemoveDuplicates = () => {
    const uniqueKeywords = [...new Set(text.split(' '))];
    const newText = uniqueKeywords.join(' ');
    setText(newText);
  };

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

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
      <textarea id='myBox' className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10" placeholder={`Enter Your Duplicate Keywords`} value={text} onChange={(e) => setText(e.target.value)} />
      <button className='btn' onClick={handleRemoveDuplicates}>Remove Duplicates</button>
      <button onClick={clickcopyText} className='btn'>Copy Text</button>
      <button onClick={clickclearText} className='btn'>Clear Text</button>
    </div>
  );
}
