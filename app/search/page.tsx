import Link from 'next/link';
import Footer from "../components/footer";
import Header from "../components/header";
import Subscribe from '../components/subscribe';
import Chatbot from "../components/chatbot";
export default function Search() {
  return (
   <div>
  <Header />

  <div className="flex justify-center items-center mt-12 mb-4 px-4">
    <form action="/search" method="GET" className="w-full max-w-3xl shadow-lg shadow-gray-300 rounded-lg">
      <div className="relative">
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm sm:text-base"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-3 py-1 rounded-lg hover:bg-gray-700 text-sm sm:text-base"
        >
          Search
        </button>
      </div>
    </form>
  </div>

  <span className="text-gray-400 text-lg sm:text-2xl flex justify-center items-center px-4 py-10 text-center">
    Find it, love it, and make it yours—start exploring our products today!
  </span>

  <div className="flex flex-wrap justify-center items-start gap-6 bg-white px-4 py-6">
    <div className="flex flex-col items-center">
      <Link href="/clothing">
        <img src="https://www.mytheresa.com/media/652/738/100/1f/P01074074.jpg" alt="clothing" className="w-28 h-28 sm:w-36 sm:h-36 cursor-pointer rounded-lg" />
      </Link>
      <h5 className="font-semibold mt-2 text-sm sm:text-base">Clothing</h5>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/shoes">
        <img src="https://www.mytheresa.com/media/1094/1238/100/74/P01096546.jpg" alt="shoes" className="w-28 h-28 sm:w-36 sm:h-36 cursor-pointer rounded-lg" />
      </Link>
      <h5 className="font-semibold mt-2 text-sm sm:text-base">Shoes</h5>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/bags">
        <img src="https://www.mytheresa.com/media/1094/1238/100/d5/P01106619.jpg" alt="bags" className="w-28 h-28 sm:w-36 sm:h-36 cursor-pointer rounded-lg" />
      </Link>
      <h5 className="font-semibold mt-2 text-sm sm:text-base">Bags</h5>
    </div>
    <div className="flex flex-col items-center">
      <Link href="/accessories">
        <img src="https://www.mytheresa.com/media/1094/1238/100/b9/P01042879.jpg" alt="accessories" className="w-28 h-28 sm:w-36 sm:h-36 cursor-pointer rounded-lg" />
      </Link>
      <h5 className="font-semibold mt-2 text-sm sm:text-base">Accessories</h5>
    </div>
  </div>

  <div className="flex flex-wrap justify-center items-start gap-6 bg-white border-t border-gray-300 px-4 py-10">
    <div className="max-w-xs text-center">
      <img src="https://www.mytheresa.com/content/80/80/30/909cd113-be1f-418a-9664-e9387dc767ce.png" alt="luxury" className="mx-auto mb-2 w-16 h-16" />
      <h6 className="font-semibold text-sm sm:text-base">The finest edit in luxury</h6>
      <p className="text-gray-400 text-sm">Finest edit of more than 200 international luxury brands</p>
    </div>
    <div className="max-w-xs text-center">
      <img src="https://www.mytheresa.com/content/80/80/30/22cb0ec6-e426-4579-a283-5e4705cce512.png" alt="collab" className="mx-auto mb-2 w-16 h-16" />
      <h6 className="font-semibold text-sm sm:text-base">Designer collaborations</h6>
      <p className="text-gray-400 text-sm">Exclusive capsule collections that you won't find anywhere else</p>
    </div>
    <div className="max-w-xs text-center">
      <img src="https://www.mytheresa.com/content/80/80/30/b579a4c8-dfa7-49d4-b719-f4f8b5453aa3.png" alt="delivery" className="mx-auto mb-2 w-16 h-16" />
      <h6 className="font-semibold text-sm sm:text-base">Fast delivery</h6>
      <p className="text-gray-400 text-sm">Delivery to over 130 countries</p>
    </div>
  </div>

  <Chatbot />
  <Subscribe />
  <Footer />
</div>

  )}