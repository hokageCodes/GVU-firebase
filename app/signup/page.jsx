// app/signup/page.jsx
"use client";
import React, { useState } from 'react';
import { useAuth } from '../../authContext';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineLock } from 'react-icons/ai';

const SignUpForm = () => {
  const { signup } = useAuth();
  const [fullName, setFullName] = useState('');
  const [matricNumber, setMatricNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await signup(fullName, matricNumber, email, password);
      setSuccess('Account created successfully! Redirecting...');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-32">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      <label className="flex items-center mb-2">
        <AiOutlineUser className="mr-2" />
        Full Name:
      </label>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="John Doe"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="flex items-center mb-2">
        <AiOutlineUser className="mr-2" />
        Matric Number:
      </label>
      <input
        type="text"
        value={matricNumber}
        onChange={(e) => setMatricNumber(e.target.value)}
        placeholder="MAT123456"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="flex items-center mb-2">
        <AiOutlineMail className="mr-2" />
        Email:
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="john.doe@example.com"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="flex items-center mb-2">
        <AiOutlinePhone className="mr-2" />
        Phone Number:
      </label>
      <input
        type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="123-456-7890"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <label className="flex items-center mb-2">
        <AiOutlineLock className="mr-2" />
        Password:
      </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <button
        type="submit"
        disabled={loading}
        className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
    </form>
  );
};

export default SignUpForm;
