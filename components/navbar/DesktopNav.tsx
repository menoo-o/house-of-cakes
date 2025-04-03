import Image from "next/image";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <nav className="flex items-center justify-between p-4 overflow-visible">
      <Image
        src="/logo.png"
        alt="Logo"
        width={512}
        height={512}
        quality={100}
        className="w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[180px] lg:h-[180px] xl:w-[250px] xl:h-[250px] 
                  object-contain p-1 -mt-6"
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
