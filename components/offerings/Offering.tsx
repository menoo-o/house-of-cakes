import Image from "next/image";

const Offering = () => {
  return (
    <section className="px-4 py-10 md:py-16 md:mt-10 bg-[#f7f4f2]">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-10 md:mb-15 text-[#513516]">
      Treats for Every Taste
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Cakes - Full height */}
        <div className="relative group h-[350px] md:h-[635px]">
          <Image
            src="/insta/cake10.jpg"
            alt="Cakes"
            fill
            className="object-cover rounded-xl shadow-md"
          />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/2 transition rounded-xl" />
          <h3 className="absolute bottom-5 left-5 text-white text-4xl md:text-6xl font-semibold tracking-wide">
            Cakes
          </h3>
        </div>

        {/* Right Column: Cupcakes & Biscuits */}
        <div className="flex flex-col gap-6">
          {/* Cupcakes */}
          <div className="relative group h-[250px] md:h-[310px]">
            <Image
              src="/insta/cake12.jpg"
              alt="Cupcakes"
              fill
              className="object-cover rounded-xl shadow-md"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/2 transition rounded-xl" />
            <h3 className="absolute bottom-4 left-4 text-white text-4xl md:text-5xl font-semibold">
              Cupcakes
            </h3>
          </div>

          {/* Biscuits */}
          <div className="relative group h-[250px] md:h-[300px]">
            <Image
              src="/insta/cake4.jpg"
              alt="Biscuits"
              fill
              className="object-cover rounded-xl shadow-md"
            />
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/2 transition rounded-xl" />
            <h3 className="absolute bottom-4 left-4 text-white text-4xl md:text-5xl font-semibold">
              Biscuits
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offering;
