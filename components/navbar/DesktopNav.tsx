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
        className="scale-100 md:scale-185 lg:scale-190 hover:scale-150 object-contain p-1" 
    />

      <input type="text" placeholder="Search..."  className="w-1/3 p-2 border rounded-md focus:outline-none" />

      <div className="flex items-center space-x-6">
        <Link href="/cart">
          <Image src="/icons/cart.svg" alt="Cart" width={30} height={30} />
        </Link>
        <Link href="/account/login">
          <Image src="/icons/login.svg" alt="Login" width={30} height={30} />
        </Link>
      </div>
    </nav>
  );
}
