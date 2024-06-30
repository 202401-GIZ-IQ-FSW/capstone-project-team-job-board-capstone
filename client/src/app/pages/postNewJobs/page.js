"use client";

import InputBox from '@/app/components/inputBoxComponent/inputBox';
import { useState } from 'react';

export default function PostNewJobs() {
  const [jobType, setJobType] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [applicationMethod, setApplicationMethod] = useState('');

  const handleSearch = () => {
    // Handle search logic here
    console.log({ jobType, jobCategory, applicationMethod });
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className="text-xl font-bold">Job Details</h1>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="Job Title" className="w-full sm:w-1/2" />
        <InputBox placeholder="Job Description" className="w-full sm:w-1/2" />
      </div>

      <div className="flex flex-wrap gap-4">
        <select 
          value={jobType} 
          onChange={(e) => setJobType(e.target.value)} 
          className="p-2 border border-gray-300 rounded w-full sm:w-1/2 h-12"
        >
          <option value="" disabled>Select Job Type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
        </select>
        <select 
          value={jobCategory} 
          onChange={(e) => setJobCategory(e.target.value)} 
          className="p-2 border border-gray-300 rounded w-full sm:w-1/2 h-12"
        >
          <option value="" disabled>Select Job Category</option>
          <option value="tech">Tech</option>
          <option value="health">Health</option>
          <option value="finance">Finance</option>
        </select>
      </div>

      <h1 className="text-xl font-bold">Company Information</h1>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="Company Name" className="w-full sm:w-1/2" />
        <InputBox placeholder="Company Website" className="w-full sm:w-1/2" />
      </div>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="Company Description" className="w-full" />
      </div>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="LinkedIn Profile" className="w-full sm:w-1/2" />
        <InputBox placeholder="Twitter Profile" className="w-full sm:w-1/2" />
      </div>

      <h1 className="text-xl font-bold">Job Requirements</h1>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="Minimum Education Level" className="w-full sm:w-1/2" />
        <InputBox placeholder="Years of Experience" className="w-full sm:w-1/2" />
      </div>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="Required Certifications" className="w-full sm:w-1/2" />
        <InputBox placeholder="Required Skills" className="w-full sm:w-1/2" />
      </div>

      <h1 className="text-xl font-bold">Location & Application</h1>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="Job Location" className="w-full sm:w-1/2" />
        <select 
          value={applicationMethod} 
          onChange={(e) => setApplicationMethod(e.target.value)} 
          className="p-2 border border-gray-300 rounded w-full sm:w-1/2 h-12"
        >
          <option value="" disabled>Select Application Method</option>
          <option value="email">Email</option>
          <option value="website">Website</option>
          <option value="in-person">In-Person</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-4">
        <InputBox placeholder="Application Deadline" className="w-full" />
      </div>

      <h1 className="text-xl font-bold">Submission Options</h1>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => { }}
          className="py-2 px-4 bg-gray-200 text-gray-700 rounded w-full sm:w-auto"
        >
          Save as Draft
        </button>
        <button
          onClick={() => { }}
          className="py-2 px-4 bg-gray-200 text-gray-700 rounded w-full sm:w-auto"
        >
          Preview Job Listing
        </button>
        <button
          onClick={() => { }}
          className="py-2 px-4 bg-gray-200 text-gray-700 rounded w-full sm:w-auto"
        >
          Submit for Review
        </button>
      </div>
    </main>
  );
}
