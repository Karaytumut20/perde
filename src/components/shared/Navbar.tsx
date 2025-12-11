"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md py-4 border-gray-200" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter uppercase mix-blend-difference text-current">
          ACOUSTIC<span className="font-light">LAB</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide mix-blend-difference text-current">
          {["Products", "Solutions", "Projects", "Resources", "About"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="relative group overflow-hidden"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-current transform -translate-x-full transition-transform group-hover:translate-x-0" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 mix-blend-difference text-current">
          <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
          <Link href="/contact" className="hidden md:block border border-current px-5 py-2 text-sm font-medium rounded-full hover:bg-current hover:text-white transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
