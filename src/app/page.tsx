"use client";
import { useState } from "react";
import Link from 'next/link';
import HomeComponent from '@/components/Home';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
    
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8">
        <HomeComponent />
      </main>
      
    </div>
  );
}
