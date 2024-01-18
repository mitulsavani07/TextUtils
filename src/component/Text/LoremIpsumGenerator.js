import React, { useState } from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import $ from 'jquery';

const LoremIpsumGenerator = (props) => {
  const [outputText, setOutputText] = useState('');
  const [quantity, setQuantity] = useState(100);
  const [type, setType] = useState('words');

  const handleQuantityChange = (e) => {
    // Ensure that the entered quantity is a valid positive integer
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) || newQuantity <= 0 ? 1 : newQuantity);
  };

  const generateLoremIpsum = () => {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });
  
    let generatedText = '';
  
    if (type === 'words') {
      generatedText = lorem.generateWords(quantity).replace(/\s+/g, '\n');
    } else if (type === 'sentences') {
      generatedText = lorem.generateSentences(quantity).replace(/\.\s/g, '.\n');
    } else if (type === 'paragraphs') {
      generatedText = lorem.generateParagraphs(quantity).replace(/\n\s*\n/g, '\n\n');
    }
  
    setOutputText(generatedText);
  };
  

  const copyText = () => {
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

  const clearText = () => {
    setOutputText('');
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div>
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>
        {props.heading}
      </h1>
      <textarea
        className='w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary'
        value={outputText}
        name=''
        id='myBox'
        cols='30'
        rows='10'
        placeholder='Lorem Ipsum'
      ></textarea>
      <div className='flex flex-wrap mt-5 -mx-2 justify-between'>
        <div className='text-center'>
          <button className='btn' onClick={generateLoremIpsum}>
            Generate
          </button>
          <input
            type='number'
            className='p-3 rounded-md w-20'
            placeholder='100'
            value={quantity}
            onChange={handleQuantityChange}
          />
          <select
            name=''
            id=''
            className='ml-3 p-3 rounded-md bg-primary text-white'
            value={type}
            onChange={handleTypeChange}
          >
            <option value='words'>Words</option>
            <option value='sentences'>Sentences</option>
            <option value='paragraphs'>Paragraphs</option>
          </select>
        </div>
        <div className='text-center w-full md:w-auto'>
          <button className='btn' onClick={copyText}>
            Copy Text
          </button>
          <button className='btn' onClick={clearText}>
            Clear Text
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoremIpsumGenerator;
