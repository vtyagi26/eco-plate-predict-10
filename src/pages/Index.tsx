
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import FoodieSyncChatbot from "@/components/restaurant/FoodieSyncChatbot";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AboutUs />
      
      {/* Chatbot Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foodie-green-dark mb-4">
              Ask FoodieSync AI
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get instant answers about sustainability, carbon footprints, restaurant management, 
              and all things related to sustainable food practices.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FoodieSyncChatbot />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
