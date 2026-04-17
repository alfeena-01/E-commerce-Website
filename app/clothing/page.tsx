import Footer from "../components/footer";
import Filter from "../components/sortfilter";
import Chatbot from "../components/chatbot";
import Link from "next/link";
import Header from "../components/header";
import Subscribe from '../components/subscribe';
export default function Clothing() {
  return (
    <div>
      <Header />
     <div>

  <div className="flex justify-center items-center h-20 bg-white">
    <span className="font-mono underline block hover:translate-x-2 text-xl transition-transform duration-500">
      Clothing
    </span>
  </div>


  <Filter />

  <div className="p-4 md:p-20">
    <div className="flex flex-wrap justify-center items-start gap-8 bg-white">
 
      <div className="w-full sm:w-60">
        <div className="relative w-full h-auto sm:h-75 sm:w-60">
          <Link href="/gucci1">
            <img src="/gucci1f.png" alt="First" className="w-full h-full object-cover" />
            <img
              src="/gucci1s.png"
              alt="Second"
              className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          </Link>
        </div>
        <span className="text-black font-bold">
          Gucci <br />
          <span className="text-gray-500">Textured wool tweed dress</span>
        </span>
        <div className="flex space-x-8 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

   
      <div className="w-full sm:w-60">
        <div className="relative w-full h-auto sm:h-75 sm:w-60">
          <img src="/gucci2f.png" alt="First" className="w-full h-full object-cover" />
          <img
            src="/gucci2s.png"
            alt="Second"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <span className="text-black font-bold">
          Gucci <br />
          <span className="text-gray-500">Tweed wool dress with emb..</span>
        </span>
        <div className="flex space-x-8 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

 
      <div className="w-full sm:w-60">
        <div className="relative w-full h-auto sm:h-75 sm:w-60">
          <img src="/gucci3f.png" alt="First" className="w-full h-full object-cover" />
          <img
            src="/gucci3s.png"
            alt="Second"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <span className="text-black font-bold">
          Gucci <br />
          <span className="text-gray-500">Wool boucle dress</span>
        </span>
        <div className="flex space-x-8 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full sm:w-60">
        <div className="relative w-full h-auto sm:h-75 sm:w-60">
          <img src="/gucci4f.png" alt="First" className="w-full h-full object-cover" />
          <img
            src="/gucci4s.png"
            alt="Second"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <span className="text-black font-bold">
          Gucci <br />
          <span className="text-gray-500">Printed silk twill shirt dress</span>
        </span>
        <div className="flex space-x-8 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full sm:w-60">
        <div className="relative w-full h-auto sm:h-75 sm:w-60">
          <img src="/gucci5f.png" alt="First" className="w-full h-full object-cover" />
          <img
            src="/gucci5s.png"
            alt="Second"
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        <span className="text-black font-bold">
          Gucci <br />
          <span className="text-gray-500">Satin dress with Double G belt</span>
        </span>
        <div className="flex space-x-8 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>
    </div>
  </div>

<div className="overflow-x-auto sm:overflow-x-hidden w-full bg-white py-4 px-2 sm:px-4">
  <div className="scroll-marquee flex flex-nowrap sm:whitespace-nowrap">
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">CLOTHING</span>
    </div>
  </div>
</div>


<div className="px-4 md:p-20">
  <div className="flex flex-wrap justify-center items-start gap-8 bg-white">
 
    <div className="w-full sm:w-60">
      <div className="relative w-full h-auto sm:h-75 sm:w-60">
        <img src="/gucci6f.png" alt="First" className="w-full h-full object-cover" />
        <img
          src="/gucci6s.png"
          alt="Second"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <span className="text-black font-bold">
        Gucci <br />
        <span className="text-gray-500">Stretch cotton knit dress</span>
      </span>
      <div className="flex space-x-8 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>


    <div className="w-full sm:w-60">
      <div className="relative w-full h-auto sm:h-75 sm:w-60">
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q75K/18D6F04RV/P3Q75K_18D6_F04RV_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="First"
          className="w-full h-full object-cover"
        />
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q75K/18D6F04RV/P3Q75K_18D6_F04RV_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="Second"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <span className="text-black font-bold">
        prada <br />
        <span className="text-gray-500">Mouliné wool dress</span>
      </span>
      <div className="flex space-x-8 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>


    <div className="w-full sm:w-60">
      <div className="relative w-full h-auto sm:h-75 sm:w-60">
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q60K/18DEF0002/P3Q60K_18DE_F0002_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="First"
          className="w-full h-full object-cover"
        />
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q60K/18DEF0002/P3Q60K_18DE_F0002_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="Second"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <span className="text-black font-bold">
        prada <br />
        <span className="text-gray-500">Short-sleeve chevron wool dress</span>
      </span>
      <div className="flex space-x-8 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>

    <div className="w-full sm:w-60">
      <div className="relative w-full h-auto sm:h-75 sm:w-60">
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q79K/18D4F0A0E/P3Q79K_18D4_F0A0E_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="First"
          className="w-full h-full object-cover"
        />
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q79K/18D4F0A0E/P3Q79K_18D4_F0A0E_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="Second"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <span className="text-black font-bold">
        prada <br />
        <span className="text-gray-500">Mouliné wool knit dress</span>
      </span>
      <div className="flex space-x-8 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>

 
    <div className="w-full sm:w-60">
      <div className="relative w-full h-auto sm:h-75 sm:w-60">
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q66K/18E7F0028/P3Q66K_18E7_F0028_S_OOO_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="First"
          className="w-full h-full object-cover"
        />
        <img
          src="https://www.prada.com/content/dam/pradabkg_products/P/P3Q/P3Q66K/18E7F0028/P3Q66K_18E7_F0028_S_OOO_MDF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
          alt="Second"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <span className="text-black font-bold">
        prada <br />
        <span className="text-gray-500">Floral print cloquet dress</span>
      </span>
      <div className="flex space-x-8 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>
  </div>
</div>
</div>
<Chatbot/>
<Subscribe/>
<Footer/>
</div>
)}


