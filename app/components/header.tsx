  import Link from 'next/link';


export default function Header() {
  return (
<div>
    
        <div className="flex flex-wrap items-center w-full h-auto sm:h-20 bg-white px-4 sm:px-0">
  <div className="w-full sm:w-1/4 bg-white-500 p-2 sm:p-4 text-white flex justify-start space-x-4 mb-2 sm:mb-0">
    <img src="https://cdn3.iconfinder.com/data/icons/outline-style-1/512/hamburger-128.png" alt="menu" className="w-6 sm:w-8 h-6 sm:h-8" />
    <img src="https://cdn0.iconfinder.com/data/icons/ecommerce-online-shopping-1/20/outline_ecommerce-wishlist-128.png" alt="like" className="w-6 sm:w-8 h-6 sm:h-8" />
  </div>

  <div className="w-full sm:w-1/2 bg-white-500 p-2 sm:p-4 text-center">
    <Link href="/">
      <span className="text-black-800 text-3xl sm:text-5xl font-sans tracking-widest">LUXBAE</span></Link> 
  </div>

  <div className="w-full sm:w-1/4 bg-white-500 p-2 sm:p-4 text-white flex justify-end space-x-2 sm:space-x-4">
    <Link href="/search">
      <img src="https://cdn0.iconfinder.com/data/icons/ecommerce-essential-material-1/32/Artboard_11-128.png" alt="search" className="w-6 sm:w-8 h-6 sm:h-8" />
    </Link>
    <Link href="/login">
      <button className="w-16 sm:w-20 h-6 sm:h-8 text-black underline text-sm sm:text-base">LOGIN</button>
    </Link>
    <Link href="/cart">
      <img src="https://cdn1.iconfinder.com/data/icons/e-commerce-outlined/64/e-commerce-Line-64px-svg_shopping_bag-128.png" alt="cart" className="w-6 sm:w-8 h-6 sm:h-8 cursor-pointer" />
    </Link>
  </div>
</div>

<nav className="w-full h-auto sm:h-10 bg-white text-black flex items-center px-4 py-2 justify-center">
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
    <Link href="/newin" className="hover:text-gray-300">New In</Link>
    <Link href="/brands" className="hover:text-gray-300">Brands</Link>
    <Link href="/clothing" className="hover:text-gray-300">Clothing</Link>
    <Link href="/shoes" className="hover:text-gray-300">Shoes</Link>
    <Link href="/bags" className="hover:text-gray-300">Bags</Link>
    <Link href="/accessories" className="hover:text-gray-300">Accessories</Link>
    <Link href="/cosmetics" className="hover:text-gray-300">Cosmetics</Link>
  </div>
</nav>

</div>


  )}
