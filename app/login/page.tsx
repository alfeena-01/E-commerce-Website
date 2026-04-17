 "use client";
import Header from "../components/header";
import Footer from "../components/footer";
import Chatbot from "../components/chatbot";
 import Link from "next/link";
import { useState } from "react";
export default function login(){
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    
  };
    return(
      <div>
  <Header />

  <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
    <form
      onSubmit={handleLogin}
      className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md sm:max-w-lg"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">Login</h2>
      <Link href="/signup">
        <p className="pb-5 text-sm sm:text-base text-center text-gray-600 hover:underline">Don't have an account?</p>
      </Link>

      <label className="block mb-2 text-sm font-medium">Email</label>
      <input
        type="email"
        className="w-full mb-4 px-4 py-2 border rounded text-sm sm:text-base"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label className="block mb-2 text-sm font-medium">Password</label>
      <input
        type="password"
        className="w-full mb-6 px-4 py-2 border rounded text-sm sm:text-base"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 text-sm sm:text-base"
      >
        Log In
      </button>
    </form>
  </div>

  <Chatbot />
  <Footer />
</div>

    )
}