
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Package, Leaf, TrendingDown, ArrowUpDown, Star } from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  Tooltip as RechartsTooltip
} from 'recharts';

interface PackagingModelProps {
  restaurantId: number;
}

const PackagingModel = ({ restaurantId }: PackagingModelProps) => {
  const [orderVolume, setOrderVolume] = useState<string>("100");
  const [packageTypes, setPackageTypes] = useState<string>("3");
  const [useCurrentSupplier, setUseCurrentSupplier] = useState<boolean>(true);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  const handleAnalyze = () => {
    setShowResults(true);
  };
  
  // Sample packaging options - in a real app, this would come from the ML model and database
  const packagingOptions = [
    {
      id: 1,
      name: "EcoLeaf Containers",
      material: "Bamboo & Sugarcane",
      carbonFootprint: 12.3,
      recycleRating: 95,
      cost: 0.42,
      waterUsage: 18,
      energyUsage: 22,
      biodegradable: true,
      compostable: true,
      imageUrl: "https://via.placeholder.com/100x100",
    },
    {
      id: 2,
      name: "GreenWrap Packages",
      material: "Recycled Paper & Bioplastic",
      carbonFootprint: 14.7,
      recycleRating: 88,
      cost: 0.38,
      waterUsage: 25,
      energyUsage: 27,
      biodegradable: true,
      compostable: true,
      imageUrl: "https://via.placeholder.com/100x100",
    },
    {
      id: 3,
      name: "TerraCycle Boxes",
      material: "Recycled Cardboard",
      carbonFootprint: 18.5,
      recycleRating: 92,
      cost: 0.32,
      waterUsage: 22,
      energyUsage: 30,
      biodegradable: true,
      compostable: false,
      imageUrl: "https://via.placeholder.com/100x100",
    },
  ];
  
  // Sample data for charts
  const carbonFootprintData = [
    { name: "Current", value: 32 },
    { name: "Recommended", value: 14 },
  ];
  
  const COLORS = ['#ff7c43', '#4CAF50'];
  
  const radarData = [
    { subject: 'Carbon Footprint', current: 8, recommended: 5, fullMark: 10 },
    { subject: 'Recyclability', current: 5, recommended: 9, fullMark: 10 },
    { subject: 'Cost', current: 4, recommended: 6, fullMark: 10 },
    { subject: 'Water Usage', current: 7, recommended: 4, fullMark: 10 },
    { subject: 'Energy Usage', current: 8, recommended: 5, fullMark: 10 },
    { subject: 'Compostability', current: 3, recommended: 8, fullMark: 10 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foodie-green-dark mb-6">Sustainable Packaging Model</h2>
        <p className="text-gray-600 mb-6">
          This model analyzes your packaging needs and recommends sustainable options 
          with the lowest carbon footprint and highest recyclability for your specific use cases.
        </p>
        
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Packaging Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="orderVolume">Monthly Order Volume</Label>
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-gray-500" />
                  <Input
                    id="orderVolume"
                    type="number"
                    value={orderVolume}
                    onChange={(e) => setOrderVolume(e.target.value)}
                    min="1"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Average number of orders requiring packaging per month
                </p>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="packageTypes">Number of Package Types</Label>
                <Input
                  id="packageTypes"
                  type="number"
                  value={packageTypes}
                  onChange={(e) => setPackageTypes(e.target.value)}
                  min="1"
                  max="10"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Different types of containers needed (e.g., small, medium, large)
                </p>
              </div>
              
              <div className="space-y-2">
                <Label className="block mb-2">Current Supplier Analysis</Label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="useCurrentSupplier"
                    checked={useCurrentSupplier}
                    onChange={(e) => setUseCurrentSupplier(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-foodie-green focus:ring-foodie-green"
                  />
                  <Label htmlFor="useCurrentSupplier" className="text-sm font-normal">
                    Include current packaging in comparison
                  </Label>
                </div>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={handleAnalyze} 
                  className="bg-foodie-green hover:bg-foodie-green-dark w-full"
                >
                  Find Sustainable Options
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {showResults && (
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-foodie-green-dark">Sustainable Packaging Recommendations</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <TrendingDown className="h-5 w-5 mr-2 text-foodie-green" />
                  Carbon Footprint Comparison
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={carbonFootprintData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {carbonFootprintData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <RechartsTooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="mb-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#ff7c43] mr-2"></div>
                        <span className="text-sm">Current</span>
                      </div>
                      <p className="text-2xl font-bold">32 kg CO₂e</p>
                      <p className="text-xs text-gray-500">per 100 orders</p>
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#4CAF50] mr-2"></div>
                        <span className="text-sm">Recommended</span>
                      </div>
                      <p className="text-2xl font-bold">14 kg CO₂e</p>
                      <p className="text-xs text-gray-500">per 100 orders</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-green-600">56% reduction</span> in carbon footprint possible with recommended options
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4 flex items-center">
                  <ArrowUpDown className="h-5 w-5 mr-2 text-foodie-green" />
                  Sustainability Comparison
                </h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 10]} />
                      <Radar name="Current" dataKey="current" stroke="#FF8042" fill="#FF8042" fillOpacity={0.6} />
                      <Radar name="Recommended" dataKey="recommended" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.6} />
                      <RechartsTooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Top Recommended Packaging Options</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {packagingOptions.map((option) => (
                <Card key={option.id} className="overflow-hidden">
                  <div className="bg-gray-50 p-4 flex items-center justify-center">
                    <Leaf className="h-12 w-12 text-foodie-green" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <h5 className="font-medium">{option.name}</h5>
                      {option.id === 1 && (
                        <div className="bg-foodie-green text-white text-xs px-2 py-0.5 rounded-full flex items-center">
                          <Star className="h-3 w-3 mr-1" />
                          Top Pick
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{option.material}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                      <div>
                        <p className="text-gray-500">Carbon</p>
                        <p className="font-medium">{option.carbonFootprint} kg CO₂e</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Recycle Rating</p>
                        <p className="font-medium">{option.recycleRating}%</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Cost/Unit</p>
                        <p className="font-medium">${option.cost.toFixed(2)}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Water Usage</p>
                        <p className="font-medium">{option.waterUsage} L</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {option.biodegradable && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                          Biodegradable
                        </span>
                      )}
                      {option.compostable && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                          Compostable
                        </span>
                      )}
                    </div>
                    
                    <Button variant="outline" className="w-full text-sm">
                      View Supplier Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-medium mb-4">Impact Analysis for Your Business</h4>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                  <h5 className="font-medium text-foodie-green-dark">Environmental Impact</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Switching to EcoLeaf Containers could reduce your annual carbon footprint by approximately 
                    <span className="font-medium"> 2,160 kg CO₂e</span>, equivalent to planting 
                    <span className="font-medium"> 98 trees</span>.
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                  <h5 className="font-medium text-foodie-green-dark">Financial Analysis</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    The recommended packaging options would increase your packaging costs by approximately 
                    <span className="font-medium"> 14%</span>, but could potentially increase customer satisfaction and loyalty, 
                    with an estimated <span className="font-medium">ROI of 122%</span> when factoring in brand reputation and customer retention.
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 border border-green-100 rounded-md">
                  <h5 className="font-medium text-foodie-green-dark">Brand Reputation</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    Based on market research, restaurants that switch to sustainable packaging see an average 
                    <span className="font-medium"> 27% increase</span> in positive customer reviews specifically mentioning sustainability efforts.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="bg-foodie-green hover:bg-foodie-green-dark">
                  Contact Recommended Suppliers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PackagingModel;
