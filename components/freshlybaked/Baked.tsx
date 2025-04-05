import Image from "next/image";

const Baked: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--brown)]">
            FRESHLY BAKED, <br /> EVERY DAY
          </h2>
          <p className="mt-4 text-[var(--walnut-brown)] text-lg leading-relaxed">
            Our cakes are handmade in small batches by a team of passionate bakers.
          </p>
          <p className="mt-2 text-[var(--walnut-brown)] text-lg leading-relaxed">
            We use high-quality ingredients in our brownies & cakes; real chocolate, fresh eggs & natural butter.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image
            src="/baked.webp" // Make sure to place an image in public folder
            alt="Freshly Baked Cakes"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Baked;
