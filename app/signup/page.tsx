'use client';
import Header from "../components/header";
import Footer from "../components/footer";
import Chatbot from "../components/chatbot";
import { useState } from 'react';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formData);
};

  return (
   <div>
  <Header />
  
  <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Create Account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded text-sm sm:text-base"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded text-sm sm:text-base"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 border rounded text-sm sm:text-base"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded hover:bg-gray-800 text-sm sm:text-base"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 hover:underline">Login</a>
      </p>
    </div>
  </div>

  <Chatbot />
  <Footer />
</div>

  );
}