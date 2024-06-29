import React from "react";

const page = () => {
  return (
    <div className="container mx-auto p-4">
      {/* User Info Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src="https://www.shutterstock.com/image-photo/head-shot-portrait-african-american-260nw-2006035757.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="mb-4 md:mb-0 md:mr-6 rounded-full"
          />
          <div>
            <p className="mb-2">
              <strong>Full Name:</strong> John Doe
            </p>
            <p className="mb-2">
              <strong>Title:</strong> Software Developer
            </p>
            <p className="mb-4">
              <strong>Address:</strong> 1234 Main St, Springfield
            </p>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Edit Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Application History Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Application History</h2>
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Software Engineer at Google</p>
            <p className="text-sm text-gray-600">Company XYZ</p>
            <p className="text-sm text-gray-600">Applied on: 02/01/2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm mb-2">Status: Pending</p>
            <p className="text-sm">Interviews: 2</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Frontend Developer at Facebook</p>
            <p className="text-sm text-gray-600">Company ABC</p>
            <p className="text-sm text-gray-600">Applied on: 03/01/2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm mb-2">Status: Accepted</p>
            <p className="text-sm">Interviews: 3</p>
          </div>
        </div>
      </div>

      {/* Saved Jobs Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Saved Jobs</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-start bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <div>
              <h3 className="text-xl font-semibold">Back-end Developer</h3>
              <p>Company: RST Solutions</p>
              <p>Location: San Francisco, USA</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Remove
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start bg-gray-100 p-4 rounded-lg shadow-md">
            <div>
              <h3 className="text-xl font-semibold">Marketing Manager</h3>
              <p>Company: MarketingPro</p>
              <p>Location: San Francisco, USA</p>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
