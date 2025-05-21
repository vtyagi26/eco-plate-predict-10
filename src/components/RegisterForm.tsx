
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userType, setUserType] = useState("restaurant");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would handle registration here
    toast({
      title: "Registration Successful",
      description: `Welcome to FoodieSync! Your ${userType} account has been created.`,
    });
    
    // Redirect to login
    navigate("/login");
  };
  
  return (
    <div className="container mx-auto px-6 py-12 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-foodie-green-dark">
            Register with FoodieSync
          </CardTitle>
          <CardDescription className="text-center">
            Create your account to get started
          </CardDescription>
        </CardHeader>
        
        <Tabs defaultValue="restaurant" onValueChange={setUserType} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
            <TabsTrigger value="user">User</TabsTrigger>
            <TabsTrigger value="admin">Admin</TabsTrigger>
          </TabsList>
          
          {["restaurant", "user", "admin"].map((type) => (
            <TabsContent key={type} value={type}>
              <CardContent>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${type}-name`}>
                      {type === "restaurant" ? "Restaurant Name" : "Full Name"}
                    </Label>
                    <Input 
                      id={`${type}-name`} 
                      name="name"
                      placeholder={type === "restaurant" ? "Your Restaurant Name" : "Your Full Name"} 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`${type}-email`}>Email</Label>
                    <Input 
                      id={`${type}-email`} 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`${type}-phone`}>Phone Number</Label>
                    <Input 
                      id={`${type}-phone`} 
                      name="phone"
                      type="tel" 
                      placeholder="(123) 456-7890" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  {type === "restaurant" && (
                    <div className="space-y-2">
                      <Label htmlFor="restaurant-address">Restaurant Address</Label>
                      <Input 
                        id="restaurant-address" 
                        name="address"
                        placeholder="123 Food Street, City" 
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor={`${type}-password`}>Password</Label>
                    <Input 
                      id={`${type}-password`} 
                      name="password"
                      type="password" 
                      placeholder="••••••••" 
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor={`${type}-confirm-password`}>Confirm Password</Label>
                    <Input 
                      id={`${type}-confirm-password`} 
                      name="confirmPassword"
                      type="password" 
                      placeholder="••••••••" 
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-foodie-green hover:bg-foodie-green-dark"
                  >
                    Register
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col">
                <div className="text-sm text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="text-foodie-yellow hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </div>
  );
};

export default RegisterForm;
