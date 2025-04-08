import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
    { name: "Shop", path: "/"  }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="py-4 px-6 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-3xl font-bold flex items-center">
            <span className="inline-block mr-2">👨‍🍳</span>
            <span>Foo</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className={`font-medium transition-colors ${isActive(item.path) 
                      ? 'text-[#ff8a00]' 
                      : 'text-gray-800 hover:text-[#ff8a00]'}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Search and Cart */}
        <div className="flex items-center gap-4">
          {!isMobile && (
            <>
              <div className="relative hidden sm:flex items-center">
                <Search className="absolute left-3 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-100 pl-10 pr-4 py-2 rounded-full w-48 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
                />
              </div>
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-gray-800 hover:text-[#ff8a00] transition-colors cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-[#ff8a00] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </div>
            </>
          )}

          {/* Hamburger Menu */}
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 hover:text-[#ff8a00] hover:bg-transparent"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-6 transition-all">
          <ul className="flex flex-col space-y-6 px-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`font-medium text-lg block transition-colors ${isActive(item.path) 
                    ? 'text-[#ff8a00]' 
                    : 'text-gray-800 hover:text-[#ff8a00]'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 px-6">
            {/* Cart Icon Inside Mobile Menu */}
            <div className="relative flex items-center mb-4">
              <ShoppingCart className="h-6 w-6 text-gray-800 hover:text-[#ff8a00] transition-colors cursor-pointer" />
              <span className="absolute -top-2 right-0 bg-[#ff8a00] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </div>
            <div className="relative flex items-center w-full">
              <Search className="absolute left-3 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 pl-10 pr-4 py-3 rounded-full w-full text-base focus:outline-none focus:ring-2 focus:ring-[#ff8a00]/50"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
