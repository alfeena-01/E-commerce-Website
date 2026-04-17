import Footer from "../components/footer";
import Link from "next/link";
import Chatbot from "../components/chatbot";
import Subscribe from '../components/subscribe';
import Header from "../components/header";
import Filter from '../components/sortfilter';
export default function Accessories() {
  return (<div>
<Header/>
<div>
    <div className="flex justify-center items-center h-16 sm:h-20 bg-white">
  <span className="font-mono underline block hover:translate-x-2 text-lg sm:text-xl transition-transform duration-500">Accessories</span>
</div>

<Filter />

<div className="flex flex-wrap justify-center items-start bg-white gap-6 py-5 px-4 sm:px-20">
  <div className="overflow-hidden w-full sm:w-auto">
    <Link href="/belt">
      <img src="/belt1.png" alt="" className="transform transition-transform duration-300 hover:scale-110 h-64 sm:h-80 w-full sm:w-90 rounded-lg" />
    </Link>
    <span className="text-black font-bold block mt-2">
      Versace<br />
      <span className="text-gray-500 text-sm sm:text-base">Cheetah Foulard La Medusa</span>
    </span>
    <div className="flex space-x-4 mt-2">
      <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
      <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
    </div>
  </div>

  <div className="overflow-hidden w-full sm:w-auto">
    <Link href="/clothing">
      <img src="/glass1.png" alt="" className="transform transition-transform duration-300 hover:scale-110 h-64 sm:h-80 w-full sm:w-90 rounded-lg" />
    </Link>
    <span className="text-black font-bold block mt-2">
      Versace<br />
      <span className="text-gray-500 text-sm sm:text-base">Medusa Cat-Eye Sunglasses</span>
    </span>
    <div className="flex space-x-4 mt-2">
      <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
      <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
    </div>
  </div>

  <div className="overflow-hidden w-full sm:w-auto">
    <Link href="/clothing">
      <img src="/cap1.png" alt="" className="transform transition-transform duration-300 hover:scale-110 h-64 sm:h-80 w-full sm:w-90 rounded-lg" />
    </Link>
    <span className="text-black font-bold block mt-2">
      YSL<br />
      <span className="text-gray-500 text-sm sm:text-base">SAINT LAURENT CAP IN CASHMERE</span>
    </span>
    <div className="flex space-x-4 mt-2">
      <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
      <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
    </div>
  </div>
</div>

   <div className="overflow-x-auto sm:overflow-x-hidden w-full bg-white py-4 px-2 sm:px-4">
  <div className="scroll-marquee flex flex-nowrap whitespace-nowrap">
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">ACCESSORIES</span>
    </div>
  </div>
</div>


</div>


<Subscribe/>
<Chatbot/>
<Footer/>
</div>

  )}