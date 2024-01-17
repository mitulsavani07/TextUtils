import React from 'react';

const AgeCalculator = (props) => {

  return (
    <div className="age-calculator-container">
      <h1 className='text-center text-3xl md:text-5xl font-bold my-10'>
          {props.heading}
        </h1>
      <div className="max-w-xs mx-auto">
        <div>
          <label htmlFor="">
            <h3 className='text-xl mb-2 font-medium'>Enter Your Birthdate:</h3>
            <input type="date" className='age-input--css' />
            <button className='btn w-full age-btn'>Calculcne my age</button>
          </label>
          {/* <select class="calendarDateInput text-black ">
            <option value="0" selected="">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select> */}
        </div>
          
      </div>
      
    </div>
  );
};

export default AgeCalculator;
