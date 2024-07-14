
"use client";

import { useState } from 'react';

export default function InputBox(props) {

    const{label,placeholder,onChange}=props
  const [jobPosition, setJobPosition] = useState('');
 

 

  return (
      <div className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-0.5" htmlFor="jobPosition">
            {label}
          </label>
          <input
            id={label}
            type="text"
            placeholder={placeholder}
            value={jobPosition}
            onChange={(e) => onChange(e.target.value)}
            className="shadow appearance-none border rounded w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

      </div>
  );
}
