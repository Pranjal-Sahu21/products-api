import useScrollToSection from "@/hooks/useScrollToSection";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Docs = () => {

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
      <div className="w-full mx-auto flex flex-col lg:flex-row">
        {/* SIDEBAR */}
        <aside
          className="
          lg:w-72
          lg:min-h-screen
          lg:border-r
          border-neutral-800
          bg-neutral-950/80
          backdrop-blur
          "
        >
          <div className="lg:sticky lg:top-24 p-6">
            <h3 className="hidden lg:block text-xs uppercase tracking-widest text-neutral-500 mb-6">
              API Endpoints
            </h3>

            {/* Desktop Sidebar */}
            <nav className="hidden lg:flex flex-col gap-2">
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
                  text-neutral-400
                  hover:text-white
                  hover:bg-neutral-900
                  transition cursor-pointer
                  "
                >
                  <span className="truncate">{ep.title}</span>

                  <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400">
                    {ep.method}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>


        {/* MAIN CONTENT */}
        <div className="flex-1 px-6 sm:px-10 lg:px-16 py-12">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl text-white text-center mb-4">
            API <span className="italic text-[#ff6044]">Documentation</span>
          </h1>

          <p className="text-white/50 text-sm max-w-md mx-auto mt-4 mb-12 lg:mb-0 text-center">
            Learn about the available API endpoints and how to interact with
            them.
          </p>

          <div className="space-y-24">
            {endpoints.map((ep, index) => (
              <div key={ep.id}>
                <div id={ep.id} className="lg:pt-24">
                  {/* Section Title */}
                  <h2 className="text-2xl text-white mb-6 flex gap-3 items-center">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
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
                  <div className="mt-24 lg:-mb-24 border-t border-neutral-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Docs;
