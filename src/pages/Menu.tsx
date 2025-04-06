
import FoodCard from "../components/FoodCard";

const Menu = () => {
  const foodItems = [
    {
      id: 1,
      name: "Cappuccino",
      description: "Served with lorem ipsum",
      price: 1200,
      oldPrice: null,
      image: "/lovable-uploads/425d4b28-509d-4772-9fea-7c7476cd07d5.png",
      discount: 25,
      hasCounter: false
    },
    {
      id: 2,
      name: "Bacon, Egg and Sandwich",
      description: "Served with lorem ipsum Dolor sit amet...",
      price: 4599,
      oldPrice: 4999,
      image: "/lovable-uploads/b14f8b6d-e733-4a10-81b2-dbfed97f8a68.png",
      discount: 25,
      hasCounter: true
    },
    {
      id: 3,
      name: "Cappuccino",
      description: "Served with lorem ipsum",
      price: 1200,
      oldPrice: null,
      image: "/lovable-uploads/425d4b28-509d-4772-9fea-7c7476cd07d5.png",
      discount: 25,
      hasCounter: false
    },
    {
      id: 4,
      name: "Bacon, Egg and Sandwich",
      description: "Served with lorem ipsum Dolor sit amet...",
      price: 4599,
      oldPrice: 4999,
      image: "/lovable-uploads/b14f8b6d-e733-4a10-81b2-dbfed97f8a68.png",
      discount: 25,
      hasCounter: true
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
        <h2 className="text-3xl font-bold mb-2">Popular Items</h2>
        <p className="text-gray-600 mb-8">Most Ordered Items</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <FoodCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              oldPrice={item.oldPrice}
              image={item.image}
              discount={item.discount}
              hasCounter={item.hasCounter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
