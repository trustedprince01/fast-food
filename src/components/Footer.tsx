
import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="mb-8 flex justify-center">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 20C2 18.8954 2.89543 18 4 18H20C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z" fill="white"/>
            <path d="M12 17C8.13401 17 5 13.866 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10C19 13.866 15.866 17 12 17Z" fill="white"/>
          </svg>
        </div>
        
        <div className="border-b border-gray-700 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Subscribe to our newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow bg-transparent border-b border-gray-700 focus:outline-none focus:border-white transition-colors py-2 text-sm"
              />
              <button className="ml-2 p-2 bg-pink-200 rounded hover:bg-pink-300 transition-colors text-black">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/email-marketing" className="text-gray-400 hover:text-white">Email Marketing</Link></li>
              <li><Link to="/services/campaigns" className="text-gray-400 hover:text-white">Campaigns</Link></li>
              <li><Link to="/services/branding" className="text-gray-400 hover:text-white">Branding</Link></li>
              <li><Link to="/services/offline" className="text-gray-400 hover:text-white">Offline</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/about/our-story" className="text-gray-400 hover:text-white">Our Story</Link></li>
              <li><Link to="/about/benefits" className="text-gray-400 hover:text-white">Benefits</Link></li>
              <li><Link to="/about/team" className="text-gray-400 hover:text-white">Team</Link></li>
              <li><Link to="/about/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/help/faqs" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms & Conditions</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-300" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-gray-300" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-gray-300" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
