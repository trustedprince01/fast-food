
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    businessType: "",
    address: "",
    postcode: "",
    contactName: "",
    contactPhone: "",
    email: ""
  });
  
  const [emailError, setEmailError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === "email") {
      setEmailError("");
    }
  };
  
  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formData.email)) {
      setEmailError("Please, enter valid email address");
      return;
    }
    
    // Process form submission
    toast({
      title: "Form submitted",
      description: "Thank you for your inquiry. We'll contact you soon.",
    });
    
    // Reset form
    setFormData({
      companyName: "",
      businessType: "",
      address: "",
      postcode: "",
      contactName: "",
      contactPhone: "",
      email: ""
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">Contact us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 mb-4">
                Need an experienced and skilled hand with custom IT projects?<br />
                Fill out the form to get a free consultation.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="Nature of Bussiness"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Adress"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                  
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    placeholder="Postcode"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Contact name"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="Contact Phone"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@gmail"
                    className={`w-full border-b ${emailError ? 'border-red-500' : 'border-gray-300'} py-2 focus:outline-none focus:border-gray-500`}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-sm mt-1">{emailError}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Offices</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-1">United States</h4>
                  <p className="text-gray-600">500 5th Avenue Suite 400, NY 10110</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">United Kingdom</h4>
                  <p className="text-gray-600">High St, Bromley BR1 1DN</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">France</h4>
                  <p className="text-gray-600">80 avenue des Terroirs de France, Paris</p>
                </div>
              </div>
              
              <div className="mt-8 h-64 md:h-80 rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/afe58cb6-4202-4714-8e3e-d3db490ae5eb.png"
                  alt="Office location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
