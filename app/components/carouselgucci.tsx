import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";


export default function Carousel() {
  return (
    <div className="overflow-x-auto whitespace-nowrap w-full py-4">
      <div className="flex animate-slide w-[300%]">


      <div className="relative inline-block w-full h-160 bg-gray-200 mx-2 rounded-lg align-top">
        <img src="https://www.prada.com/content/dam/pradaspa/home_page/2025/09/New_HP/galleria/Hero_DT.jpg/_jcr_content/renditions/cq5dam.web.3360.3360.jpg" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
         <div className="absolute inset-0 flex items-center justify-center mb-6 sm:mb-10 mr-10 sm:mr-40">
    <Link href="/clothes ">
      <p className="text-white sm:text-2xl text-sm sm:text-md font-semibold">Luxury isn't a label-it's a lifestyle.</p>
    </Link>
  </div>
      </div>
      <div className="relative inline-block w-full h-160 bg-gray-300 mx-2 rounded-lg align-top">
        <img src="https://media.gucci.com/dynamic/b3c8/OYzH9MTEPLAVpNle_lKydMFXgJk3snPxk2tQ6kfCrVGdFHv4ftgzVxajUd5iczxLXrO5fRr9f4logFqxtsVT71Jb5sPwrnobWHZi_COi_BazRzKlPNlaMWyorRxoL5rPVLxFFwhXNJIZOY9UVPvnS1G+uuH_PV_6hL9rMmswv2IPvYSQW4NNkYneGPRGKrrZlXWbHunzT54E+xZi6TIRduh8XiIEGXGVnU2_rPoZoD8=/Shift_Hero_4000x2250.jpg" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
         <div className="absolute inset-0 flex items-center justify-center mb-6 sm:mb-10 mr-10 sm:mr-40">
    <Link href="/clothes ">
      <p className="text-white sm:text-2xl text-sm sm:text-md font-semibold ">Step into a world where elegance is effortless.</p>
    </Link>
  </div>
      </div>
      <div className="relative inline-block w-full h-160 bg-gray-400 mx-2 rounded-lg align-top">
        <img src="https://www.chanel.com/puls-img/c_limit,w_2400/q_auto:good,dpr_auto,f_auto/1748873213827-onehpcorpodslidinghero5760x2520pxjpg_2520x5760.jpg" alt="Image 3" className="w-full h-full object-cover rounded-lg" />
         <div className="absolute inset-0 flex items-center justify-center mb-6 sm:mb-10 mr-10 sm:mr-40">
    <Link href="/clothes ">
      <p className="text-white sm:text-2xl text-sm sm:text-md font-semibold">Accessories that speak louder than words.</p>
    </Link>
  </div>
      </div>
      </div>
     
    </div>
  );
}