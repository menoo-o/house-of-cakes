"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import './nav.css'

export function Navbar() {
  return (
    <Sheet>
      {/* Trigger (Hamburger Icon) */}
      <SheetTrigger className="p-2">
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      {/* Sliding Menu */}
      <SheetContent side="left" className="w-[250px]">
        <nav className="flex flex-col gap-4 p-4">
          <Link href="/" className="text-lg font-medium">Home</Link>
          <Link href="/shop" className="text-lg font-medium">Shop</Link>
          <Link href="/about" className="text-lg font-medium">About</Link>
          <Link href="/contact" className="text-lg font-medium">Contact</Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
