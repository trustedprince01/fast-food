
import { ArrowRight, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#1A1F2C] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="border-b border-gray-700 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            {/* Logo Section */}
            <div className="mb-8 md:mb-0">
              <div className="text-3xl font-bold flex items-center">
                <span className="inline-block mr-2">👨‍🍳</span>
                <span>Foo</span>
              </div>
            </div>
            
            {/* Newsletter Section */}
            <div className="w-full md:w-auto mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent border-b border-gray-600 py-2 flex-grow focus:outline-none focus:border-white mr-2"
                />
                <Button size="icon" className="rounded-full bg-pink-200 hover:bg-pink-300 text-black">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          <div className="col-span-1">
            {/* Left empty intentionally to match layout */}
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white">Email Marketing</button></li>
              <li><button className="text-gray-400 hover:text-white">Campaigns</button></li>
              <li><button className="text-gray-400 hover:text-white">Branding</button></li>
              <li><button className="text-gray-400 hover:text-white">Offline</button></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white" onClick={() => navigate("/about")}>Our Story</button></li>
              <li><button className="text-gray-400 hover:text-white">Benefits</button></li>
              <li><button className="text-gray-400 hover:text-white">Team</button></li>
              <li><button className="text-gray-400 hover:text-white">Careers</button></li>
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-3">
              <li><button className="text-gray-400 hover:text-white">FAQs</button></li>
              <li><button className="text-gray-400 hover:text-white" onClick={() => navigate("/contact")}>Contact Us</button></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <button className="text-gray-400 hover:text-white text-sm">Terms & Conditions</button>
            <button className="text-gray-400 hover:text-white text-sm">Privacy Policy</button>
          </div>
          
          <div className="flex gap-6">
            <button className="text-gray-400 hover:text-white">
              <Facebook className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Twitter className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Instagram className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
