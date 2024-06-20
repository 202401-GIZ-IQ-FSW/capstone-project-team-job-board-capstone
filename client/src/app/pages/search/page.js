"use client";

import { useState } from 'react';

export default function Search() {
  const [jobPosition, setJobPosition] = useState('');
  const [area, setArea] = useState('');
  const [field, setField] = useState('');
  const [experience, setExperience] = useState('');
  const [employment, setEmployment] = useState('');
  const [wage, setWage] = useState(50); // Initial wage value set to the midpoint

  const handleSearch = () => {
    // Handle search logic here
    console.log({ jobPosition, area, field, experience, employment, wage });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-8">Search Jobs</h1>
      <div className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobPosition">
            Job Position
          </label>
          <input
            id="jobPosition"
            type="text"
            placeholder="e.g. Fullstack Web Developer"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="area">
            Area
          </label>
          <input
            id="area"
            type="text"
            placeholder="e.g. Iraq"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="field">
            Field
          </label>
          <select
            id="field"
            value={field}
            onChange={(e) => setField(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select a field</option>
            <option value="tech">Tech</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Experience Level
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setExperience('entry')}
              className={`py-2 px-4 rounded ${experience === 'entry' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Entry Level
            </button>
            <button
              onClick={() => setExperience('mid')}
              className={`py-2 px-4 rounded ${experience === 'mid' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Mid Level
            </button>
            <button
              onClick={() => setExperience('senior')}
              className={`py-2 px-4 rounded ${experience === 'senior' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Senior Level
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Employment Type
          </label>
          <div className="flex space-x-4">
            <button
              onClick={() => setEmployment('full-time')}
              className={`py-2 px-4 rounded ${employment === 'full-time' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Full Time
            </button>
            <button
              onClick={() => setEmployment('part-time')}
              className={`py-2 px-4 rounded ${employment === 'part-time' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Part Time
            </button>
            <button
              onClick={() => setEmployment('in-person')}
              className={`py-2 px-4 rounded ${employment === 'in-person' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              In Person
            </button>
            <button
              onClick={() => setEmployment('remote')}
              className={`py-2 px-4 rounded ${employment === 'remote' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Remote
            </button>
            <button
              onClick={() => setEmployment('traineeship')}
              className={`py-2 px-4 rounded ${employment === 'traineeship' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Traineeship
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Wage Range
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={wage}
            onChange={(e) => setWage(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-gray-700">
            <span>$0</span>
            <span>${wage}</span>
            <span>$100</span>
          </div>
        </div>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          Search
        </button>
      </div>
    </main>
  );
}
