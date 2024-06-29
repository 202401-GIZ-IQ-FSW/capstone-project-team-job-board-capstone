// src/pages/contact-us.jsx
import React from 'react';

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        Get in touch with us. We are here to assist you in finding the perfect job opportunities.
      </p>
      <form className="w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Full Name</label>
          <input
            type="text"
            name="fullName"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Email Address</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter the subject"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Message</label>
          <textarea
            name="message"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your message"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Call Us</h2>
          <p>07515171715</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Email Us</h2>
          <p>Zhin@gmail.com</p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold">Visit Us</h2>
          <p>Erbil / Iraq Office</p>
        </div>
      </div>
    </div>
  );
}
