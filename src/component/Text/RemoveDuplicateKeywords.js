import React, { useState } from 'react';

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
    navigator.clipboard.writeText(text.value);
  }
  const clickclearText = () => {
    let newText = '';
    setText(newText);
  }

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
      <textarea id='myBox' className='w-full border-2 p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary ' cols="30" rows="10" placeholder={`Enter Your ${props.heading}`} value={text} onChange={(e) => setText(e.target.value)} />
      <button className='btn' onClick={handleRemoveDuplicates}>Remove Duplicates</button>
      <button onClick={clickcopyText} className='btn'>Copy Text</button>
      <button onClick={clickclearText} className='btn'>Clear Text</button>
    </div>
  );
}
