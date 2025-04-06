
import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex items-center">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chef-hat">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
              <line x1="6" x2="18" y1="17" y2="17"/>
            </svg>
          </span>
          Foo
        </Link>
      </div>

      <div className="hidden md:flex space-x-10">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/menu" className="font-medium">Menu</Link>
        <Link to="/contact" className="font-medium">Contact</Link>
        <Link to="/shop" className="font-medium">Shop</Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <Search className="absolute left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 w-56"
          />
        </div>
        <div className="relative">
          <Link to="/cart" className="flex items-center justify-center w-10 h-10">
            <ShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
