import React, { useState } from 'react';
import $ from 'jquery';

const RemoveExtraSpaces = (props) => {  
  const clickSplitExtraspace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const clickcopyText =() =>{
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
      <div className=''>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
        <textarea className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' value={text} name="" id="myBox" cols="30" rows="10" onChange={textChange} placeholder='Enter Yout Utils text'></textarea>
        <div className='flex flex-wrap mt-5 -mx-2'>
          <button onClick={clickSplitExtraspace} className='btn'>Split Extra space</button>
          <button onClick={clickcopyText} className='btn'>Copy Text</button>
          <button onClick={clickclearText} className='btn'>Clear Text</button>
        </div>
      </div>
    </>
  )
}
export default RemoveExtraSpaces;