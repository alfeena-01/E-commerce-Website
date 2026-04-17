import Footer from "../components/footer";
import Chatbot from "../components/chatbot";
import Subscribe from '../components/subscribe';
import Header from "../components/header";
import Filter  from "../components/sortfilter";
import Link from "next/link";
export default function Shoes() {
  return (<div>
<Header/>

 <div className="flex justify-center items-center h-20 bg-white  ">
          <span className="font-mono underline block hover:translate-x-2 text-xl transition-transform duration-500 ">Shoes</span>
        </div>
<Filter/>
<div className="mt-10 bg-white flex flex-col md:flex-row flex-wrap justify-center items-center space-y-10 md:space-y-0 md:space-x-10 py-5 px-4 sm:px-8 md:px-16 lg:px-20">
 <Link href="/shoes1">
 <div>
    <img
      src="https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/1/2/1250939b439-1250939b439-main_image-ecommerce-christianlouboutin-missz-1250939_b439_1_1200x1200.jpg"
      alt="1"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      ChristianLouboutin<br />
      <span className="text-gray-500">Miss Z</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div></Link>

  <div>
    <img
      src="https://us.christianlouboutin.com/media/catalog/product/cache/e88e85f4e5336c618abbd9e5f93aeaf8/3/1/3190048w222-3190048w222-main_image-ecommerce-christianlouboutin-kate-3190048_w222_1_1200x1200.jpg"
      alt="2"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      ChristianLouboutin<br />
      <span className="text-gray-500">Kate</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>

  <div>
    <img
      src="https://www.prada.com/content/dam/pradabkg_products/2/2WE/2WE004/V69F0324/2WE004_V69_F0324_F_X000_SLS.jpg/_jcr_content/renditions/cq5dam.web.hebebed.1680.1680.jpg"
      alt="3"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      Prada<br />
      <span className="text-gray-500">Antique leather boots</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>

  <div>
    <img
      src="https://www.prada.com/content/dam/pradabkg_products/2/2EE/2EE448/3LREF0K74/2EE448_3LRE_F0K74_F_G001_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg"
      alt="3"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      Prada<br />
      <span className="text-gray-500">Aged-effect leather..</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>

  <div>
    <img
      src="https://valentino-cdn.thron.com/delivery/public/image/valentino/b4706b0a-8585-475c-b14c-00c76ec0a7b1/ihqstx/std/631x0/Fawcette-Platform-Ankle-Boot-in-Calfskin-90mm?quality=80&size=35&format=auto"
      alt="3"
      className="w-60 h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      Valentino<br />
      <span className="text-gray-500">Fawcette Platform Ankle Boot..</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>
</div>

<div className="overflow-x-hidden w-full bg-white py-4 sm:py-6 md:py-8">
  <div className="scroll-marquee flex whitespace-nowrap overflow-x-auto px-2 sm:px-4 md:px-8">
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">SHOES</span>
    </div>
  </div>
</div>
<div className="mt-10 bg-white flex flex-col md:flex-row flex-wrap justify-center items-center space-y-10 md:space-y-0 md:space-x-10 mb-10 px-4 sm:px-8 md:px-16 lg:px-20 py-5">
  <div>
    <img
      src="https://saint-laurent.dam.kering.com/m/663aaf7514e31627/Medium2-8500721TVAN1000_A.jpg?v=1"
      alt="1"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      YSL<br />
      <span className="text-gray-500">AMALIA slingback pumps..</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>

  <div>
    <img
      src="https://saint-laurent.dam.kering.com/m/79f1ae225bb06899/Medium-809284AADF01000_A.jpg?v=1"
      alt="2"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      YSL<br />
      <span className="text-gray-500">ASHLEY booties in smooth..</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>

  <div>
    <img
      src="https://saint-laurent.dam.kering.com/m/1168902cc8d9a1d9/Medium-840277AAE8T1000_A.jpg?v=4"
      alt="3"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      YSL<br />
      <span className="text-gray-500">ALAIN slippers in smooth..</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>

  <div>
    <img
      src="https://assets.burberry.com/is/image/Burberryltd/18DAF07C-7246-4D30-BDFC-3223348F199C?$BBY_V3_SL_1$&wid=2500&hei=2500"
      alt="3"
      className="w-full max-w-[300px] h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      Burberry<br />
      <span className="text-gray-500">Check Dame Pumps</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>

  <div>
    <img
      src="https://balenciaga.dam.kering.com/m/16a81273c0514f2f/Large-846238WBFC12200_F.jpg?v=1"
      alt="3"
      className="w-60 h-60 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      Balenciaga<br />
      <span className="text-gray-500">Women's Fargo Boot in Brown</span>
    </span>
    <div className="flex space-x-8">
      <img
        src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png"
        alt="cart"
        className="w-6 h-6"
      />
      <img
        src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png"
        alt="like"
        className="w-6 h-6"
      />
    </div>
  </div>
</div>

<Chatbot/>
<Subscribe/>
<Footer/>
  </div>
    )}