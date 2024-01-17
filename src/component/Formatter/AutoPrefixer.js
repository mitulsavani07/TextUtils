import React, { useState, useEffect } from "react";
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import { nanoid } from 'nanoid';

function AutoPrefixer() {
  const [inputCSS, setInputCSS] = useState('');
  const [outputCSS, setOutputCSS] = useState('');

  useEffect(() => {
    const processCSS = async () => {
      const result = await postcss([autoprefixer]).process(inputCSS, { from: undefined });
      setOutputCSS(result.css);
    };
    processCSS();
  }, [inputCSS]);

  const handleInputChange = (event) => {
    setInputCSS(event.target.value);
  };

  return (
    <div className="App">
      <h1>Autoprefixer</h1>
      <div className="container">
        <div className="input-container">
          <h2>Input CSS</h2>
          <textarea
            value={inputCSS}
            onChange={handleInputChange}
            placeholder="Enter your CSS here"
          />
        </div>
        <div className="output-container">
          <h2>Output CSS (Autoprefixed)</h2>
          <pre>{outputCSS}</pre>
        </div>
      </div>
      <div className="footer">
        Generated unique ID: <span>{nanoid()}</span>
      </div>
    </div>
  );
}

export default AutoPrefixer;
