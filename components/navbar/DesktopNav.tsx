import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Image 
         src="/logo.png" 
         alt="Logo" 
         width={90} 
         height={90}    
         quality={100}  // Increase quality
         className="scale-100 md:scale-125 lg:scale-220 xl:scale-290 2xl:scale-320 object-contain p-1"
    />

      <input type="text" placeholder="Search..."  className="w-1/3 p-2 border rounded-md focus:outline-none" />

      <div className="flex items-center space-x-6">
        <Link href="/cart">
          <Image src="/icons/basket.svg" alt="Cart" width={28} height={28} />
        </Link>
        <Link href="/account/login">
          <Image src="/icons/personn.svg" alt="Login" width={30} height={30} />
        </Link>
      </div>
    </nav>
  );
}
