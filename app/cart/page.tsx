import Link from 'next/link';
import Footer from "../components/footer";
import Chatbot from "../components/chatbot";
import Header from "../components/header";
import Subscribe from '../components/subscribe';
export default function cart() {
  return (<div>
<Header/>
<div className="text-center mt-10 h-30 bg-white font-sans">
    <h2 className="text-black hover:text-gray-200 text-3xl  tracking-widest ">Cart <br /></h2>
</div>


<div  className="max-w-4xl mx-auto px-4 py-8">
 
  <div className="flex flex-col md:flex-row items-start md:items-center border-b pb-6 mb-6">
  
    <div className="w-full md:w-1/3 mb-4 md:mb-0">
      <img src="/gucci1f.png" alt="Wool silk top with vest overlay" className="w-full h-auto object-cover"/>
    </div>

    <div className="w-full md:w-2/3 md:pl-6">
      <h2 className="text-lg font-semibold mb-2">Textured wool tweed dress</h2>
      <p className="text-sm text-gray-600 mb-1">Style # ‎828772 XKEVM 1036</p>
      <p className="text-sm text-gray-600 mb-1">Color: Cream</p>
      <p className="text-sm text-gray-600 mb-1">Size: S</p>

  
      <label htmlFor="quantity" className="text-sm text-gray-600 mb-1 block">Qty:</label>
      <select id="quantity" name="quantity" className="border border-gray-300 rounded px-2 py-1 text-sm w-20 mb-2 focus:outline-none focus:ring-1 focus:ring-black">
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <p className="text-base font-semibold mt-2">&#8377;29,800</p>
      <p className="text-xs text-gray-500 mt-1">AVAILABLE — Enjoy complimentary delivery or Collect In Store.</p>

     
      <div className="flex space-x-4 mt-4">
        <button className="text-sm underline text-black hover:text-gray-700">Edit</button>
        <button className="text-sm underline text-black hover:text-gray-700">Remove</button>
        <button className="text-sm underline text-black hover:text-gray-700">Save</button>
      </div>

    
      <div className="mt-6">
        <button className="text-sm uppercase tracking-wide border border-black px-4 py-2 hover:bg-black hover:text-white transition">
          View Details
        </button>
      </div>
    </div>
  </div>
</div>



<div className="max-w-4xl mx-auto px-4 py-8">

  <div className="flex justify-end mb-6">
    <button className="bg-black text-white px-6 py-3 text-sm uppercase tracking-wide hover:bg-gray-800 transition">
      Checkout
    </button>
  </div>

 
  <div className="mb-8">
    <p className="text-sm text-gray-600">Or Pay with</p>
    <div className="flex space-x-4 mt-2">
      <img src="https://toppng.com/public/uploads/preview/apple-pay-logo-11563206321dtmtsc1k8f.png" alt="Apple Pay" className="h-8 w-8"/>
      <img src="https://toppng.com/uploads/preview/google-pay-gpay-logo-11530962961mwws81tde9.png" alt="Google Pay" className="h-8 w-8"/>
      <img src="https://th.bing.com/th/id/OIP.TiqzEcqQQ077CzwEemN24QHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="PayPal" className="h-8 w-8"/>
    </div>
  </div>

 
  <hr className="my-8 border-gray-300"/>

 
  <h2 className="text-lg font-semibold mb-4">You May Also Like</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
   
    <div className="border p-4 hover:shadow-lg transition">
      <img src="/gucci2f.png" alt="Polo top with striped trim" className="w-full h-auto mb-2"/>
      <p className="text-sm text-gray-700">Tweed wool dress with embroidery</p>
      <p className="text-sm font-semibold">&#8377;22,000</p>
      <button className="mt-2 text-xs text-black underline">Shop This</button>
    </div>

    <div className="border p-4 hover:shadow-lg transition">
      <img src="/gucci3f.png" alt="Cashmere wool cardigan with Horsebit" className="w-full h-auto mb-2"/>
      <p className="text-sm text-gray-700">Wool boucle dress</p>
      <p className="text-sm font-semibold">&#8377;29,800</p>
      <button className="mt-2 text-xs text-black underline">Shop This</button>
    </div>

    <div className="border p-4 hover:shadow-lg transition">
      <img src="/gucci5f.png" alt="Cashmere silk cardigan" className="w-full h-auto mb-2"/>
      <p className="text-sm text-gray-700">Satin dress with Double G belt</p>
      <p className="text-sm font-semibold">&#8377;22,000</p>
      <button className="mt-2 text-xs text-black underline">Shop This</button>
    </div>

    <div className="border p-4 hover:shadow-lg transition">
      <img src="/gucci6f.png" alt="Fine cotton crewneck cardigan" className="w-full h-auto mb-2"/>
      <p className="text-sm text-gray-700">Stretch cotton knit dress</p>
      <p className="text-sm font-semibold">&#8377;25,000</p>
      <button className="mt-2 text-xs text-black underline">Shop This</button>
    </div>
  </div>
</div>

<div className="flex justify-center items-center h-60 bg-white space-x-8 border-t border-gray-400">

  <div className="flex flex-col items-center text-center max-w-xs">
    <img
      src="https://www.mytheresa.com/content/80/80/30/909cd113-be1f-418a-9664-e9387dc767ce.png"
      alt="Luxury Edit"
      className="h-12 mb-2"
    />
    <h6 className="text-sm font-medium">The finest edit in luxury</h6>
    <p className="text-sm text-gray-400">
      Finest edit of more than 200 international luxury brands
    </p>
  </div>

  <div className="flex flex-col items-center text-center max-w-xs">
    <img
      src="https://www.mytheresa.com/content/80/80/30/22cb0ec6-e426-4579-a283-5e4705cce512.png"
      alt="Designer Collaborations"
      className="h-12 mb-2"
    />
    <h6 className="text-sm font-medium">Designer collaborations</h6>
    <p className="text-sm text-gray-400">
      Exclusive capsule collections that you won't find anywhere else
    </p>
  </div>

  <div className="flex flex-col items-center text-center max-w-xs">
    <img
      src="https://www.mytheresa.com/content/80/80/30/b579a4c8-dfa7-49d4-b719-f4f8b5453aa3.png"
      alt="Fast Delivery"
      className="h-12 mb-2"
    />
    <h6 className="text-sm font-medium">Fast delivery</h6>
    <p className="text-sm text-gray-400">Delivery to over 130 countries</p>
  </div>
</div>

<div>
  <div></div>
</div>
<Chatbot/>
<Subscribe/>
<Footer/>
  </div>

  )}
