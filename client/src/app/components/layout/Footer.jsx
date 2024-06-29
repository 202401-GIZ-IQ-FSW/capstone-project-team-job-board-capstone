"use client";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {

  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
          <Link href="../../pages/about/" className="hover:text-gray-400">
            About Us
          </Link>
          <Link href="../../pages/contact_us/" className="hover:text-gray-400">
            Contact Us
          </Link>
          <Link href="../../pages/jobs/" className="hover:text-gray-400">
            Job Listing
          </Link>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}

