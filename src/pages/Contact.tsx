
import Navbar from "@/components/Navbar";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-foodie-green-dark text-white py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
