import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-[#f7f2e9] min-h-[calc(100vh-80px)] flex items-center">
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <div className="flex flex-row items-center text-left">
                <h1 className="text-[#ff8a00] text-7xl md:text-8xl font-bold whitespace-nowrap">
                  Fast
                </h1>
                <div className="flex flex-col ml-4">
                  <h1 className="text-[#333333] text-4xl md:text-5xl font-bold leading-tight">
                    Food
                  </h1>
                  <h1 className="text-[#333333] text-4xl md:text-5xl font-bold leading-tight">
                    Delivery
                  </h1>
                </div>
              </div>
              <p className="text-gray-600 text-lg max-w-lg mx-auto md:mx-0">
              But so that you may see from where all this pleasure of accusing 
              and pain of praising is born.
              </p>
            </div>

            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-[#333333] hover:bg-[#222222] text-white px-8 py-6 rounded-full text-lg h-auto w-fit">
                Order Now
              </Button>
              <Button variant="ghost" className="flex items-center justify-center gap-3 text-lg h-auto py-6 w-fit">
                <div className="bg-white p-2 rounded-full shadow-md">
                  <Play className="h-5 w-5 fill-black text-black" />
                </div>
                Watch Video
              </Button>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-6 w-6 fill-[#ffb800] text-[#ffb800]" />)}
              </div>
              <div className="mt-2">
                <p className="font-semibold text-lg">5 star rating</p>
                <p className="text-gray-500">based on 1788 reviews</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <img 
              src="/lovable-uploads/heroimage.png" 
              alt="Food Delivery" 
              className="w-full max-w-xl mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;