
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userType, setUserType] = useState("restaurant");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would handle authentication here
    toast({
      title: "Login Successful",
      description: `Welcome back to FoodieSync as a ${userType}!`,
    });
    
    // Redirect based on user type
    if (userType === "restaurant") {
      navigate("/restaurant-dashboard");
    } else if (userType === "user") {
      navigate("/user-dashboard");
    } else {
      navigate("/admin-dashboard");
    }
  };
  
  return (
    <div className="container mx-auto px-6 py-12 flex justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-foodie-green-dark">
            Login to FoodieSync
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
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
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`${type}-email`}>Email</Label>
                    <Input 
                      id={`${type}-email`} 
                      type="email" 
                      placeholder="your@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor={`${type}-password`}>Password</Label>
                      <Link to="/forgot-password" className="text-sm text-foodie-yellow hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input 
                      id={`${type}-password`} 
                      type="password" 
                      placeholder="••••••••" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-foodie-green hover:bg-foodie-green-dark"
                  >
                    Login
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col">
                <div className="text-sm text-center">
                  Don't have an account?{" "}
                  <Link 
                    to={`/${type === "restaurant" ? "register" : `${type}-register`}`}
                    className="text-foodie-yellow hover:underline"
                  >
                    Register
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

export default LoginForm;
