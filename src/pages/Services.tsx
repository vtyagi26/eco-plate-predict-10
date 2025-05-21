
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-foodie-green-dark text-white py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover how our innovative solutions can help your restaurant thrive
          </p>
        </div>
      </div>
      <Features />
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foodie-green-dark">Personalized Food Experiences</h2>
              <p className="text-gray-700 mb-4">
                Our platform collects and analyzes customer preferences to help restaurants create 
                personalized dining experiences. From custom menu recommendations to remembering 
                dietary restrictions, we help you make each customer feel special.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foodie-green-dark">Advanced Demand Prediction</h2>
              <p className="text-gray-700 mb-4">
                Using AI and machine learning, our system analyzes historical data, seasonal trends, 
                local events, and even weather patterns to accurately predict customer demand. This helps 
                you optimize inventory, reduce waste, and ensure you're always prepared for busy periods.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foodie-green-dark">Smart Feedback System</h2>
              <p className="text-gray-700 mb-4">
                Our comprehensive feedback system collects customer reviews across multiple channels, 
                analyzes sentiment, and provides actionable insights. Identify trends, address issues 
                promptly, and continuously improve your service quality.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foodie-green-dark">Sustainable Kitchen Solutions</h2>
              <p className="text-gray-700 mb-4">
                We help restaurants implement sustainable practices with our waste tracking tools, 
                energy efficiency recommendations, and connections to local food recycling services. 
                Reduce your environmental footprint while cutting costs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
