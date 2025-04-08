import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Star } from "lucide-react";
const Hero = () => {
  const isMobile = useIsMobile();
  return <div className="bg-[#f7f2e9] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row items-start">
                <h1 className="text-[#ff8a00] text-7xl md:text-8xl font-bold">
                  Fast
                </h1>
                <div className="md:ml-4 mt-2 md:mt-0">
                  <h1 className="text-[#333333] text-5xl md:text-6xl font-bold leading-tight">
                    Food
                  </h1>
                  <h1 className="text-[#333333] text-5xl md:text-6xl font-bold leading-tight">
                    Delivery
                  </h1>
                </div>
              </div>
              <p className="text-gray-600 text-lg max-w-lg">
                Sed ut perspiciatis unde omnis iste natus sit voluptatem
                accusantium doloremque laudantium
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#333333] hover:bg-[#222222] text-white px-8 py-6 rounded-full text-lg h-auto">
                Order Now
              </Button>
              <Button variant="ghost" className="flex items-center justify-center gap-2 text-lg h-auto py-6">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Play className="h-5 w-5 fill-black text-black" />
                </div>
                Watch Video
              </Button>
            </div>

            <div>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-6 w-6 fill-[#ffb800] text-[#ffb800]" />)}
              </div>
              <div className="mt-2">
                <p className="font-semibold text-lg">5 star rating</p>
                <p className="text-gray-500">based on 1788 reviews</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <img alt="Food Delivery" className="w-full max-w-xl" src="/lovable-uploads/e56c0f8d-627c-4497-b816-7a126de5f58b.png" />
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;