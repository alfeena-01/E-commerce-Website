
import Link from 'next/link';
import Header from "./components/header";
import Chatbot from "./components/chatbot";
import Carousel from "./components/carouselgucci";
import Footer from "./components/footer";
import Subscribe from './components/subscribe';
export default function HomePage() {
  return (

      <div >
<Header/>
 <main >
   <div className="relative">
  <img
    src="https://ap.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2025/central/collections/travel-with-grace/Women_Travel_Grace_Coddington_HP_push_1209_DI3.jpg?wid=2400"
    alt=""
    className="w-full h-auto"
  />
  <div className="absolute inset-0 flex items-start justify-start mt-10 sm:mt-20 ml-6 sm:ml-16">
    <p className="text-white text-base sm:text-xl font-sans">
      <span className="text-3xl sm:text-5xl font-bold pb-3 block">Elevate your lifestyle</span>
      <span className="text-sm sm:text-xl font-sans block">
        with our handpicked selection of world-class luxury products,<br />
        curated for connoisseurs of refined taste.
      </span>
    </p>
  </div>
  <div className="absolute inset-0 flex items-end justify-end mb-6 sm:mb-10 mr-10 sm:mr-40">
    <Link href="/clothes ">
      <p className="text-white text-sm sm:text-md font-sans underline">Discover</p>
    </Link>
  </div>
</div>

<div>
  <span className="text-black text-lg sm:text-xl font-mono flex justify-center pt-10 underline hover:translate-x-2 transition-transform duration-500">
    TRENDING NOW
  </span>
</div>

<div className="flex flex-wrap justify-center items-start bg-white gap-8 py-5 px-4 sm:px-8 md:px-16 lg:px-20">
  <div className="overflow-hidden max-w-[200px] sm:max-w-[240px]">
    <Link href="/shoes">
      <img
        src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10503580/data/2a4bb0204cedf16b8f6d8d4845343ef4/3x4_four-columns/480/2025-09-17-ww-webapp-suede-non-app-pre-f-multibrand-multicategory-img.jpeg"
        alt=""
        className="transform transition-transform duration-300 hover:scale-110 w-full h-auto"
      />
    </Link>
    <span className="text-gray-500 text-sm sm:text-base block">Suede accessories</span>
  </div>

  <div className="overflow-hidden max-w-[200px] sm:max-w-[240px]">
    <Link href="/accessories">
      <img
        src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10503620/data/b8c5f0fea3ee0e0521e3c0b0c50d459f/3x4_four-columns/480/2025-09-17-ww-webapp-light-layers-pre-f-multibrand-multicategory-img.jpeg"
        alt=""
        className="transform transition-transform duration-300 hover:scale-110 w-full h-auto"
      />
    </Link>
    <span className="text-gray-500 text-sm sm:text-base block">Medusa Cat-Eye Sunglasses</span>
  </div>

  <div className="overflow-hidden max-w-[200px] sm:max-w-[240px]">
    <Link href="/clothing">
      <img
        src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10503586/data/957155f2460d7c5fd3a3f48a116e4a2d/3x4_four-columns/480/2025-09-17-ww-webapp-wardrobe-staples-pre-f-multibrand-multicategory-img.jpeg"
        alt=""
        className="transform transition-transform duration-300 hover:scale-110 w-full h-auto"
      />
    </Link>
    <span className="text-gray-500 text-sm sm:text-base block">Wardrobe Staples</span>
  </div>

  <div className="overflow-hidden max-w-[200px] sm:max-w-[240px]">
    <Link href="/brands">
      <img
        src="https://cdn-static.farfetch-contents.com/cms-ccloud/caas/v1/media/10503616/data/cbd11e0ffb7f9de4072b94e696ee6596/3x4_four-columns/480/2025-09-17-ww-webapp-emerging-brands-pre-f-jil-sander-multicategory-img.jpeg"
        alt=""
        className="transform transition-transform duration-300 hover:scale-110 w-full h-auto"
      />
    </Link>
    <span className="text-gray-500 text-sm sm:text-base block">Brands to Know</span>
  </div>
</div>

<div className="relative">
  <img
    src="https://us.louisvuitton.com/content/dam/lv/online/high-end/beauty/B_Beauty_LV_Hub_2025.html/jcr:content/assets/LV_OMBRES_FIN_IMAGE_15_BASE_FOND_BEIGE_MEMENTO_1920X1080_F300V3.jpg?imwidth=2400"
    alt=""
    className="w-full h-auto"
  />
  <div className="absolute inset-0 flex items-start justify-start mt-10 sm:mt-20 ml-6 sm:ml-16">
    <p className="text-white text-base sm:text-xl font-sans">
      <span className="text-xl sm:text-3xl font-semibold block">Now indulge in glamour</span><br />
      <span className="text-2xl sm:text-5xl font-bold block">shop premium cosmetics</span><br />
      <span className="text-lg sm:text-2xl font-sans block">that redefine style!</span>
    </p>
    
  </div>
   <div className="absolute inset-0 flex items-start justify-end mb-6 sm:mt-10 mr-10 sm:mr-40">
    <Link href="/cosmetics">
      <p className="text-white text-sm sm:text-md font-sans underline">Shop Now</p>
    </Link>
  </div>
</div>

 <Chatbot/>
<Subscribe/>
 </main>
<Footer/>
        </div>
      );
}
