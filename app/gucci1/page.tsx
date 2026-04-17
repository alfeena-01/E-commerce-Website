import Footer from "../components/footer";
import Link from "next/link";
import Chatbot from "../components/chatbot";
import Subscribe from '../components/subscribe';
import Header from "../components/header";

export default function Gucci1() {
  return (<div>
<Header/>
<div className="flex flex-col lg:flex-row rounded px-4 py-8">

  <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start lg:h-[500px]">
    <img
      src="/gucci1f.png"
      alt="Front view"
      className="w-full sm:w-1/2 h-full object-cover mb-4 sm:mb-0"
    />
    <img
      src="/gucci1s.png"
      alt="Side view"
      className="w-full sm:w-1/2 h-full object-cover"
    />
  </div>


  <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 flex flex-col justify-center">
    <p>
      <span className="text-black font-semibold text-xl sm:text-2xl block">Textured wool tweed dress</span>
      <span className="text-gray-600 text-lg sm:text-xl block">₹29,800</span>
      <span className="text-gray-400 text-sm sm:text-base block">All taxes and duties included</span>
    </p>

    <img
      src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
      alt="Wishlist"
      className="w-8 h-8 sm:w-9 sm:h-9 mt-5 cursor-pointer"
    />

    <button
      type="submit"
      className="w-full sm:w-64 bg-black text-white py-3 mt-6 rounded hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  </div>
</div>
<div className="flex flex-wrap px-4 sm:px-0 mt-10">
  <div className="w-full sm:w-1/2 mt-6">
    <h3 className="font-semibold text-lg sm:text-xl ml-2 sm:ml-8">Details</h3>
    <ul className="ml-4 sm:ml-12 mb-5 text-sm sm:text-base list-disc space-y-1">
      <li>Ivory textured wool tweed</li>
      <li>Self-covered gold-toned Double G buttons</li>
      <li>Lined</li>
      <li>Crewneck</li>
      <li>Short sleeves</li>
      <li>Two side pockets with button closure</li>
      <li>Button closure</li>
      <li>Made in Italy</li>
    </ul>
  </div>
</div>
<Subscribe/>
<Chatbot/>
<Footer/>
</div>
  )}
    


        
