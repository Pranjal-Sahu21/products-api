import useScrollToSection from "@/hooks/useScrollToSection";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const scrollToSection = useScrollToSection();

  return (
    <nav
      className="sticky top-0 z-50
      flex items-center justify-between
      px-6 md:px-16 lg:px-24 xl:px-32 py-4
      h-20 bg-[#121313]/20
      backdrop-blur-2xl
      shadow-lg text-white"
    >
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-xl tracking-wide cursor-pointer"
      >
        DummiStore <span className="text-[#ff6044] italic">API</span>
      </h1>

      {/* MENU */}
      <div
        className={`absolute md:static top-0 left-0 h-screen md:h-auto
        bg-[#121313]/90 backdrop-blur-2xl md:bg-transparent
        flex flex-col md:flex-row items-center justify-center
        md:justify-start gap-8 text-2xl md:text-sm transition-all duration-300
        
        ${menuOpen ? "w-full bg-black/95" : "w-0 md:w-auto overflow-hidden"}`}
      >
        <Link
          to="/"
          onClick={() => {
            scrollToSection("features");
            setMenuOpen(false);
          }}
          className="hover:text-[#ff6044] cursor-pointer"
        >
          Features
        </Link>
        <Link
          to="/"
          onClick={() => {
            scrollToSection("products");
            setMenuOpen(false);
          }}
          className="hover:text-[#ff6044] cursor-pointer"
        >
          Products
        </Link>
        <Link
          to="/docs"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#ff6044] cursor-pointer"
        >
          Docs
        </Link>
        <a
          href="https://github.com/Pranjal-Sahu21/products-api-backend"
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#ff6044] cursor-pointer"
        >
          Github
        </a>
        <Link
          to="/"
          onClick={() => {
            scrollToSection("faq");
            setMenuOpen(false);
          }}
          className="hover:text-[#ff6044] cursor-pointer"
        >
          FAQs
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className={`${menuOpen ? "hidden" : "md:hidden p-2 rounded-md"}`}
      >
        ☰
      </button>
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`${!menuOpen ? "hidden" : "md:hidden p-2 z-10"}`}
      >
        ✕
      </button>
    </nav>
  );
};

export default Navbar;
