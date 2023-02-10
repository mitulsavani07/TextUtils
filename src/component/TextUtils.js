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
        <h1 className='text-center text-4xl font-bold my-5'>{props.heading}</h1>
        <textarea className='w-full border-2 p-5 rounded-3xl dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-[-3px_26px_49px_#b6bacb59]' value={text} name="" id="myBox" cols="30" rows="10" onChange={textChange} placeholder='Enter Yout Utils text'></textarea>
        <div className='flex space-x-4 flex-wrap mt-5'>
          <button onClick={clickUppercase} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>uppercase</button>
          <button onClick={clickLowercase} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>lowercase</button>
          <button onClick={clickCamelcase} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>camelcase</button>
          <button onClick={clickSplit} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>Split Text</button>
          <button onClick={clickLine} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>Split Line</button>
          <button onClick={clickSplitExtraspace} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>Split Extra space</button>
          <button onClick={clickcopyText} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>Copy Text</button>
          <button onClick={clickclearText} className='capitalize text-sm bg-primary border-2 border-primary hover:bg-transparent hover:text-primary font-semibold duration-300 px-8 py-3 text-white rounded-2xl'>Clear Text</button>
        </div>
        <p className='my-10'>Word: {text.split(" ").length-1}</p>
        <p className='my-10'>Character: {text.length} </p>
        <p className='my-10'>Read Minutes: {0.008 * text.split(" ").length} </p>
      </div>
    </>
  )
}
export default TextUtils