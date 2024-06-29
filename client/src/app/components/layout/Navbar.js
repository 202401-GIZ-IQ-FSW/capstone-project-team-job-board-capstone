"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleOnClick = () => {
    router.push("../../pages/signin/");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-white font-bold text-xl">JobBoard</div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.364 5.636a1 1 0 010 1.414L13.414 12l4.95 4.95a1 1 0 11-1.414 1.414L12 13.414l-4.95 4.95a1 1 0 01-1.414-1.414L10.586 12 5.636 7.05a1 1 0 011.414-1.414L12 10.586l4.95-4.95a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`lg:flex lg:items-center relative lg:static right-0  ${!isOpen ?' top-12' :'' } bg-gray-800 lg:bg-transparent lg:p-0 p-4 ${
            isOpen ? "block" : "hidden"
          } ${isOpen ?'w-full' :'' }   lg:w-auto`}
        >     
          <div className={`text-gray-300 lg:flex lg:space-x-4  `}>
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="../../pages/about"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="../../pages/jobs"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Jobs
            </Link>
            <Link
              href="../../pages/browse"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Browse
            </Link>
            <Link
              href="../../pages/search"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Search
            </Link>
          </div>
          <div className="mt-4 lg:mt-0">
            <button
              onClick={handleOnClick}
              className="block lg:inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
