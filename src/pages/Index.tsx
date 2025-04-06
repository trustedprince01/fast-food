
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 via-orange-400 to-orange-500 p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to our Food Delivery App</h1>
          <p className="text-gray-600 mb-8">
            Explore our delicious menu, place orders with ease, and enjoy fast delivery to your doorstep.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Link 
              to="/"
              className="p-6 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">Homepage</h2>
              <p className="text-gray-600">View our main landing page with special offers</p>
            </Link>
            
            <Link 
              to="/menu"
              className="p-6 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">Menu</h2>
              <p className="text-gray-600">Browse our popular food items</p>
            </Link>
            
            <Link 
              to="/product/1"
              className="p-6 bg-green-100 rounded-lg hover:bg-green-200 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">Product Detail</h2>
              <p className="text-gray-600">View details of our trending Biriyani</p>
            </Link>
            
            <Link 
              to="/contact"
              className="p-6 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
              <p className="text-gray-600">Get in touch with our team</p>
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            Note: This is a demo app showcasing UI components for a food delivery service.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
