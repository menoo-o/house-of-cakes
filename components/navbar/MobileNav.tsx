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
              
            </div>

          {/* Main Navigation */}
<nav className="bg-white px-5 py-10">
  <ul className="space-y-5 text-lg font-semibold text-[var(--brown)]">
    <li>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-[var(--Orange-Pantone)] transition duration-200"
      >
        Easter
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-[var(--Orange-Pantone)] transition duration-200"
      >
        Cakes
      </Link>
    </li>
    <li>
      <Link
        href="/cupcakes"
        className="hover:underline underline-offset-4 decoration-[var(--Orange-Pantone)] transition duration-200"
      >
        Cupcakes
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-[var(--Orange-Pantone)] transition duration-200"
      >
        Biscuits
      </Link>
    </li>
    <li>
      <Link
        href="/"
        className="hover:underline underline-offset-4 decoration-[var(--Orange-Pantone)] transition duration-200"
      >
        Gifts
      </Link>
    </li>
  </ul>

  {/* Additional Info */}
  <div className="mt-10 border-t border-[var(--walnut-brown)] pt-5">
    <ul className="space-y-2 text-sm text-[var(--walnut-brown)]">
      <li>
        <Link
          href="https://www.instagram.com/houseofcakeslc"
          target="_blank"
          className="hover:underline underline-offset-4 decoration-[var(--Rosy-Brown)] transition duration-200"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="hover:underline underline-offset-4 decoration-[var(--Rosy-Brown)] transition duration-200"
        >
          Order Info
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="hover:underline underline-offset-4 decoration-[var(--Rosy-Brown)] transition duration-200"
        >
          Product Care Info
        </Link>
      </li>
    </ul>
  </div>
</nav>


            {/* Social Icons - Placed Below Product Info */}
            <div className="mt-12 flex items-center gap-7 justify-center border-t pt-6">
                <Link href="https://www.tiktok.com/@houseofcakeslc" target="_blank" className="hover:scale-110 transition">
                <Image src="/icons/instacol.svg" alt="Instagram" width={25} height={25} />
                </Link>
                <Link href="https://www.tiktok.com/@houseofcakeslc" target="_blank" className="hover:scale-110 transition">
                <Image src="/icons/tiktokcol.svg" alt="TikTok" width={25} height={25} />
                </Link>
            </div>
</SheetContent>



      </Sheet>

      {/* Logo */}
      <Image 
         src="/logo.png" 
         alt="Logo" 
         width={100} 
         height={100}
         quality={100}  // Increase quality 
         className="object-contain p-1 scale-180 md:scale-180 lg:scale-140"
      />

      {/* Cart Icon */}
      <Link href="/icons/cart">
        <Image src="/icons/cart.svg" alt="Cart" width={30} height={30} />
      </Link>
    </nav>
  );
}
