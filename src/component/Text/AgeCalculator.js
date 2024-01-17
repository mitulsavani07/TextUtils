import React, { useState } from 'react';

const AgeCalculator = (props) => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [result, setResult] = useState('');

  const calculateAge = () => {
    // Assuming birthdate is in the format YYYY-MM-DD
    const birthdateObject = new Date(birthdate);
    const currentDate = new Date();
    
    // Calculate age
    let age = currentDate.getFullYear() - birthdateObject.getFullYear();

    // Adjust age based on month and day
    if (
      currentDate.getMonth() < birthdateObject.getMonth() ||
      (currentDate.getMonth() === birthdateObject.getMonth() &&
        currentDate.getDate() < birthdateObject.getDate())
    ) {
      age--;
    }

    setResult(`${name}, You are ${age} years old.`);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBirthdateChange = (e) => {
    setBirthdate(e.target.value);
  };

  return (
    <div className="age-calculator-container">
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>
        {props.heading}
      </h1>
      <div className="max-w-xs mx-auto">
        <div>
          <label htmlFor="" className='mb-5 block'>
            <h3 className='text-base mb-2 font-medium'>Enter Your Name:</h3>
            <input
              type="text"
              className='age-input--css'
              placeholder='Enter your name'
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label htmlFor="" className='block mb-6'>
            <h3 className='text-base mb-2 font-medium'>Enter Your Birthdate:</h3>
            <input
              type="date"
              className='age-input--css'
              value={birthdate}
              onChange={handleBirthdateChange}
            />
          </label>
          <button className='btn w-full age-btn' onClick={calculateAge}>
            Calculate my age
          </button>

          {/* result age */}
          {result && (
            <p className='dark:text-green-300 text-green-600 mt-4 text-center text-lg'>
              {result}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
