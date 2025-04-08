
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

const Menu = () => {
  const foodItems = [
    {
      id: 1,
      name: "Cappuccino",
      description: "Served with lorem ipsum",
      price: 1200,
      discount: "25% OFF",
      image: "/lovable-uploads/Cappuccino.jpg"
    },
    {
      id: 2,
      name: "Bacon, Egg and Sandwich",
      description: "Served with lorem ipsum Dolor sit amet",
      price: 4599,
      originalPrice: 4999,
      discount: "25% OFF",
      image: "/lovable-uploads/bread.webp"
    },
    {
      id: 4,
      name: "Cappuccino",
      description: "Served with lorem ipsum",
      price: 1200,
      discount: "25% OFF",
      image: "/lovable-uploads/Cappuccino.jpg"
    },
    {
      id: 4,
      name: "Bacon, Egg and Sandwich",
      description: "Served with lorem ipsum Dolor sit amet",
      price: 4599,
      originalPrice: 4999,
      discount: "25% OFF",
      image: "/lovable-uploads/bread.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f2e9]">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Popular Items</h1>
        <p className="text-gray-600 mb-8">Most Ordered Items</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-0 bg-red-500 text-white px-3 py-1 text-sm font-medium">
                  {item.discount}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                
                {item.originalPrice ? (
                  <div className="mt-2 flex items-center">
                    <span className="text-gray-400 line-through mr-2">₦{item.originalPrice}</span>
                    <span className="text-orange-500 font-bold">₦{item.price}</span>
                  </div>
                ) : (
                  <div className="mt-2">
                    <span className="font-bold">₦{item.price}</span>
                  </div>
                )}
                
                {/* Add to cart button or quantity control */}
                <div className="mt-4">
                  {item.id % 2 === 1 ? (
                    <Button className="w-full bg-white border border-green-500 text-green-500 hover:bg-green-50">
                      <Plus className="mr-1 h-4 w-4" /> ADD
                    </Button>
                  ) : (
                    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-md">
                      <button className="p-2 hover:bg-green-50 text-green-600">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="font-medium">99</span>
                      <button className="p-2 hover:bg-green-50 text-green-600">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;
