// components/navbar/Navbar.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../authContext';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/assets/logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-semibold text-xl">Glorius Vision University</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/cgpa-calculator" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                CGPA Calculator
              </Link>
              <Link href="/past-questions" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                Past Questions
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                FAQs
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="relative">
                <button onClick={toggleProfile} className="flex items-center space-x-2 focus:outline-none">
                  <img src="/assets/user-default.png" alt="User Avatar" className="h-8 w-8 rounded-full" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg py-2 rounded-md border border-gray-200 z-50">
                    <div className="flex items-center px-4 py-2">
                      <img src="/assets/user-default.png" alt="User Avatar" className="h-10 w-10 rounded-full mr-2" />
                      <div>
                        <p className="font-semibold">{currentUser.displayName || 'User Name'}</p>
                        <p className="text-sm text-gray-600">{currentUser.matricNumber}</p>
                      </div>
                    </div>
                    <hr className="my-1" />
                    <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Profile
                    </Link>
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                      <MdLogout className="inline mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link href="/signup" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <div className="md:hidden flex items-center space-x-4">
            {currentUser && (
              <button onClick={toggleProfile} className="flex items-center space-x-2 focus:outline-none">
                <img src="/assets/user-default.png" alt="User Avatar" className="h-8 w-8 rounded-full" />
              </button>
            )}
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              {isMenuOpen ? <AiOutlineClose className="h-6 w-6" /> : <AiOutlineMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/about" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/cgpa-calculator" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
              CGPA Calculator
            </Link>
            <Link href="/past-questions" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
              Past Questions
            </Link>
            <Link href="/faqs" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
              FAQs
            </Link>
            {!currentUser && (
              <>
                <Link href="/login" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                  Login
                </Link>
                <Link href="/signup" className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
      {isProfileOpen && currentUser && (
        <div className="absolute md:hidden top-16 right-0 w-48 bg-white shadow-lg py-2 rounded-md border border-gray-200 z-50">
          <div className="flex items-center px-4 py-2">
            <img src="/assets/user-default.png" alt="User Avatar" className="h-10 w-10 rounded-full mr-2" />
            <div>
              <p className="font-semibold">{currentUser.displayName || 'User Name'}</p>
              <p className="text-sm text-gray-600">{currentUser.matricNumber}</p>
            </div>
          </div>
          <hr className="my-1" />
          <Link href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            Profile
          </Link>
          <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            <MdLogout className="inline mr-2" /> Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
