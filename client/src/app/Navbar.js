import Link from "next/link";

const Navbar = () => {
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
          <Link href="
          /jobs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Jobs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
