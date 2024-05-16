// components/navbar/Navbar.jsx
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/assets/logo.jpg" alt="Logo" className="h-8 mr-2" />
        <span className="text-lg font-bold">Glorious Vision University</span>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <a href="#about" className="text-white font-semibold py-2 px-4 hover:bg-gray-700">About</a>
        <a href="#cgpa" className="text-white font-semibold py-2 px-4 hover:bg-gray-700">CGPA Calculator</a>
        <a href="#past" className="text-white font-semibold py-2 px-4 hover:bg-gray-700">Past Questions</a>
        <a href="#faqs" className="text-white font-semibold py-2 px-4 hover:bg-gray-700">FAQs</a>
      </div>
      <div className="flex items-center">
        <button className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Sign Up</button>
        <button className="hidden md:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        <button className="md:hidden" onClick={toggleMenu}>
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      <div className={`md:hidden absolute top-16 right-0 bg-gray-800 w-40 mt-2 rounded-md shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#about" className="block text-white font-semibold py-2 px-4 hover:bg-gray-700">About</a>
        <a href="#cgpa" className="block text-white font-semibold py-2 px-4 hover:bg-gray-700">CGPA Calculator</a>
        <a href="#past" className="block text-white font-semibold py-2 px-4 hover:bg-gray-700">Past Questions</a>
        <a href="#faqs" className="block text-white font-semibold py-2 px-4 hover:bg-gray-700">FAQs</a>
        <Link legacyBehavior href="/signup" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          <a>Sign Up</a>
        </Link>
        <Link legacyBehavior href="/login" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <a>Login</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
