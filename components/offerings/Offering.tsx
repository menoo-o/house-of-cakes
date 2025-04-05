import Image from "next/image";

const Offering: React.FC = () => {
  return (
    <section className="py-10 bg-[var(--Seashell)]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center text-4xl font-bold text-[var(--brown)] mb-8">
          Our Offering
        </h2>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cakes - Full height on desktop */}
          <div className="relative group">
            <Image
              src="/cake.jpg"
              alt="Cakes"
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300 rounded-lg"></div>
            <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
              Cakes
            </h3>
          </div>

          {/* Cupcakes & Biscuits - Stacked on Desktop */}
          <div className="flex flex-col gap-6">
            {/* Cupcakes */}
            <div className="relative group">
              <Image
                src="/cake.jpg"
                alt="Cupcakes"
                width={600}
                height={200}
                className="w-full h-[200px] md:h-[50%] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300 rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
                Cupcakes
              </h3>
            </div>

            {/* Biscuits */}
            <div className="relative group">
              <Image
                src="/cake.jpg"
                alt="Biscuits"
                width={600}
                height={200}
                className="w-full h-[200px] md:h-[50%] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition duration-300 rounded-lg"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
                Biscuits
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offering;
