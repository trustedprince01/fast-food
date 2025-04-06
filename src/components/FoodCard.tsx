
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FoodCardProps {
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  discount?: number;
  hasCounter?: boolean;
}

const FoodCard = ({ 
  name, 
  description, 
  price, 
  oldPrice, 
  image, 
  discount, 
  hasCounter = false 
}: FoodCardProps) => {
  const [quantity, setQuantity] = useState(99);

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md font-medium text-sm">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        
        <div className="mt-2 flex items-center">
          {oldPrice && (
            <span className="text-gray-500 line-through mr-2">₺{oldPrice}</span>
          )}
          <span className="text-orange-500 font-semibold">₺{price}</span>
        </div>
        
        {hasCounter ? (
          <div className="mt-4 flex items-center border rounded-md overflow-hidden">
            <button 
              onClick={decreaseQuantity}
              className="px-3 py-2 bg-white hover:bg-gray-100 text-green-600"
            >
              <Minus size={16} />
            </button>
            <div className="px-4 py-2 bg-green-600 text-white font-medium">
              {quantity}
            </div>
            <button 
              onClick={increaseQuantity}
              className="px-3 py-2 bg-white hover:bg-gray-100 text-green-600"
            >
              <Plus size={16} />
            </button>
          </div>
        ) : (
          <button className="mt-4 flex items-center text-green-600 border border-green-600 rounded-md px-4 py-2 hover:bg-green-50">
            <Plus size={16} className="mr-2" />
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
