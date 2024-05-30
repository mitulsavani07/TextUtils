import React, { useState } from "react";
import $ from 'jquery';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState("Password");

  const handleGeneratePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    let characterPool = "";

    if (includeUppercase) characterPool += upperCaseChars;
    if (includeLowercase) characterPool += lowerCaseChars;
    if (includeNumbers) characterPool += numberChars;
    if (includeSpecial) characterPool += specialChars;

    if (characterPool === "") {
      alert("Please select at least one character type.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };
  const clickcopyText = () => {
    let text = document.getElementById("result");
    text.select();
    navigator.clipboard.writeText(text.value).then(() => {
      $('.copied-alert').fadeIn("slow");
      setTimeout(function () {
        $('.copied-alert').fadeOut("slow");
      }, 1000);
      text.blur(); // remove text selection
    });
  };

  return (
    <div className="max-w-3xl w-full mx-auto my-5">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10">
        Password Generator
      </h1>
      
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-4">Generated Password :</h2>
          <p id="result" className="w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary dark:bg-[#292A33] outline-none border border-primary">{password}</p>
        </div>
      
      <div className="flex flex-wrap justify-center">
        <span className="block mt-4 text-2xl">Settings</span>
        <label className="my-2 w-full">
          <span className="uppercase">Length - {length}</span>
          <div className="flex items-center space-x-3 mt-2">
            <span>8</span>
            <input
              type="range"
              min="8"
              max="64"
              value={length}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full"
              />
              <span>64</span>
            </div>
        </label>
        <label className="my-2 w-1/2 mt-4">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mr-2"
          />
          Include Uppercase Letters
        </label>
        <label className="my-2 w-1/2 mt-4">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            className="mr-2"
          />
          Include Lowercase Letters
        </label>
        <label className="my-2 w-1/2 mt-4">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2"
          />
          Include Numbers
        </label>
        <label className="my-2 w-1/2 mt-4">
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={(e) => setIncludeSpecial(e.target.checked)}
            className="mr-2"
          />
          Include Special Characters
        </label>
        <div className="mt-10">
          <button
            onClick={handleGeneratePassword}
            className="btn p-2 bg-blue-500 text-white rounded"
          >
            Generate Password
          </button>
          <button onClick={clickcopyText} className='btn'>Copy Text</button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;