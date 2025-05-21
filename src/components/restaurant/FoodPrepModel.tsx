
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { BarChart3, Users, Clock, Calendar, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FoodPrepModelProps {
  restaurantId: number;
}

const FoodPrepModel = ({ restaurantId }: FoodPrepModelProps) => {
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [mealPeriod, setMealPeriod] = useState<string>("lunch");
  const [baselineCustomers, setBaselineCustomers] = useState<number>(50);
  const [realTimeCustomers, setRealTimeCustomers] = useState<number>(42);
  const [adultsPercentage, setAdultsPercentage] = useState<number>(70);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleGenerateRecommendations = () => {
    setShowResults(true);
  };

  // Sample data for the charts
  const foodCategoriesData = [
    { name: 'Appetizers', baseline: 25, adjusted: 21 },
    { name: 'Main Courses', baseline: 50, adjusted: 42 },
    { name: 'Side Dishes', baseline: 75, adjusted: 63 },
    { name: 'Desserts', baseline: 30, adjusted: 25 },
    { name: 'Beverages', baseline: 60, adjusted: 51 },
  ];

  const specificDishesData = [
    { name: 'Grilled Chicken', baseline: 18, adjusted: 15 },
    { name: 'Vegetable Pasta', baseline: 12, adjusted: 10 },
    { name: 'Fish Fillet', baseline: 8, adjusted: 7 },
    { name: 'Steak', baseline: 15, adjusted: 13 },
    { name: 'Veggie Burger', baseline: 10, adjusted: 8 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foodie-green-dark mb-6">Food Preparation Optimization Model</h2>
        <p className="text-gray-600 mb-6">
          This model adjusts your food preparation quantities based on real-time customer data, 
          historical patterns, and demographic information to minimize waste and maximize efficiency.
        </p>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Preparation Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mealPeriod">Meal Period</Label>
                <select
                  id="mealPeriod"
                  value={mealPeriod}
                  onChange={(e) => setMealPeriod(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="breakfast">Breakfast (6AM - 11AM)</option>
                  <option value="lunch">Lunch (11AM - 3PM)</option>
                  <option value="dinner">Dinner (5PM - 10PM)</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="baselineCustomers">Baseline Customer Estimate</Label>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <Input
                    id="baselineCustomers"
                    type="number"
                    value={baselineCustomers}
                    onChange={(e) => setBaselineCustomers(parseInt(e.target.value))}
                    min="1"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Your typical customer count for this meal period
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="realTimeCustomers">Real-Time Customer Count</Label>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <Input
                    id="realTimeCustomers"
                    type="number"
                    value={realTimeCustomers}
                    onChange={(e) => setRealTimeCustomers(parseInt(e.target.value))}
                    min="0"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Current reservations or foot traffic data
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="customerDemo">Customer Demographics</Label>
                  <span className="text-sm text-gray-500">{adultsPercentage}% Adults</span>
                </div>
                <Slider
                  id="customerDemo"
                  defaultValue={[adultsPercentage]}
                  max={100}
                  step={1}
                  onValueChange={(value) => setAdultsPercentage(value[0])}
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Children: {100 - adultsPercentage}%</span>
                  <span>Adults: {adultsPercentage}%</span>
                </div>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={handleGenerateRecommendations} 
                  className="bg-foodie-green hover:bg-foodie-green-dark w-full"
                >
                  Generate Recommendations
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {showResults && (
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-foodie-green-dark">Preparation Recommendations</h3>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
            <div className="flex items-start">
              <TrendingUp className="h-5 w-5 text-foodie-green mr-2 mt-0.5" />
              <div>
                <h3 className="font-medium text-foodie-green-dark">Optimization Summary</h3>
                <p className="text-sm text-gray-600">
                  Based on current data, we recommend preparing for {realTimeCustomers} customers ({((realTimeCustomers / baselineCustomers) * 100).toFixed(1)}% of your baseline). 
                  This adjustment could reduce food waste by approximately {(100 - (realTimeCustomers / baselineCustomers) * 100).toFixed(1)}%.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-foodie-green" />
                  Food Categories Adjustment
                </h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={foodCategoriesData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Servings', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="baseline" name="Baseline Prep" fill="#8884d8" />
                      <Bar dataKey="adjusted" name="Recommended Prep" fill="#4CAF50" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-foodie-green" />
                  Top Dishes Adjustment
                </h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={specificDishesData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Servings', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="baseline" name="Baseline Prep" fill="#8884d8" />
                      <Bar dataKey="adjusted" name="Recommended Prep" fill="#4CAF50" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-medium mb-4">Detailed Preparation Recommendations</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                    <h5 className="font-medium text-foodie-green-dark">Adult Portions</h5>
                    <p className="text-2xl font-bold mt-1">{Math.round(realTimeCustomers * (adultsPercentage / 100))}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Full-sized portions with standard protein servings
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                    <h5 className="font-medium text-foodie-green-dark">Children Portions</h5>
                    <p className="text-2xl font-bold mt-1">{Math.round(realTimeCustomers * ((100 - adultsPercentage) / 100))}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Reduced portion sizes with kid-friendly options
                    </p>
                  </div>
                  
                  <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                    <h5 className="font-medium text-foodie-green-dark">Buffer</h5>
                    <p className="text-2xl font-bold mt-1">{Math.ceil(realTimeCustomers * 0.1)}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Additional portions for unexpected customers
                    </p>
                  </div>
                </div>
                
                <table className="w-full mt-4 border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="p-2 border">Dish</th>
                      <th className="p-2 border text-center">Standard Prep</th>
                      <th className="p-2 border text-center">Recommended Prep</th>
                      <th className="p-2 border text-center">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Grilled Chicken</td>
                      <td className="p-2 border text-center">18</td>
                      <td className="p-2 border text-center">15</td>
                      <td className="p-2 border text-center text-green-600">-3</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Vegetable Pasta</td>
                      <td className="p-2 border text-center">12</td>
                      <td className="p-2 border text-center">10</td>
                      <td className="p-2 border text-center text-green-600">-2</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Fish Fillet</td>
                      <td className="p-2 border text-center">8</td>
                      <td className="p-2 border text-center">7</td>
                      <td className="p-2 border text-center text-green-600">-1</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Steak</td>
                      <td className="p-2 border text-center">15</td>
                      <td className="p-2 border text-center">13</td>
                      <td className="p-2 border text-center text-green-600">-2</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Veggie Burger</td>
                      <td className="p-2 border text-center">10</td>
                      <td className="p-2 border text-center">8</td>
                      <td className="p-2 border text-center text-green-600">-2</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md mt-4">
                  <h5 className="font-medium text-blue-700">Special Recommendations</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                    <li>Prepare 15% less rice and pasta sides based on demographic data</li>
                    <li>Child portions should be approximately 60% of adult portions</li>
                    <li>Consider a 10% buffer for unexpected walk-ins or additional orders</li>
                    <li>Prep time can be reduced by approximately 20 minutes with these adjustments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default FoodPrepModel;
