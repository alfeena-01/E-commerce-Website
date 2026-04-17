import Link from 'next/link';
import Footer from "../components/footer";
import Chatbot from "../components/chatbot";
import Subscribe from '../components/subscribe';
import Header from "../components/header";
import Filter from '../components/sortfilter';
export default function bags() {
  return (<div>
<Header/>
<div>
     <div className="flex justify-center items-center h-20 bg-white ">
          <span className="font-mono underline block hover:translate-x-2 text-xl transition-transform duration-500 ">Bags</span>
        </div>
<Filter/>

<div>
  <div className="px-4 sm:p-20">
    <div className="flex flex-wrap justify-center items-start gap-6 bg-white py-5">
      
      {/* Card 1 */}
      <div className="w-full sm:w-60">
        <Link href="/bag1">
          <div className="relative w-full h-64 sm:h-75">
            <img
              src="https://balenciaga.dam.kering.com/asset/dda1e061-a4d6-4627-858f-639c0f3409ab/Small/7897792AB4G2533_Y.jpg?v=1"
              alt="b1"
              className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
            />
          </div>
          <span className="text-black font-bold block mt-2">
            Balenciaga <br />
            <span className="text-gray-500 text-sm sm:text-base">Rodeo HandBag Small</span>
          </span>
          <div className="flex space-x-4 mt-2">
            <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
            <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
          </div>
        </Link>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-60">
        <div className="relative w-full h-64 sm:h-75">
          <img
            src="https://balenciaga.dam.kering.com/m/7955ca8d12eea870/Small-7897442AA4U1000_X.jpg?v=2"
            alt="b1"
            className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
          />
        </div>
        <span className="text-black font-bold block mt-2">
          Balenciaga <br />
          <span className="text-gray-500 text-sm sm:text-base">Rodeo HandBag Large</span>
        </span>
        <div className="flex space-x-4 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

      <div className="w-full sm:w-60">
        <div className="relative w-full h-64 sm:h-75">
          <img
            src="https://balenciaga.dam.kering.com/m/63f566199e873047/Small-8264192ABNQ1000_X.jpg?v=2"
            alt="b1"
            className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
          />
        </div>
        <span className="text-black font-bold block mt-2">
          Balenciaga <br />
          <span className="text-gray-500 text-sm sm:text-base">Carrie Carry All Bag</span>
        </span>
        <div className="flex space-x-4 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full sm:w-60">
        <div className="relative w-full h-64 sm:h-75">
          <img
            src="https://balenciaga.dam.kering.com/asset/7058f794-3845-44a0-b70c-7736608978e8/Small/8141112ABKX6036_X.jpg?v=2"
            alt="b1"
            className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
          />
        </div>
        <span className="text-black font-bold block mt-2">
          Balenciaga <br />
          <span className="text-gray-500 text-sm sm:text-base">Rodeo Sling Pochette</span>
        </span>
        <div className="flex space-x-4 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

      {/* Card 5 */}
      <div className="w-full sm:w-60">
        <div className="relative w-full h-64 sm:h-75">
          <img
            src="https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1746806508/836848_FAE0J_9867_001_084_0000_Light.jpg"
            alt="gb1"
            className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
          />
        </div>
        <span className="text-black font-bold block mt-2">
          Gucci <br />
          <span className="text-gray-500 text-sm sm:text-base">Gucci Giglio small tote bag</span>
        </span>
        <div className="flex space-x-4 mt-2">
          <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
          <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
        </div>
      </div>

    </div>
  </div>
</div>

<div className="overflow-x-auto sm:overflow-x-hidden w-full bg-white py-4 px-2 sm:px-4">
  <div className="scroll-marquee flex flex-nowrap whitespace-nowrap">
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
    <div className="inline-block w-40 sm:w-64 h-8 bg-white mx-1">
      <span className="text-gray-500 text-sm sm:text-base">BAGS</span>
    </div>
  </div>
</div>



    <div className="px-4 sm:p-20">
  <div className="flex flex-wrap justify-center items-start gap-6 bg-white py-5">
    
    {/* Card 1 */}
    <div className="w-full sm:w-60">
      <div className="relative w-full h-64 sm:h-75">
        <img
          src="https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1733766306/655661_FAEB4_9767_001_058_0000_Light.jpg"
          alt="b1"
          className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
        />
      </div>
      <span className="text-black font-bold block mt-2">
        Gucci <br />
        <span className="text-gray-500 text-sm sm:text-base">Diana small tote bag</span>
      </span>
      <div className="flex space-x-4 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>

    {/* Card 2 */}
    <div className="w-full sm:w-60">
      <div className="relative w-full h-64 sm:h-75">
        <img
          src="https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1564565408/598125_9IK3T_8745_001_080_0000_Light.jpg"
          alt="b1"
          className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
        />
      </div>
      <span className="text-black font-bold block mt-2">
        Gucci <br />
        <span className="text-gray-500 text-sm sm:text-base">Ophidia medium shoulder bag</span>
      </span>
      <div className="flex space-x-4 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>

    {/* Card 3 */}
    <div className="w-full sm:w-60">
      <div className="relative w-full h-64 sm:h-75">
        <img
          src="https://media.gucci.com/style/HEXFBFBFB_South_0_160_640x640/1756741516/860845_FAFRW_8864_001_082_0000_Light.jpg"
          alt="b1"
          className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
        />
      </div>
      <span className="text-black font-bold block mt-2">
        Gucci <br />
        <span className="text-gray-500 text-sm sm:text-base">Gucci Giglio small tote bag</span>
      </span>
      <div className="flex space-x-4 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>

    {/* Card 4 */}
    <div className="w-full sm:w-60">
      <div className="relative w-full h-64 sm:h-75">
        <img
          src="https://assets.christiandior.com/is/image/diorprod/M0613OWCBM42R_E01?$default_GHC$&crop=317,751,1329,1065&wid=1024&hei=1107&scale=0.4843&bfc=on&qlt=85"
          alt="b1"
          className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
        />
      </div>
      <span className="text-black font-bold block mt-2">
        Dior <br />
        <span className="text-gray-500 text-sm sm:text-base">Small Lady D-Joy Bag</span>
      </span>
      <div className="flex space-x-4 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>

    {/* Card 5 */}
    <div className="w-full sm:w-60">
      <div className="relative w-full h-64 sm:h-75">
        <img
          src="https://assets.christiandior.com/is/image/diorprod/M0455CBAAM42R_E01?$default_GHC$&crop=379,108,1274,1846&wid=1024&hei=1107&scale=0.4843&bfc=on&qlt=85"
          alt="gb1"
          className="w-full h-full object-cover rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(128,128,128,0.7)]"
        />
      </div>
      <span className="text-black font-bold block mt-2">
        Dior <br />
        <span className="text-gray-500 text-sm sm:text-base">Saddle Bag with Strap</span>
      </span>
      <div className="flex space-x-4 mt-2">
        <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 h-6" />
        <img src="https://cdn3.iconfinder.com/data/icons/social-media-2125/77/heart-128.png" alt="like" className="w-6 h-6" />
      </div>
    </div>

  </div>
</div>

</div>
<Chatbot/>
<Subscribe />
<Footer/>
  </div>   
 
  );
  
  }