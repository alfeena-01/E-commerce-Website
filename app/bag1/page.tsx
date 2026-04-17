import Footer from "../components/footer";
import Link from "next/link";
import Chatbot from "../components/chatbot";
import Subscribe from '../components/subscribe';
import Header from "../components/header";

export default function bags() {
  return (<div>
<Header/>
<div className="flex flex-wrap space-x-0 sm:space-x-8 rounded px-4 sm:px-0">
  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
    <div>
      <img src="https://balenciaga.dam.kering.com/asset/cf16fe18-5f3c-4d56-b5eb-e5d890136d91/Large/7897792AB4G2533_F.jpg?v=1" alt="" className="w-full sm:w-[180px] h-auto sm:h-[120px]" />
    </div>
    <div>
      <img src="https://balenciaga.dam.kering.com/asset/4a5830f8-7bcc-4df6-be44-b69222a0b0e8/Large/7897792AB4G2533_J.jpg?v=1" alt="" className="w-full sm:w-[100px] h-auto" />
    </div>
  </div>

  <div className="mt-10 sm:mt-20 w-full sm:w-auto">
    <p>
      <span className="text-black font-bold text-xl sm:text-2xl block">Women's Rodeo Handbag Small in Camel</span>
      <span className="text-gray-600 text-lg sm:text-xl block">₹ 15865</span>
      <span className="text-gray-400 text-lg sm:text-xl block">All taxes and duties included</span>
    </p>
    <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="" className="w-7 sm:w-9 h-7 sm:h-9 mt-5" />
    <button
      type="submit"
      className="w-full sm:w-[100px] bg-black text-white py-3 sm:py-5 mt-6 sm:mt-10 rounded hover:bg-gray-200"
    >
      Add to Cart
    </button>
  </div>
</div>

<div className="flex flex-wrap px-4 sm:px-0">
  <div className="w-full sm:w-1/2 mt-6">
    <span className="font-semibold text-lg sm:text-xl ml-2 sm:ml-8 block">Details</span>
    <p className="ml-4 sm:ml-12 mb-5 text-sm sm:text-base">
      • Dimensions: L10.6 x H7.9 x W3.9 inch <br />
      • Waxed suede calfskin and smooth calfskin <br />
      • Handbag <br />
      • One handle (drop: 7.3 inch) <br />
      • Removable shoulder strap (drop: 22.2 inch) <br />
      • Removable leather keyring with two split rings <br />
      • Aged-silver hardware <br />
      • Turn lock closure <br />
      • Wide front pocket <br />
      • 1 main compartment <br />
      • 1 inner zipped pocket <br />
      • 2 flat pockets at back <br />
      • Side snaps <br />
      • 4 brass feet <br />
      • Nappa lambskin lining <br />
      • Made in Italy <br />
      Material: calfskin <br />
      Product ID: 7897792AB4G2533
    </p>
  </div>

  <div className="w-full sm:w-1/2 mt-6">
    <span className="font-semibold text-lg sm:text-xl ml-2 sm:ml-10 block">SIZE & FIT</span>
    <p className="ml-4 sm:ml-14 mb-5 text-sm sm:text-base">Can fit a smartphone, a book and a small tablet</p>
  </div>
</div>

<Subscribe/>
<Chatbot/>
<Footer/>
</div>
  )}