import React, { useState } from 'react';

const TextCounter = (props) => {  
  const textChange = (e) =>{
    setText(e.target.value);
  }
  // function countLines() {
  //   return text.split('\n').length;
  // }
  const [text, setText] = useState('');
  return (
    <>
      <div className=''>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
        <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' value={text} name="" id="myBox" cols="30" rows="10" onChange={textChange} placeholder='Enter Yout Utils text'></textarea>
        <p className='my-10'>Word: {text.trim().split(/\s+/).length} | Character: {text.length} | Line: {text.split('\n').length} </p>
      </div>
    </>
  )
}
export default TextCounter