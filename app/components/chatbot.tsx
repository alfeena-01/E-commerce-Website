
"use client";
import { useState } from "react";

export default function Chatbot() {
      const [open, setOpen] = useState(false);
  return (
<div className="fixed bottom-5 right-5 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white p-4 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
      {open && (
        <div className="w-80 bg-white shadow-xl rounded-lg p-4 border">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold">Chat with us</h2>
            <button onClick={() => setOpen(false)} className="text-xl"><img src="https://cdn1.iconfinder.com/data/icons/creative-commons-5/20/outline_miscellaneous-close-128.png" alt="" className="h-6 w-6" /></button>
          </div>
          <p className="text-sm mb-3">👋 Hi, message us with any questions. We're happy to help!</p>
          <input
            type="text"
            placeholder="Write message"
className="w-full border rounded px-2 py-1 mb-2"
          />
          <div className="text-sm font-semibold mb-1">Instant answers</div>
          <button className="w-full border rounded py-1 hover:bg-gray-100">Track my order</button>
        </div>
      )}
    </div>
  );
}
