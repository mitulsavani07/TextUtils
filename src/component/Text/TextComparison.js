import React, { useState } from 'react';
import { diff_match_patch } from 'diff-match-patch';

const TextComparison = (props) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(text1, text2);
  dmp.diff_cleanupSemantic(diffs);
  const html = dmp.diff_prettyHtml(diffs);

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>{props.heading}</h1>
      <div className='flex flex-wrap -mx-4'>
        <div className='lg:w-1/2 w-full px-4'>
          <label htmlFor="input" className='font-semibold text-lg md:text-xl inline-block mb-4'>Input:</label>
          <textarea
            className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary'
            placeholder="Enter text"
            value={text1} onChange={(e) => setText1(e.target.value)}
          ></textarea>
        </div>
        <div className='lg:w-1/2 w-full px-4 mt-5 lg:mt-0'>
          <label htmlFor="result" className='font-semibold text-lg md:text-xl inline-block mb-4'>Result:</label>
          <textarea
            className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary'
            cols="30"
            rows="10"
            id="result"
            value={text2} onChange={(e) => setText2(e.target.value)}
          ></textarea>
        </div>
      </div>
        <div className='break-words bg-white w-100 mt-5 p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary' dangerouslySetInnerHTML={{ __html: html }} />
      {/* <button onClick={handleSplitText} className='btn'>Split Text</button>
      <button onClick={clickcopyText} className='btn'>Copy Text</button>
      <button onClick={clickclearText} className='btn'>Clear Text</button> */}
    </div>
  );
};

export default TextComparison;