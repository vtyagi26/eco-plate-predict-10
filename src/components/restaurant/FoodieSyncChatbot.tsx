
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const FoodieSyncChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Hello! I\'m FoodieSync AI, your sustainable food platform assistant. I can help you with carbon footprint calculations, restaurant management, NGO partnerships, packaging solutions, and all things related to sustainable food practices. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Prepare conversation history for context
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      console.log('Sending message to chatbot function:', inputMessage);

      const { data, error } = await supabase.functions.invoke('foodiesync-chatbot', {
        body: {
          message: inputMessage.trim(),
          conversationHistory
        }
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      if (!data || !data.response) {
        throw new Error('No response received from AI');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "Failed to get response from AI assistant. Please try again.",
        variant: "destructive",
      });

      // Add error message to chat
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try your question again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Messages Area */}
      <ScrollArea className="flex-1 px-3 sm:px-6" ref={scrollAreaRef}>
        <div className="space-y-4 py-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 sm:gap-3 ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div className={`
                flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center
                ${message.role === 'user' 
                  ? 'bg-foodie-yellow text-white' 
                  : 'bg-foodie-green text-white'
                }
              `}>
                {message.role === 'user' ? (
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </div>
              
              <div className={`
                max-w-[85%] sm:max-w-[80%] p-2 sm:p-3 rounded-lg text-sm
                ${message.role === 'user'
                  ? 'bg-foodie-yellow text-white ml-auto'
                  : 'bg-gray-100 text-gray-900'
                }
              `}>
                <div className="whitespace-pre-wrap break-words">
                  {message.content}
                </div>
                <div className={`
                  text-xs mt-1 opacity-70
                  ${message.role === 'user' ? 'text-white' : 'text-gray-500'}
                `}>
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex gap-2 sm:gap-3">
              <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-foodie-green text-white flex items-center justify-center">
                <Bot className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="bg-gray-100 p-2 sm:p-3 rounded-lg">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                  <span className="text-xs sm:text-sm text-gray-600">Thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      
      {/* Input Area */}
      <div className="p-3 sm:p-6 border-t bg-white shrink-0">
        <div className="flex gap-2 items-end">
          {isMobile ? (
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about sustainability..."
              disabled={isLoading}
              className="flex-1 min-h-[60px] max-h-[120px] resize-none text-sm"
              rows={2}
            />
          ) : (
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me about sustainability, carbon footprints, restaurant management..."
              disabled={isLoading}
              className="flex-1"
            />
          )}
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isLoading}
            className="bg-foodie-green hover:bg-foodie-green-dark shrink-0 h-10 w-10 sm:h-auto sm:w-auto sm:px-4"
            size={isMobile ? "icon" : "default"}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            {!isMobile && <span className="ml-2">Send</span>}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodieSyncChatbot;
