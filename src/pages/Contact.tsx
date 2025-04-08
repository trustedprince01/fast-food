
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#f7f2e9]">
      <Navbar />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">Contact us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 mb-4">
                Need an experienced and skilled hand with custom IT projects?
                <br />
                Fill out the form to get a free consultation.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Company Name" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Nature of Bussiness" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Adress" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-500"
                />
                <input 
                  type="text" 
                  placeholder="Postcode" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <div>
                <input 
                  type="text" 
                  placeholder="Contact name" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <div>
                <input 
                  type="tel" 
                  placeholder="Contact Phone" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-500"
                />
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="email@gmail" 
                  className="w-full border-b border-gray-300 py-2 bg-transparent focus:outline-none focus:border-gray-500"
                />
                {/* Error message */}
                <p className="text-red-500 text-xs mt-1">Please, enter valid email address</p>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded text-lg h-auto">
                SUBMIT
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold mb-4">Offices</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">United States</h3>
                  <p className="text-gray-600">500 5th Avenue Suite 400, NY 10110</p>
                </div>
                
                <div>
                  <h3 className="font-medium">United Kingdom</h3>
                  <p className="text-gray-600">High St, Bromley BR1 1DN</p>
                </div>
                
                <div>
                  <h3 className="font-medium">France</h3>
                  <p className="text-gray-600">80 avenue des Terroirs de France, Paris</p>
                </div>
              </div>
            </div>
            
            <div className="h-80 bg-gray-200 rounded-md relative">
              {/* Map placeholder - in a real app you'd use a proper map component */}
              <div className="w-full h-full bg-gray-200 rounded-md flex items-center justify-center">
                <MapPin className="w-10 h-10 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
