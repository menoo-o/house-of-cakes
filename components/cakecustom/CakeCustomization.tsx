import Link from "next/link";

const CakeCustomization = () => {
  return (
    <section className="bg-seashell text-walnut-brown py-10 px-5 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-6">Customize Your Perfect Cake 🎂</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {/* Cake Sizes */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Size</h3>
          <p className="text-sm">6″ - 2 Layers</p>
          <p className="text-sm">8″ - 2 Layers</p>
          <p className="text-sm">10″ - 2 Layers</p>
        </div>

        {/* Sponge */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Sponge</h3>
          <p className="text-sm">Vanilla</p>
          <p className="text-sm">Chocolate</p>
        </div>

        {/* Fillings */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Fillings</h3>
          <p className="text-sm">Nutella, Jam</p>
          <p className="text-sm">Chocolate Ganache</p>
          <p className="text-sm">Cookies & Cream</p>
        </div>

        {/* Cream & Extras */}
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Extras</h3>
          <p className="text-sm">Buttercream, Fresh Cream</p>
          <p className="text-sm">Toppers Available</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-6 text-center">
        <Link href="/faq/custom-cakes">
          <button className="px-6 py-3 text-lg font-semibold rounded-lg bg-orange-pantone text-white hover:bg-rosy-brown transition">
            View Full Guide
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CakeCustomization;
