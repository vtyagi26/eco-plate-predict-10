
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foodie-green-dark">
              About <span className="text-foodie-yellow">FoodieSync</span>
            </h2>
            <p className="text-gray-700 mb-4">
              FoodieSync is a revolutionary platform dedicated to transforming how restaurants operate in the modern world. 
              Founded in 2023, we combine cutting-edge technology with deep industry expertise to create solutions that address 
              the unique challenges faced by food service establishments.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to reduce food waste, optimize operations, and enhance customer experiences through data-driven insights. 
              We believe that restaurants can thrive while also contributing to a more sustainable food ecosystem.
            </p>
            <p className="text-gray-700 mb-6">
              With our AI-powered demand prediction, comprehensive feedback systems, smart facility management tools, and 
              sustainability initiatives, we're helping restaurants of all sizes operate more efficiently and responsibly.
            </p>
            <Button asChild className="bg-foodie-green hover:bg-foodie-green-dark text-white">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
          
          <div className="md:w-1/2 bg-foodie-yellow-light/20 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4 text-foodie-green-dark">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-foodie-yellow rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foodie-green">Sustainability</h4>
                  <p className="text-gray-600">We're committed to reducing food waste and promoting eco-friendly practices.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-foodie-yellow rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foodie-green">Innovation</h4>
                  <p className="text-gray-600">We constantly evolve our technology to stay ahead of industry needs.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-foodie-yellow rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foodie-green">Partnership</h4>
                  <p className="text-gray-600">We work closely with restaurants to understand and solve their unique challenges.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-foodie-yellow rounded-full p-1 mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foodie-green">Quality</h4>
                  <p className="text-gray-600">We're dedicated to excellence in all our solutions and services.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
