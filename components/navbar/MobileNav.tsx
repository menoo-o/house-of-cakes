"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Hamburger Menu */}
      <Sheet>
        <SheetTrigger>
          <Menu className="h-6 w-6" />
        </SheetTrigger>

        <SheetTitle className="hidden">
        </SheetTitle> 

        <SheetContent side="left" className="w-[315px]">
          <ul className="space-y-4 text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/account/login">Login</Link></li>
          </ul>
        </SheetContent>

      </Sheet>

      {/* Logo */}
      <Image 
         src="/logo.png" 
         alt="Logo" 
         width={100} 
         height={40}
         quality={100}  // Increase quality 
         className="object-contain p-1 scale-160 md:scale-180 lg:scale-140"
      />

      {/* Cart Icon */}
      <Link href="/icons/cart">
        <Image src="/icons/cart.svg" alt="Cart" width={30} height={30} />
      </Link>
    </nav>
  );
}
