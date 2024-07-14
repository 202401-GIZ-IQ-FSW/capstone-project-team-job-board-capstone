"use client";

import React from "react";

const jobDetail = {
  title: "Senior Product Designer",
  company: "Google Inc.",
  location: "Toronto, Ontario",
  salary: "$90,000/year",
  employmentType: "Full-time",
  datePosted: "2 days ago",
  jobId: "12345",
  jobSummary:
    "We are looking for a talented Senior Product Designer to join our team...",
  detailedDescription: `
    Responsibilities:
    - Collaborate with product managers and engineers to design user-centric products.
    - Conduct user research and usability testing.
    - Create wireframes, prototypes, and high-fidelity designs.
    - Ensure consistent branding and design standards across all products.

    Requirements:
    - Bachelor's degree in Design, Fine Arts, or related field.
    - 5+ years of experience in product design.
    - Proficiency in design tools such as Sketch, Figma, Adobe XD.
    - Strong portfolio showcasing previous design projects.
  `,
  qualifications: `
    - Strong understanding of UX principles and user-centered design.
    - Excellent communication and teamwork skills.
    - Ability to work in a fast-paced, agile environment.
  `,
  companyOverview: `
    Google Inc. is a multinational corporation that specializes in Internet-related services and products. Our mission is to organize the world's information and make it universally accessible and useful.
  `,
  applicationDeadline: "March 31, 2024",
  numberOfApplicants: "20 applicants",
  contactInformation: "For more information, contact careers@google.com.",
};

const JobDetailPage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{jobDetail.title}</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Apply Now
          </button>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Company:</strong> {jobDetail.company}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Location:</strong> {jobDetail.location}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Salary:</strong> {jobDetail.salary}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Employment Type:</strong> {jobDetail.employmentType}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Date Posted:</strong> {jobDetail.datePosted}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Job ID:</strong> {jobDetail.jobId}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Job Summary:</strong> {jobDetail.jobSummary}
        </p>
        <div className="text-gray-700 mb-4">
          <strong>Detailed Description:</strong>
          <pre className="whitespace-pre-wrap">
            {jobDetail.detailedDescription}
          </pre>
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Qualifications and Skills:</strong>
          <pre className="whitespace-pre-wrap">{jobDetail.qualifications}</pre>
        </div>
        <div className="text-gray-700 mb-4">
          <strong>Company Overview:</strong>
          <pre className="whitespace-pre-wrap">{jobDetail.companyOverview}</pre>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Application Deadline:</strong> {jobDetail.applicationDeadline}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Number of Applicants:</strong> {jobDetail.numberOfApplicants}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Contact Information:</strong> {jobDetail.contactInformation}
        </p>
      </div>
    </div>
  );
};

export default JobDetailPage;
