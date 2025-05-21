
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart, CalendarDays, UserRound, Utensils, Phone } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface FoodWastageModelProps {
  restaurantId: number;
}

const FoodWastageModel = ({ restaurantId }: FoodWastageModelProps) => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [mealType, setMealType] = useState<string>("lunch");
  const [eventType, setEventType] = useState<string>("regular");
  const [dishType, setDishType] = useState<string>("standard");
  const [customerCount, setCustomerCount] = useState<string>("50");
  const [showResults, setShowResults] = useState<boolean>(false);
  
  const handlePredict = () => {
    // In a real app, this would call an API to get predictions
    setShowResults(true);
  };
  
  // Sample prediction data - in a real app, this would come from ML model
  const wastageData = [
    { name: 'Rice', expected: 2.3, actual: 0 },
    { name: 'Vegetables', expected: 3.1, actual: 0 },
    { name: 'Meat', expected: 1.8, actual: 0 },
    { name: 'Bread', expected: 1.5, actual: 0 },
    { name: 'Desserts', expected: 2.7, actual: 0 },
  ];
  
  const weeklyTrendData = [
    { name: 'Mon', wastage: 4.2 },
    { name: 'Tue', wastage: 3.8 },
    { name: 'Wed', wastage: 4.1 },
    { name: 'Thu', wastage: 3.6 },
    { name: 'Fri', wastage: 5.4 },
    { name: 'Sat', wastage: 6.2 },
    { name: 'Sun', wastage: 5.1 },
  ];
  
  const ngoPartners = [
    { id: 1, name: "FoodShare Foundation", contact: "+1-555-123-4567", distance: "3.2 miles" },
    { id: 2, name: "Community Food Bank", contact: "+1-555-987-6543", distance: "5.7 miles" },
    { id: 3, name: "Hunger Relief Network", contact: "+1-555-456-7890", distance: "7.1 miles" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foodie-green-dark mb-6">Food Wastage Prediction Model</h2>
        <p className="text-gray-600 mb-6">
          This model analyzes historical data and current factors to predict potential food wastage, 
          helping you make informed decisions about preparation quantities and connect with NGO partners for donation.
        </p>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Enter Prediction Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="flex items-center space-x-2">
                  <CalendarDays className="h-4 w-4 text-gray-500" />
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mealType">Meal Type</Label>
                <Select value={mealType} onValueChange={setMealType}>
                  <SelectTrigger id="mealType">
                    <SelectValue placeholder="Select meal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="breakfast">Breakfast</SelectItem>
                    <SelectItem value="lunch">Lunch</SelectItem>
                    <SelectItem value="dinner">Dinner</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="eventType">Event Type</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger id="eventType">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular Day</SelectItem>
                    <SelectItem value="weekend">Weekend</SelectItem>
                    <SelectItem value="holiday">Holiday</SelectItem>
                    <SelectItem value="special">Special Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dishType">Primary Dish Type</Label>
                <Select value={dishType} onValueChange={setDishType}>
                  <SelectTrigger id="dishType">
                    <SelectValue placeholder="Select dish type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Menu</SelectItem>
                    <SelectItem value="special">Special Menu</SelectItem>
                    <SelectItem value="buffet">Buffet</SelectItem>
                    <SelectItem value="catering">Catering</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="customerCount">Expected Customers</Label>
                <div className="flex items-center space-x-2">
                  <UserRound className="h-4 w-4 text-gray-500" />
                  <Input
                    id="customerCount"
                    type="number"
                    value={customerCount}
                    onChange={(e) => setCustomerCount(e.target.value)}
                    min="1"
                  />
                </div>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={handlePredict} 
                  className="bg-foodie-green hover:bg-foodie-green-dark w-full"
                >
                  Generate Prediction
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {showResults && (
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-foodie-green-dark">Prediction Results</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-foodie-green" />
                  Expected Wastage by Food Category (kg)
                </h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={weeklyTrendData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Wastage (kg)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="wastage" stroke="#4CAF50" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>Total predicted wastage: <span className="font-medium">11.4 kg</span></p>
                  <p className="mt-2">Based on your inputs, we predict moderate food wastage for {mealType} on this {eventType} day.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4">Recommended NGO Partners</h4>
                <p className="text-sm text-gray-600 mb-4">
                  These NGOs can collect excess food for redistribution. Contact them in advance to arrange pickup.
                </p>
                
                {ngoPartners.map((ngo) => (
                  <div key={ngo.id} className="flex items-start space-x-3 p-3 border rounded-md mb-3 hover:bg-gray-50">
                    <Utensils className="h-5 w-5 text-foodie-green mt-1" />
                    <div>
                      <h5 className="font-medium">{ngo.name}</h5>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Phone className="h-3.5 w-3.5 mr-1" />
                        {ngo.contact}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="bg-gray-100 px-2 py-0.5 rounded">
                          {ngo.distance} away
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-2">
                  View All NGO Partners
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-medium mb-4">Wastage Reduction Recommendations</h4>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                  <h5 className="font-medium text-foodie-green-dark">Portion Control</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Consider reducing portion sizes for side dishes by 10-15% based on historical customer preferences.
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                  <h5 className="font-medium text-foodie-green-dark">Inventory Management</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Prepare 15% less dessert items compared to your standard preparation for this type of event.
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                  <h5 className="font-medium text-foodie-green-dark">Pre-arrangement with NGOs</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Contact FoodShare Foundation 24 hours in advance to arrange pickup of potential excess food.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FoodWastageModel;
