
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foodie-green-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-foodie-green-dark text-xl font-bold">F</span>
              </div>
              <span className="text-xl font-bold">FoodieSync</span>
            </div>
            <p className="mb-4">
              Revolutionizing the restaurant industry with data-driven insights, 
              personalized experiences, and sustainable solutions.
            </p>
            <div className="flex gap-4">
              {/* Social media icons would go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foodie-yellow-light">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-foodie-yellow transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-foodie-yellow transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-foodie-yellow transition-colors">Services</Link></li>
              <li><Link to="/restaurants" className="hover:text-foodie-yellow transition-colors">Restaurants</Link></li>
              <li><Link to="/contact" className="hover:text-foodie-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foodie-yellow-light">Contact Info</h3>
            <address className="not-italic">
              <p className="mb-2">123 Restaurant Avenue</p>
              <p className="mb-2">Foodie City, FC 12345</p>
              <p className="mb-2">Email: info@foodiesync.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-foodie-green pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FoodieSync. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
