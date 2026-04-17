import Footer from "../components/footer";
import Link from "next/link";
import Chatbot from "../components/chatbot";
import Subscribe from '../components/subscribe';
import Header from "../components/header";

export default function Gucci1() {
  return (<div>
<Header/>
<div className="flex flex-col lg:flex-row rounded px-4 py-8">

  <div className="w-full lg:w-1/2 flex flex-col sm:flex-row sm:space-x-4 justify-center lg:justify-start lg:h-[550px]">
    <img
      src="https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/1/2/1250939b439-1250939b439-main_image-ecommerce-christianlouboutin-missz-1250939_b439_1_1200x1200.jpg"
      alt="Front view"
      className="w-full sm:w-1/1.5 h-full object-cover mb-4 sm:mb-0"
    />
  </div>


  <div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 flex flex-col justify-center">
    <p>
      <span className="text-black font-semibold text-xl sm:text-2xl block">Miss z</span>
      <span className="text-gray-600 text-lg sm:text-xl block">₹12,000</span>
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
    <p className="ml-4 sm:ml-12 mb-5 text-sm sm:text-base list-disc space-y-1">
      The tapered silhouette of the Miss Z pump offers sophistication. Set on an 80 mm stiletto heel that reveals the Loubi red of the iconic sole, and featuring a padded insole, this Maison Christian Louboutin model is made from black patent calf leather. This model features a new 'Everlasting Red' sole thanks to an innovative coating technique that ensures resistance and lasting vibrancy for our signature Louboutin red.
    </p>
  </div>
</div>
<Subscribe/>
<Chatbot/>
<Footer/>
</div>
  )}
    