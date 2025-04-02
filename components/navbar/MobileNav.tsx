"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle, } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Hamburger Menu */}
      <Sheet>
        <SheetTrigger>
          <Menu className="h-8 w-8 " />
        </SheetTrigger>

        <SheetTitle className="hidden">
        </SheetTitle> 

        <SheetContent side="left" className="w-[315px] bg-white shadow-lg p-5 flex flex-col h-full">

   
            {/* Accounts Section */}
            <div className="mt-4 mb-6">
                <Link href="/account" className="flex items-center gap-3 text-lg font-medium text-gray-800 hover:text-pink-600 transition">
                Account <Image src="/icons/personn.svg" alt="Account" width={24} height={24} />
                </Link>
            </div>

            {/* Main Navigation */}
            <nav>
                <ul className="space-y-4 text-lg font-medium text-gray-800">
                <li><Link href="/" className="hover:text-pink-600 transition">Easter</Link></li>
                <li><Link href="/cakes" className="hover:text-pink-600 transition">Cakes</Link></li>
                <li><Link href="/cupcakes" className="hover:text-pink-600 transition">Cupcakes</Link></li>
                <li><Link href="/biscuits" className="hover:text-pink-600 transition">Biscuits</Link></li>
                <li><Link href="/gifts" className="hover:text-pink-600 transition">Gifts</Link></li>
                </ul>
            </nav>

            {/* Additional Info */}
            <div className="mt-10 border-t pt-5">
                <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/contact" className="hover:text-pink-600 transition">Contact Us</Link></li>
                <li><Link href="/order-info" className="hover:text-pink-600 transition">Order Info</Link></li>
                <li><Link href="/product-care" className="hover:text-pink-600 transition">Product Care Info</Link></li>
                </ul>
            </div>

            {/* Social Icons - Placed Below Product Info */}
            <div className="mt-12 flex items-center gap-7 justify-center border-t pt-6">
                <Link href="https://instagram.com" className="hover:scale-110 transition">
                <Image src="/icons/insta.svg" alt="Instagram" width={25} height={25} />
                </Link>
                <Link href="https://tiktok.com" className="hover:scale-110 transition">
                <Image src="/icons/tiktok.svg" alt="TikTok" width={25} height={25} />
                </Link>
            </div>
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
