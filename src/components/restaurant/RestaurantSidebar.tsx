
import { Home, UtensilsCrossed, BarChart, Package, Users, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface RestaurantSidebarProps {
  restaurantName: string;
}

const RestaurantSidebar = ({ restaurantName }: RestaurantSidebarProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("foodieSync_userType");
    localStorage.removeItem("foodieSync_userData");
    
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully",
    });
    
    navigate("/login");
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-4 hidden md:block">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foodie-green-dark truncate">
            {restaurantName}
          </h2>
          <p className="text-sm text-gray-500">Restaurant Dashboard</p>
        </div>
        
        <nav className="space-y-1 flex-1">
          <Button variant="ghost" className="w-full justify-start" onClick={() => {}}>
            <Home className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => {}}>
            <UtensilsCrossed className="mr-2 h-4 w-4" />
            Menu Management
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => {}}>
            <BarChart className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => {}}>
            <Package className="mr-2 h-4 w-4" />
            Packaging Options
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => {}}>
            <Users className="mr-2 h-4 w-4" />
            NGO Partners
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" onClick={() => {}}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
        
        <Button 
          variant="ghost" 
          className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-50 mt-auto"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default RestaurantSidebar;
