
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-6xl font-bold mb-4">
              <span className="text-orange-500">Fast</span>{" "}
              <div className="text-4xl font-semibold">
                Food<br />Delivery
              </div>
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/menu" 
                className="px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors"
              >
                Order Now
              </Link>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                <Play size={16} />
                Watch Video
              </button>
            </div>
            <div className="mt-8">
              <Rating value={5} size="lg" />
              <p className="text-gray-600 mt-1">
                5 star rating<br />
                <span className="text-sm">based on 1788 reviews</span>
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <img 
              src="/lovable-uploads/8d7de314-e77f-4c79-a459-95a4e40498f9.png" 
              alt="Food Delivery" 
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
