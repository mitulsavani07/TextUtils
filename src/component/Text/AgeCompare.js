import React, { useState } from "react";
import { differenceInYears, differenceInMonths, differenceInDays } from 'date-fns';

const AgeCompare = () => {
  const [user1, setUser1] = useState({ name: "", birthdate: "" });
  const [user2, setUser2] = useState({ name: "", birthdate: "" });
  const [result, setResult] = useState("");

  const handleCompare = () => {
    if (!user1.name || !user1.birthdate || !user2.name || !user2.birthdate) {
      setResult("Please fill in all fields.");
      return;
    }

    const birthdate1 = new Date(user1.birthdate);
    const birthdate2 = new Date(user2.birthdate);

    if (birthdate1 > new Date() || birthdate2 > new Date()) {
      setResult("Birthdates should be in the past.");
      return;
    }

    const yearsDifference = differenceInYears(birthdate1, birthdate2);
    const monthsDifference = differenceInMonths(birthdate1, birthdate2) % 12;
    const daysDifference = differenceInDays(birthdate1, birthdate2) % 30;

    if (yearsDifference === 0 && monthsDifference === 0 && daysDifference === 0) {
      setResult(`${user1.name} and ${user2.name} are the same age.`);
    } else if (yearsDifference > 0 || (yearsDifference === 0 && monthsDifference > 0) || (yearsDifference === 0 && monthsDifference === 0 && daysDifference > 0)) {
      setResult(`${user1.name} is older than ${user2.name} by ${Math.abs(yearsDifference)} years, ${Math.abs(monthsDifference)} months, and ${Math.abs(daysDifference)} days.`);
    } else {
      setResult(`${user2.name} is older than ${user1.name} by ${Math.abs(yearsDifference)} years, ${Math.abs(monthsDifference)} months, and ${Math.abs(daysDifference)} days.`);
    }
  };

  return (
    <div className="max-w-xl w-full mx-auto my-10">
      <h1 className="text-center text-3xl md:text-5xl font-bold my-10">
        Age Compare
      </h1>
      <div className="flex flex-col items-center">
        <div className="w-full mb-4">
          <label htmlFor="" className="mb-2 block">1st Name :</label>
          <input
            type="text"
            placeholder="Enter Name 1"
            value={user1.name}
            onChange={(e) => setUser1({ ...user1, name: e.target.value })}
            className="border-gray-400 px-4 py-2 w-full rounded-lg mb-2 drop-shadow-primary dark:drop-shadow-none"
          />
          <input
            type="date"
            placeholder="Enter Birthdate 1"
            value={user1.birthdate}
            onChange={(e) => setUser1({ ...user1, birthdate: e.target.value })}
            className="border-gray-400 px-4 py-2 w-full rounded-lg drop-shadow-primary dark:drop-shadow-none"
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="" className="mb-2 block">2st Name :</label>
          <input
            type="text"
            placeholder="Enter Name 2"
            value={user2.name}
            onChange={(e) => setUser2({ ...user2, name: e.target.value })}
            className="border-gray-400 px-4 py-2 w-full rounded-lg mb-2 drop-shadow-primary dark:drop-shadow-none"
          />
          <input
            type="date"
            placeholder="Enter Birthdate 2"
            value={user2.birthdate}
            onChange={(e) => setUser2({ ...user2, birthdate: e.target.value })}
            className="border-gray-400 px-4 py-2 w-full rounded-lg drop-shadow-primary dark:drop-shadow-none"
          />
        </div>
        <button
          onClick={handleCompare}
          className="btn p-2 bg-blue-500 text-white rounded w-full"
        >
          Compare Ages
        </button>
        {result && (
          <div className="mt-5 p-4 border border-gray-300 rounded-lg">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCompare;