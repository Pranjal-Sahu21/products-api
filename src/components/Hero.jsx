import apiExample from "../assets/api.png";

export default function Hero() {
  const previewProducts = [
    {
      id: 1,
      title: "Fjallraven Backpack",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: { rate: 3.9 },
    },
    {
      id: 2,
      title: "Mens Casual Premium T-Shirt",
      price: 22.3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      rating: { rate: 4.1 },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      rating: { rate: 4.7 },
    },
  ];

  return (
    <section className="relative bg-[#121313] text-white min-h-screen overflow-hidden flex flex-col -mt-20">
      {/* HERO CONTENT */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-6 md:px-16 mt-40">
        {/* LEFT SIDE */}
        <div>
          {/* COMMUNITY BADGE */}
          <div className="flex items-center p-1.5 rounded-full border border-[#ff6044]/40 text-xs w-fit">
            <img
              className="size-7 rounded-full border border-[#ff6044]"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=50"
            />
            <img
              className="size-7 rounded-full border border-[#ff6044] -translate-x-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50"
            />
            <img
              className="size-7 rounded-full border border-[#ff6044] -translate-x-4"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50"
            />

            <p className="-translate-x-2 text-gray-300">
              Used by 10k+ developers
            </p>
          </div>

          {/* HERO TITLE */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 leading-tight max-w-lg ">
            Test Ecommerce Apps
            <br />
            instantly for
            <span className="text-[#ff6044] italic"> free</span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-neutral-400 font-light mt-6 max-w-md">
            Fetch fake product data instantly. No authentication required and
            completely free.
          </p>

          {/* CTA */}
          <div className="flex gap-4 mt-8">
            <button className="bg-[#ff6044] hover:opacity-90 cursor-pointer text-sm font-medium text-[#121313] px-6 py-1 rounded-lg transition-all">
              Get Started
            </button>

            <button className="border border-gray-700 hover:border-[#ff6044] text-sm font-medium px-6 py-2 rounded-lg cursor-pointer transition-all">
              Try API
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* GLOW */}
          <div className="absolute w-80 h-80 bg-[#ff6044]/30 blur-[160px] rounded-full" />

          {/* JSON CARD */}
          <div className="relative bg-[#121313] border border-gray-800 rounded-xl shadow-xl overflow-hidden w-full max-w-md">
            <img src={apiExample} alt="API Example" className="w-full" />{" "}
          </div>
        </div>
      </div>

      {/* PRODUCT CONTAINER */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
        <div className="bg-[#1a1b1b] border border-gray-800 rounded-2xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {previewProducts.map((product) => (
              <div
                key={product.id}
                className="bg-[#121313] border border-gray-800 rounded-xl p-4 hover:border-[#ff6044] hover:scale-[1.03] transition"
              >
                <div className="h-32 flex items-center justify-center bg-white rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 object-contain"
                  />
                </div>

                <h3 className="text-sm font-medium line-clamp-2">
                  {product.title}
                </h3>

                <div className="flex justify-between items-center mt-3">
                  <span className="text-[#ff6044] font-semibold">
                    ${product.price}
                  </span>

                  <span className="text-xs text-gray-400">
                    ⭐ {product.rating.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
