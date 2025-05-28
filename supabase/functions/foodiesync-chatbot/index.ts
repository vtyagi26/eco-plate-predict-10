
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const FOODIESYNC_CONTEXT = `
You are FoodieSync AI, an expert assistant for the FoodieSync platform - a comprehensive food sustainability and restaurant management system. You help users with:

PLATFORM OVERVIEW:
- FoodieSync connects restaurants, NGOs, packing companies, and users in a sustainable food ecosystem
- Focus on reducing food waste, carbon footprint tracking, and promoting sustainable practices

RESTAURANT FEATURES:
- Menu management with carbon footprint tracking for each item
- Food wastage prediction models and optimization
- Food preparation planning and efficiency models
- Sustainable packaging options and recommendations
- NGO partnership for food donations
- Analytics dashboard for sustainability metrics

CARBON FOOTPRINT & SUSTAINABILITY:
- Track carbon emissions for menu items
- Provide recommendations for reducing environmental impact
- Analyze packaging sustainability options
- Food waste reduction strategies
- Eco-friendly ingredient sourcing suggestions

NGO PARTNERSHIPS:
- Food donation coordination
- Surplus food redistribution
- Community impact tracking
- Partnership management tools

PACKING SOLUTIONS:
- Eco-friendly packaging recommendations
- Biodegradable and recyclable options
- Cost-effective sustainable alternatives
- Packaging impact assessment

USER FEATURES:
- Order tracking with carbon footprint information
- Restaurant ratings and reviews
- Preference management for dietary restrictions
- Sustainability scoring for food choices

Always provide helpful, accurate information about these topics. Be encouraging about sustainability practices and offer practical solutions.
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, conversationHistory = [] } = await req.json();

    if (!message) {
      throw new Error('Message is required');
    }

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('Gemini API key not configured');
    }

    // Prepare conversation context
    const messages = [
      { role: 'user', parts: [{ text: FOODIESYNC_CONTEXT }] },
      { role: 'model', parts: [{ text: 'I understand. I am FoodieSync AI, ready to help with all aspects of your sustainable food platform.' }] },
      ...conversationHistory.map((msg: any) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      })),
      { role: 'user', parts: [{ text: message }] }
    ];

    console.log('Calling Gemini API with message:', message);

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API error:', errorData);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gemini API response:', data);

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response from Gemini API');
    }

    const aiResponse = data.candidates[0].content.parts[0].text;

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in foodiesync-chatbot function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
