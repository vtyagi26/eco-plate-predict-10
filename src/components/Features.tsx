
import { 
  ChefHat, 
  MessageSquare, 
  Package, 
  Truck 
} from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <ChefHat className="w-12 h-12 text-foodie-yellow" />,
      title: "Food Demand Prediction",
      description: "AI-powered analytics to predict customer demand patterns and optimize inventory."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-foodie-yellow" />,
      title: "Effective Feedback",
      description: "Gather and analyze customer feedback to improve menu offerings and service quality."
    },
    {
      icon: <Package className="w-12 h-12 text-foodie-yellow" />,
      title: "Facility Management",
      description: "Streamline operations with smart tools for kitchen, seating and staff management."
    },
    {
      icon: <Truck className="w-12 h-12 text-foodie-yellow" />,
      title: "Sustainability Solutions",
      description: "Reduce food waste and implement eco-friendly practices for a greener restaurant."
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foodie-green-dark">
          Our <span className="text-foodie-yellow">Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foodie-green-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
