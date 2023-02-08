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
  const clickSplitExtraspace = () =>{
    const singleLineText = text
    .split("\n")
    .map(line => line.trim())
    .join(" ");
    // setText(text.replace(/\r?\n/g, ' ').trim());
    setText(singleLineText);
  }
  const textChange = (e) =>{
    setText(e.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container mx-auto px-4'>
        <h1 className='text-center text-4xl font-bold my-5'>{props.heading}</h1>
        <textarea className='w-full border-2 p-4 rounded-lg' value={text} name="" id="" cols="30" rows="10" onChange={textChange} placeholder='Enter Yout Utils text'></textarea>
        <div className='flex space-x-4 flex-wrap mt-5'>
          <button onClick={clickUppercase} className='capitalize bg-[#0C6FC0] border-2 border-[#0C6FC0] hover:bg-transparent hover:text-[#0C6FC0] font-semibold duration-300 px-8 py-3 text-white rounded-md'>uppercase</button>
          <button onClick={clickLowercase} className='capitalize bg-[#0C6FC0] border-2 border-[#0C6FC0] hover:bg-transparent hover:text-[#0C6FC0] font-semibold duration-300 px-8 py-3 text-white rounded-md'>lowercase</button>
          <button onClick={clickCamelcase} className='capitalize bg-[#0978D0] border-2 border-[#0978D0] hover:bg-transparent hover:text-[#0978D0] font-semibold duration-300 px-8 py-3 text-white rounded-md'>camelcase</button>
          <button onClick={clickSplit} className='capitalize bg-[#0978D0] border-2 border-[#0978D0] hover:bg-transparent hover:text-[#0978D0] font-semibold duration-300 px-8 py-3 text-white rounded-md'>Split Text</button>
          <button onClick={clickSplitExtraspace} className='capitalize bg-[#0978D0] border-2 border-[#0978D0] hover:bg-transparent hover:text-[#0978D0] font-semibold duration-300 px-8 py-3 text-white rounded-md'>Split Extra space</button>
        </div>
        <p className='my-10'>Word: {text.split(" ").length-1}</p>
        <p className='my-10'>Character: {text.length} </p>
        <p className='my-10'>Read Minutes: {0.008 * text.split(" ").length} </p>
      </div>
    </>
  )
}
export default TextUtils