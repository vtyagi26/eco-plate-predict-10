
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-foodie-green-dark text-white py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Learn more about our mission to transform food service operations
            through technology and sustainability.
          </p>
        </div>
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
