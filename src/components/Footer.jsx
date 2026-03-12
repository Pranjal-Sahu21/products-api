import useScrollToSection from "@/hooks/useScrollToSection";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const scrollToSection = useScrollToSection();
  const { pathname } = useLocation();

  return (
    <div
      className={`${pathname === '/docs' ? "lg:-mt-44" : ""} bg-black pt-20 border border-black bg-[radial-gradient(rgba(255,96,68,0.15)_1.5px,transparent_0)]
      bg-size-[20px_20px]
      bg-position-[-1px_-1px]`}
    >
      <footer className="bg-[#0e0d0d] w-full mx-auto text-white pt-8 lg:pt-12 px-4 sm:px-8 md:px-16 lg:px-28 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-3 space-y-6">
            <a className="cursor-pointer text-xl text-white flex items-center gap-2">
              DummiStore <span className="italic text-[#ff6044]">API</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-96">
              Fast and free api to help developers test ecommerce websites
              without authentication.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 md:gap-6">
              <a
                href="https://github.com/Pranjal-Sahu21/products-api-backend"
                className="cursor-pointer hover:text-[#ff6044]"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranjal-sahu-/"
                className="cursor-pointer hover:text-[#ff6044]"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/prsahu_21"
                className="cursor-pointer hover:text-[#ff6044]"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:sahupranjal1619@gmail.com"
                className="cursor-pointer hover:text-[#ff6044]"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-28 items-start">
            {/* Products */}
            <div>
              <h3 className="text-sm mb-4">Products</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <a
                    onClick={() => scrollToSection("products")}
                    className="cursor-pointer hover:text-[#ff6044]"
                  >
                    Components
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">
                    Templates
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">Icons</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm mb-4">Resources</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <Link
                    to="/docs"
                    className="cursor-pointer hover:text-[#ff6044]"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">Blog</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">Support</a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-sm mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">About</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">Vision</a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer hover:text-[#ff6044]">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto mt-12 pt-4 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} DummiStore
          </p>
          <p className="text-neutral-500 text-sm">All rights reserved.</p>
        </div>

        {/* Neon Glow Text */}
        <div className="relative mt-10">
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-3xl h-full max-h-64 bg-[#ff6044] rounded-full blur-[150px] pointer-events-none"></div>
          <h1 className="text-center font-extrabold leading-[0.7] text-transparent text-[clamp(3rem,15vw,15rem)] [-webkit-text-stroke:1px_#0D542B] mt-6"></h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
