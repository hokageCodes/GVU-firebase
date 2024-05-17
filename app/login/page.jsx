// app/login/page.jsx
"use client";
import React, { useState } from 'react';
import { useAuth } from '../../authContext';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
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
      await login(email, password);
      setSuccess('Login successful! Redirecting...');
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
        {loading ? 'Logging In...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
