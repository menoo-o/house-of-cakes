import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full h-auto lg:h-[550px]">
      
      {/* LEFT TEXT BLOCK (Appears below the image on mobile) */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12 text-center lg:text-left bg-[var(--pure-white)] flex flex-col justify-center items-center lg:items-start">
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--brown)] uppercase">
        House of Cakes
      </h1>
        <h3 className="text-xl md:text-2xl text-[var(--walnut-brown)] mt-2">
          For delicious breaks
        </h3>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-row sm:flex-row gap-4">
          <a 
            href="/https://www.instagram.com/houseofcakeslc"
            className="bg-[var(--Orange-Pantone)] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all hover:scale-105"
          >
            Order Now
          </a>

          <a 
            href="/https://www.instagram.com/houseofcakeslc"
            className="border-2 border-[var(--brown)] text-[var(--brown)] font-semibold py-3 px-6 rounded-lg shadow-lg transition-all hover:bg-[var(--brown)] hover:text-white"
          >
            Shop Range
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE BLOCK (Appears first on mobile) */}
      <div className="relative w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-full">
        <Image 
          src="/cake.jpg" 
          alt="Hero Image" 
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>

    </div>
  );
};

export default Hero;
