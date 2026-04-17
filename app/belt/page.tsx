import Footer from "../components/footer";
import Link from "next/link";
import Chatbot from "../components/chatbot";
import Subscribe from '../components/subscribe';
import Header from "../components/header";

export default function Belt() {
  return (<div>
<Header/>
<div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 rounded p-4">

  <div className="flex-shrink-0">
    <img src="/belt1.png" alt="Cheetah Foulard La Medusa Leather Belt" className="rounded" />
  </div>

 
  <div className="flex flex-col justify-center sm:mt-20">
    <h2 className="text-black font-bold text-2xl">
      Cheetah Foulard La Medusa Leather Belt 1.2
    </h2>
    <p className="text-gray-600 text-xl mt-2">₹ 59,300</p>
    <p className="text-gray-400 text-xl">All taxes and duties included</p>
    <p className="text-base mt-2">Color: <span className="font-medium">Gold+Print</span></p>

 
    <img
      src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
      alt="Add to Wishlist"
      className="w-9 h-9 mt-5 cursor-pointer"
    />


    <button
      type="submit"
      className="bg-black text-white py-3 px-6 mt-10 rounded hover:bg-gray-800 transition-colors"
    >
      Add to Cart
    </button>
  </div>
</div>


<div className="flex flex-wrap px-4 sm:px-0 mt-10">
 
  <div className="w-full sm:w-1/2 mt-6">
    <h3 className="font-semibold text-lg sm:text-xl ml-2 sm:ml-8">Details</h3>
    <ul className="ml-4 sm:ml-12 mb-5 text-sm sm:text-base list-disc">
      <li>Cheetah Foulard print</li>
      <li>La Medusa hardware</li>
      <li>Belt loop</li>
      <li>Pin buckle closure</li>
      <li>Outer Composition: 100% Calf Leather</li>
    </ul>
  </div>

  
  <div className="w-full sm:w-1/2 mt-6">
    <h3 className="font-semibold text-lg sm:text-xl ml-2 sm:ml-10">Size & Fit</h3>
    <p className="ml-4 sm:ml-14 mb-5 text-sm sm:text-base">Height: 3 cm</p>
  </div>
</div>



<Subscribe/>
<Chatbot/>
<Footer/>
</div>
  )}