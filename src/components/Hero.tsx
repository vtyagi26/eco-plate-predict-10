
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-pattern min-h-[600px] flex items-center">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foodie-green-dark">
            Personalizing Food <span className="text-foodie-yellow">Experiences</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Helping restaurants predict demand, manage feedback, optimize facility 
            operations, and reduce waste for a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-foodie-green hover:bg-foodie-green-dark text-white px-8 py-6 text-lg">
              <Link to="/register">Join as Restaurant</Link>
            </Button>
            <Button asChild variant="outline" className="border-foodie-yellow text-foodie-yellow hover:bg-foodie-yellow hover:text-foodie-green-dark px-8 py-6 text-lg">
              <Link to="/user-register">Join as User</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
