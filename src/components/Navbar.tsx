
import { useState } from "react";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="py-4 px-6 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-3xl font-bold flex items-center">
            <span className="inline-block mr-2">👨‍🍳</span>
            <span>Foo</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex-1 flex justify-center">
            <ul className="flex items-center space-x-10">
              <li className="font-medium">Home</li>
              <li className="font-medium">Menu</li>
              <li className="font-medium">Contact</li>
              <li className="font-medium">Shop</li>
            </ul>
          </div>
        )}

        {/* Search and Cart */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:flex items-center">
            <Search className="absolute left-3 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 pl-10 pr-4 py-2 rounded-full w-48 text-sm"
            />
          </div>
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </div>
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 py-4">
          <ul className="flex flex-col space-y-4 px-6">
            <li className="font-medium">Home</li>
            <li className="font-medium">Menu</li>
            <li className="font-medium">Contact</li>
            <li className="font-medium">Shop</li>
          </ul>
          <div className="mt-4 px-6">
            <div className="relative flex items-center w-full">
              <Search className="absolute left-3 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 pl-10 pr-4 py-2 rounded-full w-full text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
