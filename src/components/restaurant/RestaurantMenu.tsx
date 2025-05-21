
import { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Edit, Trash, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  is_sustainable: boolean;
}

interface RestaurantMenuProps {
  restaurantId: number;
}

const RestaurantMenu = ({ restaurantId }: RestaurantMenuProps) => {
  const { toast } = useToast();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<Partial<MenuItem>>({});
  const [isEditing, setIsEditing] = useState(false);
  
  // Sample menu items for demo purposes
  const sampleMenuItems: MenuItem[] = [
    { id: 1, name: "Organic Vegetable Salad", description: "Fresh locally sourced vegetables with house dressing", price: 12.99, category: "Starters", is_sustainable: true },
    { id: 2, name: "Grass-Fed Beef Burger", description: "100% grass-fed beef with artisan bun and toppings", price: 18.99, category: "Main", is_sustainable: true },
    { id: 3, name: "Pasta Carbonara", description: "Classic pasta with egg, cheese and pancetta", price: 16.99, category: "Main", is_sustainable: false },
    { id: 4, name: "Wild-Caught Salmon", description: "Sustainably sourced salmon with seasonal vegetables", price: 24.99, category: "Main", is_sustainable: true },
    { id: 5, name: "Chocolate Cake", description: "Rich chocolate cake with fair-trade cocoa", price: 8.99, category: "Dessert", is_sustainable: false },
  ];

  useEffect(() => {
    // In a real app, we would fetch menu items from the database
    // For now, we'll use the sample data
    setMenuItems(sampleMenuItems);
    setIsLoading(false);
  }, [restaurantId]);

  const handleAddItem = () => {
    setCurrentItem({});
    setIsEditing(false);
    setIsDialogOpen(true);
  };

  const handleEditItem = (item: MenuItem) => {
    setCurrentItem(item);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleDeleteItem = (id: number) => {
    // In a real app, we would delete from the database
    setMenuItems(menuItems.filter(item => item.id !== id));
    toast({
      title: "Item Deleted",
      description: "Menu item has been removed",
    });
  };

  const handleSaveItem = () => {
    if (!currentItem.name || !currentItem.price) {
      toast({
        title: "Error",
        description: "Name and price are required",
        variant: "destructive",
      });
      return;
    }

    if (isEditing) {
      // Update existing item
      setMenuItems(menuItems.map(item => 
        item.id === currentItem.id ? { ...item, ...currentItem } as MenuItem : item
      ));
      toast({
        title: "Item Updated",
        description: "Menu item has been updated",
      });
    } else {
      // Add new item
      const newItem: MenuItem = {
        id: Math.max(0, ...menuItems.map(item => item.id)) + 1,
        name: currentItem.name || "",
        description: currentItem.description || "",
        price: currentItem.price || 0,
        category: currentItem.category || "Main",
        is_sustainable: currentItem.is_sustainable || false,
      };
      
      setMenuItems([...menuItems, newItem]);
      toast({
        title: "Item Added",
        description: "New menu item has been added",
      });
    }
    
    setIsDialogOpen(false);
  };

  if (isLoading) {
    return <div>Loading menu items...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-foodie-green-dark">Restaurant Menu</h2>
        <Button onClick={handleAddItem} className="bg-foodie-green hover:bg-foodie-green-dark">
          <Plus className="h-4 w-4 mr-2" /> Add Menu Item
        </Button>
      </div>
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-6 border border-yellow-200">
        <div className="flex items-start">
          <Star className="h-5 w-5 text-foodie-yellow mr-2 mt-0.5" />
          <div>
            <h3 className="font-medium text-foodie-green-dark">Sustainability Indicator</h3>
            <p className="text-sm text-gray-600">
              Items marked with a star (<Star className="h-4 w-4 text-foodie-yellow inline" />) are sustainable choices 
              with lower environmental impact based on sourcing, carbon footprint, and waste reduction metrics.
            </p>
          </div>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-center">Sustainable</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {menuItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                  No menu items found. Add your first item to get started.
                </TableCell>
              </TableRow>
            ) : (
              menuItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.name}
                    {item.is_sustainable && (
                      <Star className="h-4 w-4 text-foodie-yellow inline ml-1" />
                    )}
                  </TableCell>
                  <TableCell className="text-gray-600 max-w-xs truncate">{item.description}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                  <TableCell className="text-center">
                    {item.is_sustainable ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full">Yes</span>
                    ) : (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full">No</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => handleEditItem(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDeleteItem(item.id)}>
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditing ? 'Edit Menu Item' : 'Add New Menu Item'}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Item Name</Label>
              <Input
                id="name"
                value={currentItem.name || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })}
                placeholder="Enter item name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={currentItem.description || ''}
                onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })}
                placeholder="Describe the menu item"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={currentItem.category || 'Main'}
                  onChange={(e) => setCurrentItem({ ...currentItem, category: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="Starters">Starters</option>
                  <option value="Main">Main</option>
                  <option value="Sides">Sides</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Drinks">Drinks</option>
                </select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price ($)</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={currentItem.price || ''}
                  onChange={(e) => setCurrentItem({ ...currentItem, price: parseFloat(e.target.value) })}
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Checkbox
                id="sustainable"
                checked={currentItem.is_sustainable || false}
                onCheckedChange={(checked) => 
                  setCurrentItem({ ...currentItem, is_sustainable: checked as boolean })
                }
              />
              <Label htmlFor="sustainable" className="text-sm font-normal">
                This item is sustainably sourced/produced
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleSaveItem}>
              {isEditing ? 'Update Item' : 'Add Item'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RestaurantMenu;
