import useScrollToSection from "@/hooks/useScrollToSection";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ cat }) => {
  return (
    <div className="relative w-56 h-32 rounded-xl overflow-hidden border border-neutral-800 shrink-0 group">
      <img
        src={cat.image}
        alt={cat.name}
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 group-hover:scale-125 transition duration-500"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <span className="text-white font-medium text-sm capitalize tracking-wide">
          {cat.name.replace("-", " ")}
        </span>
      </div>
    </div>
  );
};

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

  const categories = [
    {
      name: "electronics",
      image: "https://i.postimg.cc/HJ3QmQCZ/product14.webp",
    },
    { name: "jewelery", image: "https://i.postimg.cc/d7n8F8KR/product8.webp" },
    {
      name: "men's clothing",
      image: "https://i.postimg.cc/rdqS7f7j/product2.webp",
    },
    {
      name: "women's clothing",
      image: "https://i.postimg.cc/sBKpzpRN/product16.webp",
    },
    {
      name: "beauty",
      image:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    },
    {
      name: "fragrances",
      image:
        "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
    },
    {
      name: "furniture",
      image:
        "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
    },
    {
      name: "sunglasses",
      image:
        "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/1.webp",
    },
    {
      name: "home-decoration",
      image:
        "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp",
    },
    {
      name: "kitchen-accessories",
      image:
        "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp",
    },
    {
      name: "skin-care",
      image:
        "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp",
    },
    {
      name: "sports-accessories",
      image:
        "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp",
    },
    {
      name: "smartphones",
      image:
        "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
    },
  ];

  const half = Math.ceil(categories.length / 2);

  const topCategories = categories.slice(0, half);
  const bottomCategories = categories.slice(half);

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
              className="hidden lg:block text-xs uppercase tracking-widest text-neutral-400 mb-6 cursor-pointer hover:text-white transition-all"
            >
              API Endpoints
            </Link>

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
                  text-neutral-500
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
              <Link
                to="/docs"
                onClick={() => scrollToSection("code-examples")}
                className="hidden lg:block text-xs uppercase tracking-widest text-neutral-400 mt-6 cursor-pointer hover:text-white transition-all"
              >
                Code examples
              </Link>
            </nav>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-6 sm:px-10 lg:px-16 py-12">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl text-white text-center mb-6 lg:mb-0">
            Learn more about Dummistore{" "}
            <span className="italic text-[#ff6044]">API</span>
          </h1>

          <p className="text-white/50 text-sm max-w-md mx-auto mt-4 mb-12 lg:mb-0 text-center">
            Learn about the available API endpoints and how to interact with
            them.
          </p>

          {/* BASE URL SECTION */}
          <div className="mb-24">
            <h1
              id="base-url"
              className="text-2xl text-neutral-400 font-light lg:pt-24 mb-12"
            >
              <span className=" text-[#ff6044]">#</span> BASE URL
            </h1>

            <div className="rounded-lg border border-neutral-800 overflow-hidden pb-12 bg-neutral-950">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 mb-6 border-b border-neutral-800 bg-neutral-900">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              {/* URL */}
              <a
                href="https://dummistore-wuga.onrender.com"
                className="p-4 text-sm text-neutral-300 overflow-x-auto hover:underline cursor-pointer endpoint-path"
              >
                https://dummistore-wuga.onrender.com
              </a>
            </div>
          </div>

          {/* RESPONSE FORMAT SECTION */}
          <div className="-mt-6 lg:-mt-24">
            <h1
              id="response-format"
              className="text-2xl text-neutral-400 font-light lg:pt-24 mb-12"
            >
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
          <div className="mt-18 lg:mt-0">
            <h1
              id="categories"
              className="text-2xl text-neutral-400 font-light lg:pt-24 "
            >
              <span className="text-[#ff6044]">#</span> CATEGORIES LIST
            </h1>

            {/* ROW 1 */}
            <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>

              <div className="marquee-inner flex min-w-[200%] pt-10 pb-5 gap-6">
                {[...topCategories, ...topCategories].map((cat, i) => (
                  <CategoryCard key={i} cat={cat} />
                ))}
              </div>

              <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
            </div>

            {/* ROW 2 */}
            <div className="w-full mx-auto max-w-5xl overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>

              <div className="marquee-inner marquee-reverse flex min-w-[200%] pt-5 pb-10 gap-6">
                {[...bottomCategories, ...bottomCategories].map((cat, i) => (
                  <CategoryCard key={i} cat={cat} />
                ))}
              </div>

              <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
            </div>
          </div>

          {/* API ENDPOINTS SECTION */}
          <div className="space-y-24">
            <h1
              id="endpoints"
              className="text-2xl text-neutral-400 font-light lg:pt-24 text-start mt-12 mb-12 lg:-mb-12"
            >
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
        </div>
      </div>
    </section>
  );
};

export default Docs;
