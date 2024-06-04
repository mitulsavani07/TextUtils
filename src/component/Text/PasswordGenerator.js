import React, { useState, useRef, useEffect } from "react";
import $ from 'jquery';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState("Password");
  const resultRef = useRef(null);

  useEffect(() => {
    const progress = document.querySelector('.range-thumb');

    const updateBackground = () => {
      const value = (length - 8) / (64 - 8) * 100;
      progress.style.background = `linear-gradient(to right, #584ED2 0%, #584ED2 ${value}%, #584ed282 ${value}%, #584ed282 100%)`;
    };

    updateBackground();

    return () => {
      progress.removeEventListener('input', updateBackground);
    };
  }, [length]);

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

  const clickCopyText = () => {
    const text = resultRef.current.innerText;
    navigator.clipboard.writeText(text).then(() => {
      $('.copied-alert').fadeIn("slow");
      setTimeout(() => {
        $('.copied-alert').fadeOut("slow");
      }, 1000);
    });
  };

  return (
    <div className="max-w-3xl w-full mx-auto my-5">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10">
        Password Generator
      </h1>
      <div className="mt-5">
        <h2 className="text-xl font-semibold mb-4">Generated Password:</h2>
        <p
          ref={resultRef}
          className="w-full p-5 rounded-lg dark:text-white dark:drop-shadow-none dark:border-none drop-shadow-primary dark:bg-[#292A33] outline-none border border-primary"
        >
          {password}
        </p>
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
              className="w-full h-2 rounded-lg range-thumb"
            />
            <span>64</span>
          </div>
        </label>
        <label className="my-2 w-full sm:w-1/2 mt-4 custom-checkbox-container flex items-center relative pl-9 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
            className="mr-2 custom-checkbox absolute opacity-0 cursor-pointer h-0 w-0"
          />
          <span className="custom-checkbox-checkmark absolute inset-0 h-6 w-6 bg-primary dark:bg-[#584ed282] rounded border-2 border-primary after:left-[8px] after:top-[4px] after:w-[6px] after:h-[10px] after:border-0 after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45"></span>
          Include Uppercase Letters
        </label>
        <label className="my-2 w-full sm:w-1/2 mt-4 custom-checkbox-container flex items-center relative pl-9 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            className="mr-2 custom-checkbox absolute opacity-0 cursor-pointer h-0 w-0"
          />
          <span className="custom-checkbox-checkmark absolute inset-0 h-6 w-6 bg-primary dark:bg-[#584ed282] rounded border-2 border-primary after:left-[8px] after:top-[4px] after:w-[6px] after:h-[10px] after:border-0 after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45"></span>
          Include Lowercase Letters
        </label>
        <label className="my-2 w-full sm:w-1/2 mt-4 custom-checkbox-container flex items-center relative pl-9 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2 custom-checkbox absolute opacity-0 cursor-pointer h-0 w-0"
          />
          <span className="custom-checkbox-checkmark absolute inset-0 h-6 w-6 bg-primary dark:bg-[#584ed282] rounded border-2 border-primary after:left-[8px] after:top-[4px] after:w-[6px] after:h-[10px] after:border-0 after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45"></span>
          Include Numbers
        </label>
        <label className="my-2 w-full sm:w-1/2 mt-4 custom-checkbox-container flex items-center relative pl-9 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={includeSpecial}
            onChange={(e) => setIncludeSpecial(e.target.checked)}
            className="mr-2 custom-checkbox absolute opacity-0 cursor-pointer h-0 w-0"
          />
          <span className="custom-checkbox-checkmark absolute inset-0 h-6 w-6 bg-primary dark:bg-[#584ed282] rounded border-2 border-primary after:left-[8px] after:top-[4px] after:w-[6px] after:h-[10px] after:border-0 after:border-white after:border-r-[2px] after:border-b-[2px] after:rotate-45"></span>
          Include Special Characters
        </label>
        <div className="mt-10">
          <button
            onClick={handleGeneratePassword}
            className="btn p-2 bg-blue-500 text-white rounded mx-2"
          >
            Generate Password
          </button>
          <button onClick={clickCopyText} className="btn p-2 bg-green-500 text-white rounded mx-2">
            Copy Text
          </button>
        </div>
      </div>
      <div className="copied-alert hidden">Password copied!</div>
    </div>
  );
};

export default PasswordGenerator;