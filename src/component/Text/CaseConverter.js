import React, { useState } from 'react';
import $ from 'jquery';

const CaseConverter = (props) => {
  const clickUppercase = () => {
    setText(text.toUpperCase());
  };

  const clickLowercase = () => {
    setText(text.toLowerCase());
  };

  const clickCamelcase = () => {
    setText(
      text
        .split(' ')
        .map((word, index) =>
          index === 0
            ? word.toLowerCase()
            : word[0].toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('')
    );
  };

  const clickCapitalize = () => {
    setText(
      text
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    );
  };

  const clickCopyText = () => {
    let textElement = document.getElementById('myBox');
    textElement.select();
    navigator.clipboard.writeText(textElement.value).then(() => {
      $('.copied-alert').fadeIn('slow');
      setTimeout(function () {
        $('.copied-alert').fadeOut('slow');
      }, 1000);
    });
    textElement.blur();
  };

  const clickClearText = () => {
    setText('');
  };

  const textChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div className=''>
        <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>
          {props.heading}
        </h1>
        <textarea
          className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary '
          value={text}
          name=''
          id='myBox'
          cols='30'
          rows='10'
          onChange={textChange}
          placeholder='Enter Your Utils text'
        ></textarea>
        <div className='flex flex-wrap mt-5 -mx-2 justify-between'>
          <div className='text-center'>
            <button onClick={clickUppercase} className='btn'>
              Uppercase
            </button>
            <button onClick={clickLowercase} className='btn'>
              Lowercase
            </button>
            <button onClick={clickCamelcase} className='btn'>
              Camelcase
            </button>
            <button onClick={clickCapitalize} className='btn'>
              Capitalize
            </button>
          </div>
          <div className='text-center w-full md:w-auto'>
            <button onClick={clickCopyText} className='btn'>
              Copy Text
            </button>
            <button onClick={clickClearText} className='btn'>
              Clear Text
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseConverter;
