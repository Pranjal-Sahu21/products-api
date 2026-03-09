import apiExample from "../assets/api.png";

export default function Hero() {
  return (
    <section className="relative  bg-[#121313] text-white min-h-screen overflow-hidden flex flex-col md:justify-center -mt-20">
      {/* BACKGROUND */}
      <div className="absolute inset-0 cyber-pattern z-0" />

      {/* HERO CONTENT */}
      <div className="grid md:grid-cols-2 z-10 gap-16 items-center max-w-7xl mx-auto px-6 md:px-16 max-md:mt-36">
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl mt-6 leading-tight max-w-lg">
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
            <button className="bg-[#ff6044] hover:opacity-90 cursor-pointer text-xs sm:text-sm font-medium text-[#121313] px-6 py-2 sm:py-1 rounded-lg transition-all">
              View on Github
            </button>

            <button className="border border-gray-700 hover:border-[#ff6044] text-xs sm:text-sm font-medium px-6 py-3 sm:py-2 rounded-lg cursor-pointer transition-all">
              Read Docs
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center">
          {/* GLOW */}
          <div className="absolute w-80 h-80 bg-[#ff6044]/30 blur-[160px] rounded-full" />

          {/* JSON CARD */}
          <div className="relative bg-[#121313] rounded-xl shadow-xl overflow-hidden w-full max-w-md">
            <img src={apiExample} alt="API Example" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
