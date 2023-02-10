import React, { useState } from 'react';

const TextUtils = (props) => {  
  const clickUppercase = () =>{
    setText(text.toUpperCase());
  }
  const clickLowercase = () =>{
    setText(text.toLowerCase());
  }
  const clickCamelcase = () =>{
    setText(
      text
        .split(' ')
        .map((word, index) =>
          index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('')
    );
  }
  const clickSplit = () =>{
    let splitString = text.replace(/\s/g, '');
    setText(splitString);
  }
  const clickLine = () =>{
    const singleLineText = text
    .split("\n")
    .map(line => line.trim())
    .join(" ");
    // setText(text.replace(/\r?\n/g, ' ').trim());
    setText(singleLineText);
  }

  const clickSplitExtraspace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const clickcopyText =() =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const clickclearText =() =>{
    let newText = '';
    setText(newText);
  }
  const textChange = (e) =>{
    setText(e.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-center text-5xl font-bold my-5'>{props.heading}</h1>
        <textarea className='w-full border-2 p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-[-3px_26px_49px_#b6bacb59]' value={text} name="" id="myBox" cols="30" rows="10" onChange={textChange} placeholder='Enter Yout Utils text'></textarea>
        <div className='flex flex-wrap mt-5 -mx-2'>
          <button onClick={clickUppercase} className='btn'>uppercase</button>
          <button onClick={clickLowercase} className='btn'>lowercase</button>
          <button onClick={clickCamelcase} className='btn'>camelcase</button>
          <button onClick={clickSplit} className='btn'>Split Text</button>
          <button onClick={clickLine} className='btn'>Split Line</button>
          <button onClick={clickSplitExtraspace} className='btn'>Split Extra space</button>
          <button onClick={clickcopyText} className='btn'>Copy Text</button>
          <button onClick={clickclearText} className='btn'>Clear Text</button>
        </div>
        <p className='my-10'>Word: {text.split(" ").length-1} | Character: {text.length} | Read Minutes: {0.008 * text.split(" ").length}</p>
      </div>
    </>
  )
}
export default TextUtils