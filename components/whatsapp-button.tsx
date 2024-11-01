"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const phoneNumber = "+1234567890"; // Replace with your actual WhatsApp number
  const message = "Hello! I'm interested in your services.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-lg"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
}