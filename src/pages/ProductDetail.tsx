
import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import Rating from "../components/Rating";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Thumbnail images - using the same image for the demo
  const images = [
    "/lovable-uploads/926bbf7b-0751-4c31-bbad-dd16c2699a39.png",
    "/lovable-uploads/926bbf7b-0751-4c31-bbad-dd16c2699a39.png",
    "/lovable-uploads/926bbf7b-0751-4c31-bbad-dd16c2699a39.png",
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">Todays Trending Food</h2>
          <p className="text-gray-600 mb-8">Peoples loves it most the past week...</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="border rounded-lg overflow-hidden mb-4">
                <img 
                  src={images[activeImage]}
                  alt="Basomoti Kacchi Biriyani" 
                  className="w-full h-auto"
                />
              </div>
              <div className="flex space-x-2">
                {images.map((img, index) => (
                  <div 
                    key={index}
                    className={`border rounded-lg overflow-hidden cursor-pointer w-20 
                      ${index === activeImage ? 'ring-2 ring-orange-500' : ''}`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-4">Basomoti Kacchi Biriyani</h1>
              <div className="text-3xl font-bold text-orange-500 mb-4">₺1,050</div>
              
              <div className="flex items-center mb-4">
                <Rating value={5} />
                <span className="ml-2 text-gray-600">5.0 out of (1256) Reviews</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Select Quantity</h3>
                <div className="flex flex-wrap gap-2">
                  {[0.5, 1, 2, 5, 10, 20].map((value) => (
                    <button
                      key={value}
                      className={`px-4 py-2 border rounded ${
                        quantity === value 
                          ? 'bg-gray-200 border-gray-400' 
                          : 'border-gray-300 hover:bg-gray-100'
                      }`}
                      onClick={() => setQuantity(value)}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 py-4 border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors">
                  <Heart />
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                  <ShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
