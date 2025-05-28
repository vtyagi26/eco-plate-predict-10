
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, X } from "lucide-react";
import FoodieSyncChatbot from "@/components/restaurant/FoodieSyncChatbot";

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              className="rounded-full w-14 h-14 bg-foodie-green hover:bg-foodie-green-dark shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          
          <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h2 className="text-lg font-semibold text-foodie-green-dark">
                  FoodieSync AI Assistant
                </h2>
                <p className="text-sm text-gray-600">
                  Ask me about sustainability, carbon footprints, and restaurant management
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-hidden">
              <FoodieSyncChatbot />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ChatbotToggle;
