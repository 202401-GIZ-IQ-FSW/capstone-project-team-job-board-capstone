"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("../../pages/signin/");
  };
  const SignUphandleOnClick = () => {
    router.push("../../pages/signup/");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">JobBoard</div>
        <div>
          <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="../../pages/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="../../pages/jobs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Jobs
          </Link>
          <Link href="../../pages/postNewJobs/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Post New Jobs
          </Link>
          <Link href="../../pages/search/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Search
          </Link>

        </div>
        <div className="space-x-2">
          <button
            onClick={() => handleOnClick()}
            className=" text-white px-4 py-2 rounded-md hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Sign In
          </button>
          <button
            onClick={() => SignUphandleOnClick()}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
