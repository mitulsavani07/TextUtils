import React, { useState } from 'react';

export default function FindAndReplace(props) {
  const [inputValue, setInputValue] = useState('');
  const [findValue, setFindValue] = useState('');
  const [replaceValue, setReplaceValue] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  const handleFind = (event) => {
    setFindValue(event.target.value);
  };

  const clickcopyText = () => {
    let text = document.getElementById("result");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const clickclearText = () => {
    let newText = '';
    setInputValue(newText);
    setResult(newText);
  }

  const handleReplace = (event) => {
    setReplaceValue(event.target.value);
  };

  const handleFindAndReplace = () => {
    const regex = new RegExp(findValue, 'g');
    setResult(inputValue.replace(regex, replaceValue));
  };

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
      <div className='flex flex-wrap'>
        <div className='lg:w-1/2 w-full px-4'>
          <label htmlFor="input" className='font-semibold text-lg md:text-xl inline-block mb-4'>Input:</label>
          <textarea className='w-full border-2 p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10" id="input" value={inputValue} onChange={handleInput} />
        </div>
        <div className='lg:w-1/2 w-full px-4 mt-5 lg:mt-0'>
          <label htmlFor="result" className='font-semibold text-lg md:text-xl inline-block mb-4'>Result:</label>
          <textarea className='w-full border-2 p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' cols="30" rows="10" id="result" value={result} readOnly />
        </div>
      </div>

      <div className='flex flex-wrap mt-10'>
        <div className='lg:w-1/2 w-full space-y-5'>
          <div className='lg:w-1/2 w-full px-5'>
            <label className='mr-5 min-w-[58px] inline-block' htmlFor="find">Find:</label>
            <input id="find" value={findValue} onChange={handleFind} className="border-2 py-2 px-3 rounded-lg dark:text-white dark:drop-shadow-none" />
          </div>
          <div className='lg:w-1/2 w-full px-5'>
            <label className='mr-5 min-w-[58px] inline-block' htmlFor="replace">Replace:</label>
            <input id="replace" value={replaceValue} onChange={handleReplace} className="border-2 py-2 px-3 rounded-lg dark:text-white dark:drop-shadow-none" />
          </div>
        </div>
        <div className='mt-5 lg:w-1/2 w-full text-center lg:text-right'>
          <button onClick={handleFindAndReplace} className='btn'>Find and Replace</button>
          <button onClick={clickcopyText} className='btn'>Copy Text</button>
          <button onClick={clickclearText} className='btn'>Clear Text</button>
        </div>
      </div>

    </div>
  );
}
