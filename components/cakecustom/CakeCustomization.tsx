const CakeCustomization = () => {
  return (
    <section className="bg-seashell text-walnut-brown py-14 px-6 rounded-xl shadow-lg">
      <h2 className="text-4xl md:text-6xl text-[#513516] font-bold text-center mb-10 tracking-tight">
        Customize Your Perfect Cake
      </h2>
      <div className="flex justify-center px-4 md:px-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full text-center">
    
    {/* Size Card */}
    <div className="bg-white rounded-2xl shadow-md px-6 py-10 hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--Orange-Pantone)]">
        Size
      </h3>
      <ul className="text-base md:text-lg space-y-2 text-[var(--walnut-brown)]">
        <li>6″ - 2 Layers</li>
        <li>8″ - 2 Layers</li>
        <li>10″ - 2 Layers</li>
      </ul>
    </div>

    {/* Sponge Card */}
    <div className="bg-white rounded-2xl shadow-md px-6 py-10 hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--Orange-Pantone)]">
        Sponge
      </h3>
      <ul className="text-base md:text-lg space-y-2 text-[var(--walnut-brown)]">
        <li>Vanilla</li>
        <li>Chocolate</li>
      </ul>
    </div>

    {/* Fillings Card */}
    <div className="bg-white rounded-2xl shadow-md px-6 py-10 hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--Orange-Pantone)]">
        Fillings
      </h3>
      <ul className="text-base md:text-lg space-y-2 text-[var(--walnut-brown)]">
        <li>Nutella</li>
        <li>Jam</li>
        <li>Chocolate Ganache</li>
        <li>Cookies & Cream</li>
      </ul>
    </div>

    {/* Extras Card */}
    <div className="bg-white rounded-2xl shadow-md px-6 py-10 hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--Orange-Pantone)]">
        Extras
      </h3>
      <ul className="text-base md:text-lg space-y-2 text-[var(--walnut-brown)]">
        <li>Buttercream</li>
        <li>Fresh Cream</li>
        <li>Toppers Available</li>
      </ul>
    </div>

  </div>
</div>


      
    </section>
  );
};

export default CakeCustomization;
