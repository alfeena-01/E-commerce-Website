import Link from "next/link";
import Header from "../components/header";
import Subscribe from "../components/subscribe";
import Filter from "../components/sortfilter";
import Chatbot from "../components/chatbot";
import Footer from "../components/footer";



export default function NewInPage() {
  return (
   <div>
  <Header />
  <div>
    <div className="flex justify-center items-center h-20 bg-white">
      <span className="font-mono underline block hover:translate-x-2 text-xl transition-transform duration-500">
        New In
      </span>
    </div>

    <Filter />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8 md:px-16 lg:px-40">
      <div className="overflow-hidden">
        <Link href="/belt">
          <img
            src="/belt1.png"
            alt=""
            className="transform transition-transform duration-300 hover:scale-110 h-80 w-full max-w-[360px] rounded-lg"
          />
        </Link>
        <span className="text-black bold">
          Versace<br />
          <span className="text-gray-500">Cheetah Foulard La Medusa</span>
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
          src="https://www.dior.com/dw/image/v2/BGXS_PRD/on/demandware.static/-/Sites-master_dior/default/dw12e7ca5b/Y0997166/Y0997166_C099700897_E01_RHC.jpg?sw=1024"
          alt="3"
          className="w-full max-w-[360px] h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
        />
        <span className="text-black bold">
          Dior<br />
          <span className="text-gray-500">Miss Dior Parfum</span>
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

      <Link href="/gucci1">
        <div>
          <img
            src="/gucci1f.png"
            alt="3"
            className="w-full max-w-[360px] h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
          />
          <span className="text-black bold">
            Gucci<br />
            <span className="text-gray-500">Textured wool tweed dress</span>
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
      </Link>
    </div>

<div className="overflow-x-hidden w-full bg-white py-4 sm:py-6 md:py-8">
  <div className="scroll-marquee flex whitespace-nowrap overflow-x-auto px-2 sm:px-4 md:px-8">
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
    <div className="inline-block w-48 sm:w-56 md:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">NEW IN</span>
    </div>
  </div>
</div>

     <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-16 lg:px-40 space-y-8 md:space-y-0 md:space-x-8 pb-5">
  <div className="overflow-hidden">
    <Link href="">
      <img
        src="https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1564565408/598125_9IK3T_8745_001_080_0000_Light.jpg"
        alt=""
        className="transform transition-transform duration-300 hover:scale-110 h-80 w-full max-w-[360px] rounded-lg"
      />
    </Link>
    <span className="text-black bold">
      Gucci<br />
      <span className="text-gray-500">Ophidia medium shoulder bag</span>
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
      src="https://assets.christiandior.com/is/image/diorprod/M0455CBAAM42R_E01?$default_GHC$&crop=379,108,1274,1846&wid=1024&hei=1107&scale=0.4843&bfc=on&qlt=85"
      alt="3"
      className="w-full max-w-[360px] h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      Dior<br />
      <span className="text-gray-500">Saddle Bag with Strap</span>
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
      src="/gucci5f.png"
      alt="3"
      className="w-full max-w-[360px] h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-115"
    />
    <span className="text-black bold">
      Gucci<br />
      <span className="text-gray-500">Satin dress with Double G belt</span>
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


      </div>
      <Subscribe/>
      <Chatbot/>
      <Footer/>

    </div>
  );
}   