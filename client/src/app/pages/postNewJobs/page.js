
"use client";

import InputBox from '@/app/components/inputBoxComponent/inputBox';
import { useState } from 'react';

export default function postNewJobs() {
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
    <main className="flex min-h-screen flex-col   p-6">

      <h1><b>Job Details</b></h1>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Job Title' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Job Description' onChange={()=>{}} ></InputBox>
      </div>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Job Type' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Job Category' onChange={()=>{}} ></InputBox>
      </div>

      <h1><b>Company Information</b></h1>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Company Name' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Company Website' onChange={()=>{}} ></InputBox>
      </div>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Company Description' onChange={()=>{}} ></InputBox>
      </div>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Linkedin Profile' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Twitter Profile' onChange={()=>{}} ></InputBox>
      </div>

      <h1><b>Job Requirements</b></h1>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Minimum Education Level' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Years of Experience' onChange={()=>{}} ></InputBox>
      </div>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Required Certifications' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Required Skills' onChange={()=>{}} ></InputBox>
      </div>

      <h1><b>Location & Application</b></h1>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Job Location' onChange={()=>{}} ></InputBox>
      <InputBox  placeholder='Application Method' onChange={()=>{}} ></InputBox>
      </div>

      <div className="flex flex-row  gap-16">
      <InputBox  placeholder='Application Deadline' onChange={()=>{}} ></InputBox>
      </div>
<h1><b>Submission Options</b></h1>
      <div className="flex  space-x-16">
            <button
              onClick={() => {}}
              className={`py-2 px-4 rounded ${employment === 'full-time' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Save as Draft
            </button>
            <button
              onClick={() => {}}
              className={`py-2 px-4 rounded ${employment === 'part-time' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Preview Job Listing
            </button>
            <button
              onClick={() => {}}
              className={`py-2 px-4 rounded ${employment === 'in-person' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Submit for Review
            </button>
       
           
          </div>

    </main>
  );
}
