import Link from 'next/link';
import Footer from "../components/footer";
import Chatbot from "../components/chatbot";
import Header from "../components/header";
import Subscribe from '../components/subscribe';
export default function brands() {
  return (<div>
<Header/>
<div className=' h-30 bg-white w-350 pl-35 pt-10 '>
  <p className='text-gray-400'> <span className='font-bold text-gray-600'>Discover</span> our curated collection of world-renowned luxury brands, each representing the pinnacle of style and craftsmanship. Explore the latest arrivals and timeless classics to elevate your wardrobe with elegance and sophistication.</p> </div>
   <div className='flex h-130 bg-white space-x-5 '> 
    <div> <img src="https://www.shutterstock.com/image-photo/fashionable-confident-woman-wearing-elegant-600nw-2256187301.jpg" alt="img1" className="w-190 h-130 rounded-md" /> </div> 
    <div > <div className='flex space-x-10 '>
       <div className='pt-10 pl-30'> 
        <Link href="/gucci"><img src="https://th.bing.com/th/id/R.fb3df8963e6b65915b7eddfc982e67d4?rik=62UrxC945bLl%2bw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgucci-logo-png-download-1920.png&ehk=TuCrZgGH01I%2f9q%2bTMdh6hSyJeW1umQNiwa6bmGXVUxU%3d&risl=&pid=ImgRaw&r=0" alt="gucci" className='w-50 h-50 cursor-pointer' /></Link>
         </div>
   <div><Link href="/"><img src="https://www.bing.com/th/id/OIP.SLl9dwBhmat8XH4WsYl6oAHaEK?w=285&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="chanel" className='w-80 h-78 cursor-pointer'/></Link></div>
   </div> 
   <div className='flex space-x-15'> 
    <div className='pl-30'> <Link href="/"><img src="https://logos-world.net/wp-content/uploads/2020/04/Louis-Vuitton-Logo.png" alt="louis" className='w-43 h-43 cursor-pointer'/></Link></div> 
    <div className='pl-20'> <Link href="/"><img src="https://tse4.mm.bing.net/th/id/OIP.E1k1xOedwpjRRTkLpWeBWQHaG_?w=700&h=661&rs=1&pid=ImgDetMain&o=7&rm=3" alt="dior" className='w-50 h-48 cursor-pointer' /></Link></div> 
    </div> </div> </div>
     <div className='flex space-x-15 pt-15 px-30'> <div className='pl-20'> <Link href="/"><img src="https://logodix.com/logo/542644.png" alt="valentino" className='w-50 h-48 cursor-pointer' /></Link></div> 
     <div className='pl-20'> <Link href="/"><img src="https://us.christianlouboutin.com/static/version1758095591/frontend/Louboutin/revamp_2021_us/en_US/images/logo.svg" alt="louboutin" className='w-50 h-48 cursor-pointer' /></Link></div>
      <div className='pl-20'> <Link href="/"><img src="https://logos-world.net/wp-content/uploads/2020/05/Versace-Logo-1997.png" alt="versace" className='w-56 h-38 cursor-pointer' /></Link></div>
   <div className='pl-20'> <Link href="/"><img src="https://www.bing.com/th/id/OIP.bs091eC6cI9C2o2aSABSRAHaKW?w=166&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="ysl" className='w-50 h-48 cursor-pointer' /></Link></div> </div>
    <div className='flex py-15 px-30 space-x-15'> <div className='pl-20'> <Link href="/"><img src="https://seeklogo.com/images/B/balenciaga-logo-E5702D8ECC-seeklogo.com.png" alt="balenciaga" className='w-55 h-45 cursor-pointer' /></Link></div>
     <div className='pl-20'> <Link href="/"><img src="https://th.bing.com/th/id/OIP.-JF5av5cNqgvgjsGgFi4SwAAAA?w=152&h=104&c=7&bgcl=477701&r=0&o=6&dpr=1.3&pid=13.1" alt="prada" className='w-50 h-48 cursor-pointer' /></Link></div>
      <div className='pl-20'> <Link href="/"><img src="https://logos-world.net/wp-content/uploads/2020/08/Burberry-Logo-1999-2018.png" alt="burberry" className='w-50 h-48 cursor-pointer' /></Link></div>
       <div className='pl-20'> <Link href="/"><img src="https://th.bing.com/th/id/OIP.E4cZjqWkxssuwAQhzIvZwQHaEK?w=277&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="zara" className='w-50 h-48 cursor-pointer' /></Link></div>
        </div>
         <div className='h-30 bg-white w-350 pl-35 '>
           <h1 className='flex justify-center font-sans text-3xl text-gray-500'>click on your favorite brands to explore and purchase products tailored just for you.</h1> 
           
  </div>

<Chatbot/>
<Subscribe />
<Footer/>
</div>
)}