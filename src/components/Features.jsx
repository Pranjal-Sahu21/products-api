const features = [
  {
    title: "FREE",
    desc: "Access product data instantly with no cost. Perfect for demos, prototypes, and testing applications.",
  },
  {
    title: "WEBP",
    desc: "All product images are served in modern WebP format for smaller sizes and faster loading.",
  },
  {
    title: "NO AUTH",
    desc: "Start using the API instantly without API keys, login, or complicated setup.",
  },
  {
    title: "FAST",
    desc: "Lightning fast JSON responses designed for developers building modern applications.",
  },
  {
    title: "100+ PRODUCTS",
    desc: "Access over one hundred realistic product records ideal for testing eCommerce apps",
  },
  {
    title: "REAL DATA",
    desc: "Realistic product data ideal for eCommerce demos, UI testing, and learning projects.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-black py-20 px-4
      bg-[radial-gradient(rgba(255,96,68,0.15)_1.5px,transparent_0)]
      bg-size-[20px_20px]
      bg-position-[-1px_-1px]"
    >
      <div className="flex flex-col items-center justify-center text-center">
        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl mt-6">
          Features we <span className="text-[#ff6044] italic">offer</span>
        </h2>

        {/* Description */}
        <p className="text-white/50 text-sm max-w-md mx-auto mt-4">
          Some of our core features
        </p>

        {/* Marquee Container */}
        <div className="relative w-full max-w-3xl h-105 overflow-hidden mt-14">
          {/* Fade Top */}
          <div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-linear-to-b from-black to-transparent z-10" />

          {/* Fade Bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black to-transparent z-10" />

          {/* Scrolling Features */}
          <div className="flex flex-col gap-6 animate-[scrollFeatures_18s_linear_infinite]">
            {[...features, ...features].map((feature, i) => (
              <div
                key={i}
                className="bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl
                hover:-translate-y-1 hover:border-[#ff6044]/40 transition duration-300 p-6 text-left"
              >
                <div className="text-lg font-medium text-[#ff6044] italic tracking-wide">
                  {feature.title}
                </div>

                <p className="text-sm text-white/50 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes scrollFeatures {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Features;
