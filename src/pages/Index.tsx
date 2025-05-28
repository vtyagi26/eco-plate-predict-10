
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import ChatbotToggle from "@/components/ChatbotToggle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AboutUs />
      <Footer />
      
      {/* Floating Chatbot Toggle */}
      <ChatbotToggle />
    </div>
  );
};

export default Index;
