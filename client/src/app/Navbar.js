"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push("/signin");
  };


  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">JobBoard</div>
        <div>
          <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/jobs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Jobs
          </Link>
          <Link href="/browse" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Browse
          </Link>
          <Link href="
          /search" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Search
          </Link>

        </div>
        <button onClick={()=>handleOnClick()} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Sign In
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
