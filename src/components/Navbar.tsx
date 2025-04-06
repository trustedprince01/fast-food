
import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <Link to="/" className="flex items-center text-2xl font-bold">
          <span className="mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chef-hat">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/>
              <line x1="6" x2="18" y1="17" y2="17"/>
            </svg>
          </span>
          Foo
        </Link>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link to="/" className="font-medium">Home</Link>
        <Link to="/menu" className="font-medium">Menu</Link>
        <Link to="/contact" className="font-medium">Contact</Link>
        <Link to="/shop" className="font-medium">Shop</Link>
      </div>

      <div className="flex items-center space-x-3">
        <div className="relative flex items-center">
          <Search className="absolute left-3" size={20} />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none w-full md:w-40"
          />
        </div>
        <div className="relative">
          <Link to="/cart">
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
