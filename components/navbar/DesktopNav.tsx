// components/navbar/DesktopNavbar.tsx
import Image from "next/image";
import Link from "next/link";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const DesktopNavbar = () => {
  return (
    <header className="hidden md:grid grid-cols-3 items-center px-8 py-4 bg-white ">
      {/* Left: Menubar Navigation */}
      <div className="flex gap-6">
        <Menubar className="bg-transparent border-none text-[#513516] font-medium space-x-6">
          <MenubarMenu>
            <MenubarTrigger className="text-lg hover:underline hover:text-[#FF580A] transition uppercase">Home</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-lg hover:underline hover:text-[#FF580A] transition uppercase">Shop</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-lg hover:underline hover:text-[#FF580A] transition uppercase">Things to Know</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-lg hover:underline hover:text-[#FF580A] transition uppercase">Contact Us</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Center: Logo */}
      <div className="flex justify-center -mt-6">
        <Image
          src="/logo.png"
          alt="Logo"
          width={512}
          height={512}
          quality={100}
          className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] md:scale-145 lg:w-[150px] lg:h-[150px] object-contain"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex justify-end items-center space-x-6">
        <Link href="/cart">
          <Image src="/icons/basket.svg" alt="Cart" width={30} height={30} />
        </Link>
        <Link href="/account/login">
          <Image src="/icons/personn.svg" alt="Login" width={33} height={33} />
        </Link>
      </div>
    </header>
  );
};

export default DesktopNavbar;
