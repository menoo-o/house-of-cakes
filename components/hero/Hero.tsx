// components/Hero.tsx
import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[350px] w-full bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/hero.jpg')" }}>
    {/* Overlay for better text visibility */}
    <div className="absolute inset-0 bg-black/40"></div> 
        <Image 
            src="/hero.jpg" 
            alt="Hero Image" 
            layout="fill"
            objectFit="cover"
        />
     

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">House of Cakes</h1>
        <h3 className="text-2xl md:text-4xl font-bold">For delicious breaks</h3>
        
        <a href="/order" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg text-lg">
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
