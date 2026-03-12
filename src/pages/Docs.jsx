import CodeExamples from "@/components/CodeExamples";
import useScrollToSection from "@/hooks/useScrollToSection";
import { ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Docs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const endpoints = [
    {
      id: 1,
      title: "Check Status",
      method: "GET",
      path: "/",
      example: "https://dummistore-wuga.onrender.com/",
      success: `Server is Live!`,
    },
    {
      id: 2,
      title: "Get All Products",
      method: "GET",
      path: "/products",
      example: "https://dummistore-wuga.onrender.com/products",
      success: `[
    {
        "id": 1,
        "title": "Item title1",
        "price": 21.00,
        "description": "Item description1",
        "category": "Item category",
        "image": "https://itemimage1.webp",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Item title2",
        "price": 25.00,
        "description": "Item description2",
        "category": "Item category",
        "image": "https://itemimage2.webp",
        "rating": {
            "rate": 2.9,
            "count": 10
        }
    }
]`,
    },
    {
      id: 3,
      title: "Get Products by ID",
      method: "GET",
      path: "/products/:id",
      example: "https://dummistore-wuga.onrender.com/products/1",
      success: `    {
        "id": 1,
        "title": "Item title1",
        "price": 21.00,
        "description": "Item description1",
        "category": "Item category",
        "image": "https://itemimage1.webp",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }`,
      error: `{
  "message": "Product not found"
}`,
    },
    {
      id: 4,
      title: "Get Products by Category",
      method: "GET",
      path: "/products/category/:category",
      example:
        "https://dummistore-wuga.onrender.com/products/category/smartphones",
      success: `[
    {
        "id": 1,
        "title": "Item title1",
        "price": 21.00,
        "description": "Item description1",
        "category": "smartphones",
        "image": "https://itemimage1.webp",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Item title2",
        "price": 25.00,
        "description": "Item description2",
        "category": "smartphones",
        "image": "https://itemimage2.webp",
        "rating": {
            "rate": 2.9,
            "count": 10
        }
    }
]`,
      error: `[]`,
    },
  ];

  const exampleResponse = `[
    {
        "id": 1,
        "title": "Item title",
        "price": 21.00,
        "description": "Item description",
        "category": "Item category",
        "image": "https://itemimage.webp",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
]`;

  const categoriesCode = `const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
  "beauty",
  "fragnances",
  "furniture",
  "sunglasses",
  "home-decoration",
  "kitchen-accessories",
  "skin-care",
  "sports-accessories",
  "smartphones"
];`;

  const languages = [
    {
      id: 1,
      title: "python",
    },
    {
      id: 2,
      title: "javascript",
    },
    {
      id: 3,
      title: "node.js",
    },
    {
      id: 4,
      title: "php",
    },
    {
      id: 5,
      title: "go",
    },
  ];

  const scrollToSection = useScrollToSection();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="
      -mt-32 lg:-mt-24
      py-24
      bg-black
      bg-[radial-gradient(rgba(255,96,68,0.15)_1.5px,transparent_0)]
      bg-size-[20px_20px]
      bg-position-[-1px_-1px]
      "
    >
      <div className="w-full mx-auto flex flex-col justify-center lg:flex-row">
        {/* SIDEBAR */}
        <aside
          className="
          lg:w-84
          lg:min-h-screen
          lg:border-r
          border-neutral-800
          bg-neutral-950/80
          backdrop-blur
          "
        >
          <div className="lg:sticky lg:top-24 p-6">
            <Link
              to="/docs"
              onClick={() => scrollToSection("base-url")}
              className="hidden lg:block text-xs uppercase tracking-widest text-neutral-400 mb-6 cursor-pointer hover:text-white transition-all"
            >
              Base Url
            </Link>
            <Link
              to="/docs"
              onClick={() => scrollToSection("response-format")}
              className="hidden lg:block text-xs uppercase tracking-widest text-neutral-400 mb-6 cursor-pointer hover:text-white transition-all"
            >
              Response format
            </Link>
            <Link
              to="/docs"
              onClick={() => scrollToSection("categories")}
              className="hidden lg:block text-xs uppercase tracking-widest text-neutral-400 mb-6 cursor-pointer hover:text-white transition-all"
            >
              Categories List
            </Link>
            <Link
              to="/docs"
              onClick={() => scrollToSection("endpoints")}
              className="hidden lg:block text-xs uppercase tracking-widest text-neutral-400 mb-2 cursor-pointer hover:text-white transition-all"
            >
              API Endpoints
            </Link>

            {/* Desktop Sidebar */}
            <nav className="hidden lg:flex flex-col">
              {endpoints.map((ep) => (
                <Link
                  to="/docs"
                  key={ep.id}
                  onClick={() => scrollToSection(ep.id)}
                  className="
                  flex items-center justify-between
                  px-3 py-2
                  rounded-lg
                  text-sm
                  text-neutral-500
                  hover:text-white
                  hover:bg-neutral-900
                  transition cursor-pointer
                  "
                >
                  <span className="truncate flex justify-center items-center gap-1">
                    <span className="font-extrabold text-lg">• </span>{" "}
                    {ep.title}
                  </span>

                  <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400">
                    {ep.method}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              to="/docs"
              onClick={() => scrollToSection("code-examples")}
              className="hidden lg:block text-xs uppercase tracking-widest text-neutral-400 mt-6 cursor-pointer hover:text-white transition-all"
            >
              Code examples
            </Link>
            {/* Desktop Sidebar */}
            <nav className="hidden lg:flex flex-col mt-2">
              {languages.map((lang) => (
                <Link
                  to="/docs"
                  key={lang.id}
                  onClick={() => scrollToSection(lang.title)}
                  className="
                  flex items-center justify-between
                  px-3 py-2
                  rounded-lg
                  text-sm
                  text-neutral-500
                  hover:text-white
                  hover:bg-neutral-900
                  transition cursor-pointer 
                  "
                >
                  <span className="truncate capitalize flex justify-center items-center gap-1">
                    <span className="font-extrabold text-lg">• </span>
                    {lang.title}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        {/* MOBILE SIDEBAR DRAWER */}
        <div
          className={`fixed top-0 left-0 h-full w-64 z-40 bg-neutral-950 text-neutral-400
          transition-transform duration-300 lg:hidden
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="p-6">
            {/* Headings Only */}
            <nav className="flex flex-col items-start gap-6 text-sm mt-[20vh]">
              <div className="text-white text-xl mb-2 tracking-widest">
                CONTENT
              </div>
              <button
                className="uppercase font-light tracking-widest"
                onClick={() => {
                  document
                    .getElementById("base-url")
                    .scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
              >
                Base URL
              </button>

              <button
                className="uppercase font-light tracking-widest"
                onClick={() => {
                  document
                    .getElementById("response-format")
                    .scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
              >
                Response Format
              </button>

              <button
                className="uppercase font-light tracking-widest"
                onClick={() => {
                  document
                    .getElementById("categories")
                    .scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
              >
                Categories List
              </button>

              <button
                className="uppercase font-light tracking-widest"
                onClick={() => {
                  document
                    .getElementById("endpoints")
                    .scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
              >
                API Endpoints
              </button>

              <button
                className="uppercase font-light tracking-widest"
                onClick={() => {
                  document
                    .getElementById("code-examples")
                    .scrollIntoView({ behavior: "smooth" });
                  setSidebarOpen(false);
                }}
              >
                Code Examples
              </button>
            </nav>
          </div>
        </div>

        {/* MOBILE SIDEBAR BUTTON */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`
          lg:hidden
          fixed
          top-20
          z-40
          p-2
          rounded-md
          bg-neutral-900
          border border-neutral-800
          text-white
          transition-all duration-300 left-4
        `}
        >
          <ChevronRight
            className={`size-5 transition-all duration-300 ${
              sidebarOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-6 sm:px-10 lg:px-16 py-12">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl text-white text-center mb-6 lg:mb-0">
            Learn more about Dummistore{" "}
            <span className="italic text-[#ff6044]">API</span>
          </h1>

          <p className="text-white/50 text-sm max-w-md mx-auto mt-4 text-center">
            Learn about the available API endpoints and how to interact with
            them.
          </p>

          {/* BASE URL SECTION */}
          <div id="base-url" className="mb-24 pt-24">
            <h1 className="text-2xl text-neutral-400 font-light tracking-wide mb-12">
              <span className=" text-[#ff6044]">#</span> BASE URL
            </h1>

            <div className="rounded-lg border border-neutral-800 overflow-hidden pb-4 bg-neutral-950">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 mb-6 border-b border-neutral-800 bg-neutral-900">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              {/* URL */}
              <a
                href="https://dummistore-wuga.onrender.com"
                className="block p-4 text-sm text-neutral-300 overflow-x-auto hover:underline cursor-pointer endpoint-path"
              >
                https://dummistore-wuga.onrender.com
              </a>
            </div>
          </div>

          {/* RESPONSE FORMAT SECTION */}
          <div id="response-format" className="-mt-24">
            <h1 className="text-2xl text-neutral-400 font-light tracking-wide pt-24 mb-12">
              <span className=" text-[#ff6044]">#</span> RESPONSE FORMAT
            </h1>

            <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 mb-6 border-b border-neutral-800 bg-neutral-900">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
                {exampleResponse}
              </pre>
            </div>
          </div>

          {/* CATEGORIES SECTION */}
          <div id="categories">
            <h1 className="text-2xl text-neutral-400 font-light tracking-wide pt-24 mb-12">
              <span className="text-[#ff6044]">#</span> CATEGORIES LIST
            </h1>

            <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 mb-6 border-b border-neutral-800 bg-neutral-900">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
                {categoriesCode}
              </pre>
            </div>
          </div>

          {/* API ENDPOINTS SECTION */}
          <div id="endpoints" className="space-y-24">
            <h1 className="text-2xl text-neutral-400 font-light tracking-wide pt-24 text-start lg:mt-0 mb-12 lg:-mb-12">
              <span className=" text-[#ff6044]">#</span> API ENDPOINTS
            </h1>
            {endpoints.map((ep, index) => (
              <div key={ep.id}>
                <div id={ep.id} className="lg:pt-24">
                  {/* Section Title */}
                  <h2 className="text-xl text-white mb-6 flex gap-2 items-center">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    {ep.title}
                  </h2>

                  <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6">
                    {/* Route */}
                    <div className="flex items-center gap-1 mb-6">
                      <span className="text-sm px-2 py-1 rounded bg-green-500/10 text-green-400">
                        {ep.method}
                      </span>

                      <code className="text-sm text-zinc-200 endpoint-path">
                        {ep.path}
                      </code>
                    </div>

                    {/* Request */}
                    <div className="mb-6">
                      <p className="text-sm text-neutral-400 mb-2">
                        Example Request
                      </p>

                      <div className="flex gap-2 bg-black border border-neutral-800 rounded-lg p-4 text-sm text-neutral-300 overflow-x-auto">
                        <span className="text-green-500">{ep.method}</span>

                        <a
                          href={ep.example}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline example-get"
                        >
                          {ep.example}
                        </a>
                      </div>
                    </div>

                    {/* Success */}
                    <div className="mb-6">
                      <p className="text-sm text-neutral-400 mb-2">
                        Success Response
                      </p>

                      <div className="rounded-lg border border-neutral-800 overflow-hidden bg-neutral-950">
                        <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-800 bg-neutral-900">
                          <span className="w-3 h-3 rounded-full bg-red-500"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>

                        <pre className="p-4 text-sm text-neutral-300 overflow-x-auto font-mono leading-relaxed">
                          {ep.success}
                        </pre>
                      </div>
                    </div>

                    {/* Error */}
                    {ep.error && (
                      <div>
                        <p className="text-sm text-red-400 mb-2">
                          Error Response
                        </p>

                        <pre className="bg-black border border-red-500/30 rounded-lg p-4 text-sm text-red-300 overflow-x-auto">
                          {ep.error}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>

                {/* Divider */}
                {index !== endpoints.length - 1 && (
                  <div className="hidden lg:block mt-24 lg:-mb-24 border-t border-neutral-700"></div>
                )}
              </div>
            ))}
          </div>

          {/* CODE EXAMPLES SECTION */}
          <CodeExamples />
        </div>
      </div>
    </section>
  );
};

export default Docs;
