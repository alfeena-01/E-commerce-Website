 

import Link from 'next/link';

export default function Footer() {
  return (

    <footer className="bg-gradient-to-b from-white to-gray-200 text-black py-1">
        <div className=' text-black text-center p-5'>
          <Link href="/">
            <span className='text-black-800 text-3xl font-sans tracking-widest border border-grey-400 rounded cursor-pointer'>LUXBAE</span></Link>

        </div>
      <div className="text-black text-center p-4 flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16">
  <Link href="https://www.gucci.com/us/en/">
    <img src="https://th.bing.com/th/id/R.fb3df8963e6b65915b7eddfc982e67d4?rik=62UrxC945bLl%2bw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgucci-logo-png-download-1920.png&ehk=TuCrZgGH01I%2f9q%2bTMdh6hSyJeW1umQNiwa6bmGXVUxU%3d&risl=&pid=ImgRaw&r=0" alt="gucci" className="w-10 h-10 cursor-pointer" />
  </Link>
  <Link href="https://www.balenciaga.com/en-en/women/bags">
    <img src="https://seeklogo.com/images/B/balenciaga-logo-E5702D8ECC-seeklogo.com.png" alt="balenciaga" className="w-20 h-11 cursor-pointer" />
  </Link>
  <Link href="https://www.prada.com/us/en.html">
    <img src="https://th.bing.com/th/id/OIP.-JF5av5cNqgvgjsGgFi4SwAAAA?w=152&h=104&c=7&bgcl=477701&r=0&o=6&dpr=1.3&pid=13.1" alt="prada" className="w-20 h-10 cursor-pointer" />
  </Link>
  <Link href="https://in.burberry.com/">
    <img src="https://logos-world.net/wp-content/uploads/2020/08/Burberry-Logo-1999-2018.png" alt="burberry" className="w-12 h-12 cursor-pointer" />
  </Link>
  <Link href="https://www.chanel.com/in/">
    <img src="https://www.bing.com/th/id/OIP.SLl9dwBhmat8XH4WsYl6oAHaEK?w=285&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="chanel" className="w-14 h-14 cursor-pointer" />
  </Link>
  <Link href="https://in.louisvuitton.com/eng-in/homepage">
    <img src="https://logos-world.net/wp-content/uploads/2020/04/Louis-Vuitton-Logo.png" alt="louisvuitton" className="w-10 h-10 cursor-pointer" />
  </Link>
  <Link href="https://www.zara.com/in/">
    <img src="https://th.bing.com/th/id/OIP.E4cZjqWkxssuwAQhzIvZwQHaEK?w=277&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="zara" className="w-12 h-12 cursor-pointer" />
  </Link>
  <Link href="https://www.dior.com/">
    <img src="https://tse4.mm.bing.net/th/id/OIP.E1k1xOedwpjRRTkLpWeBWQHaG_?w=700&h=661&rs=1&pid=ImgDetMain&o=7&rm=3" alt="dior" className="w-12 h-12 cursor-pointer" />
  </Link>
  <Link href="https://www.valentino.com/en-in/">
    <img src="https://logodix.com/logo/542644.png" alt="valentino" className="w-12 h-12 cursor-pointer" />
  </Link>
  <Link href="https://us.christianlouboutin.com/us_en/">
    <img src="https://us.christianlouboutin.com/static/version1758095591/frontend/Louboutin/revamp_2021_us/en_US/images/logo.svg" alt="louboutin" className="w-12 h-12 cursor-pointer" />
  </Link>
  <Link href="https://www.versace.com/in/en/">
    <img src="https://logos-world.net/wp-content/uploads/2020/05/Versace-Logo-1997.png" alt="versace" className="w-20 h-10 cursor-pointer" />
  </Link>
  <Link href="https://www.ysl.com/en-us">
    <img src="https://www.bing.com/th/id/OIP.bs091eC6cI9C2o2aSABSRAHaKW?w=166&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="ysl" className="w-10 h-10 cursor-pointer" />
  </Link>
</div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Customer Care</h2>
            <ul>
              <li><Link href="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-gray-300">FAQs</Link></li>
              <li><Link href="/returns-exchanges" className="hover:text-gray-300">Returns & Exchanges</Link></li>
              <li><Link href="/shipping-delivery" className="hover:text-gray-300">Shipping & Delivery</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">About Us</h2>
            <ul>
              <li><Link href="/our-story" className="hover:text-gray-300">Our Story</Link></li>
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
              <li><Link href="/press" className="hover:text-gray-300">Press</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Policies</h2>
            <ul>
              <li><Link href="/terms-conditions" className="hover:text-gray-300">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-gray-300">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-gray-300">Disclaimer</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
           <div className="mt-4">
             <div className="flex space-x-4">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="https://toppng.com/uploads/preview/logo-instagram-116587966427mvdfvahmo.png" alt="Instagram" className="h-6 w-6" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="https://tse4.mm.bing.net/th/id/OIP.sdocUkuzv28MBosM5lZANQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Facebook" className="h-6 w-6" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="https://toppng.com/uploads/preview/twitter-logo-11549680523gyu1fhgduu.png" alt="Twitter" className="h-6 w-6" />
    </a>
            </div>
          </div>
        </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy;2025 LUXBAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

