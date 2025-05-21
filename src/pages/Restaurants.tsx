
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Restaurants = () => {
  // Sample data for restaurant partners
  const restaurants = [
    {
      id: 1,
      name: "Green Leaf Bistro",
      cuisine: "Vegetarian",
      location: "Downtown Foodie City",
      description: "Farm-to-table restaurant specializing in creative vegetarian dishes."
    },
    {
      id: 2,
      name: "Spice Harbor",
      cuisine: "Indian",
      location: "Westside",
      description: "Authentic Indian cuisine with a modern twist."
    },
    {
      id: 3,
      name: "Pasta Paradise",
      cuisine: "Italian",
      location: "Riverside District",
      description: "Family-owned Italian restaurant with handmade pasta and pizza."
    },
    {
      id: 4,
      name: "Sushi Wave",
      cuisine: "Japanese",
      location: "Harbor View",
      description: "Contemporary Japanese restaurant featuring fresh seafood and artistic presentation."
    },
    {
      id: 5,
      name: "Texas BBQ House",
      cuisine: "American",
      location: "East End",
      description: "Classic American BBQ with slow-cooked meats and homestyle sides."
    },
    {
      id: 6,
      name: "Le Petit Café",
      cuisine: "French",
      location: "Arts District",
      description: "Charming French café offering pastries, coffee, and light meals."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-foodie-green-dark text-white py-16 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Restaurant Partners</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the diverse range of restaurants using FoodieSync to enhance their operations
            and customer experiences.
          </p>
        </div>
      </div>
      
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-foodie-yellow-light/30"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foodie-green-dark">{restaurant.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-3">
                    <span>{restaurant.cuisine}</span>
                    <span>{restaurant.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{restaurant.description}</p>
                  <Button variant="outline" className="w-full border-foodie-green text-foodie-green hover:bg-foodie-green hover:text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4 text-foodie-green-dark">
              Want to Join Our Network?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              If you own a restaurant and want to leverage our platform for demand prediction,
              feedback management, and sustainability initiatives, we'd love to partner with you.
            </p>
            <Button asChild className="bg-foodie-green hover:bg-foodie-green-dark text-white">
              <Link to="/register">Register Your Restaurant</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Restaurants;
