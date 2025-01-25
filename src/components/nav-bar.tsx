"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="text-white text-xl font-bold">Skroolo</div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Navigation Links (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="#">
              <div className="hover:text-white">Products</div>
            </Link>
          </li>
          <li>
            <Link href="#">
            <div className="hover:text-white">Solutions</div>
            </Link>
          </li>
          <li>
            <Link href="#">
            <div className="hover:text-white">Pricing</div>
            </Link>
          </li>
          <li>
            <Link href="#">
            <div className="hover:text-white">Resources</div>
            </Link>
          </li>
          <li>
            <Link href="#">
            <div className="hover:text-white">Contact</div>
            </Link>
          </li>
        </ul>

        {/* Buttons (hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-gray-500 text-gray-200 px-4 py-2 rounded hover:bg-gray-800">
            Contact Sales
          </button>
          <button className="bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible when toggled) */}
      {isOpen && (
        <div className="md:hidden px-8 py-4 bg-gray-800">
          <ul className="space-y-4">
            <li>
              <Link href="#">
                <a className="block hover:text-white">Products</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block hover:text-white">Solutions</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block hover:text-white">Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block hover:text-white">Resources</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a className="block hover:text-white">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="mt-4 space-y-2">
            <button className="w-full border border-gray-500 text-gray-200 px-4 py-2 rounded hover:bg-gray-800">
              Contact Sales
            </button>
            <button className="w-full bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-200">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

