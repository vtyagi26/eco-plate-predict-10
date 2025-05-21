
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would handle form submission here
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };
  
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foodie-green-dark">
            Get in <span className="text-foodie-yellow">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Want to learn how FoodieSync can help your restaurant?
            We'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <Card className="p-6 h-full">
              <h3 className="text-xl font-semibold mb-6 text-foodie-green-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-foodie-yellow/10 p-3 rounded-full mr-4">
                    <MapPin className="text-foodie-yellow" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foodie-green-dark">Our Location</h4>
                    <p className="text-gray-600">
                      123 Restaurant Avenue<br />
                      Foodie City, FC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-foodie-yellow/10 p-3 rounded-full mr-4">
                    <Mail className="text-foodie-yellow" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foodie-green-dark">Email Us</h4>
                    <p className="text-gray-600">
                      info@foodiesync.com<br />
                      support@foodiesync.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-foodie-yellow/10 p-3 rounded-full mr-4">
                    <Phone className="text-foodie-yellow" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foodie-green-dark">Call Us</h4>
                    <p className="text-gray-600">
                      (123) 456-7890<br />
                      (987) 654-3210
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="md:w-2/3">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-foodie-green-dark">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="How can we help you?" 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Write your message here..." 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-foodie-green hover:bg-foodie-green-dark text-white"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
