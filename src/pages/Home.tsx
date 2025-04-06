
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <h1 className="mb-4">
            <span className="text-5xl md:text-7xl font-bold text-orange-500">Fast</span>
            <span className="text-3xl md:text-4xl font-semibold text-zinc-800 block md:inline md:ml-2">Food</span>
            <span className="text-3xl md:text-4xl font-semibold text-zinc-800 block">Delivery</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-md">
            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link to="/menu" className="px-8 py-4 bg-zinc-800 text-white rounded-full hover:bg-zinc-700 transition-colors font-medium">
              Order Now
            </Link>
            <button className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
              <Play size={16} />
              Watch Video
            </button>
          </div>
          <div>
            <Rating value={5} size="lg" />
            <div className="mt-1">
              <p className="font-medium text-zinc-800">5 star rating</p>
              <p className="text-gray-500 text-sm">based on 1788 reviews</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img alt="Food Delivery Illustration" className="max-w-full h-auto" src="/lovable-uploads/7230832b-640e-41c0-bf55-f99ed89b32a3.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
