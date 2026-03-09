import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export default function Products() {
  const images = [
    "https://cdn.dummyjson.com/product-images/sports-accessories/baseball-ball/1.webp",
    "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp",
    "https://cdn.dummyjson.com/product-images/skin-care/olay-ultra-moisture-shea-butter-body-wash/1.webp",
    "https://cdn.dummyjson.com/product-images/kitchen-accessories/microwave-oven/1.webp",
    "https://cdn.dummyjson.com/product-images/kitchen-accessories/ice-cube-tray/1.webp",
    "https://cdn.dummyjson.com/product-images/home-decoration/table-lamp/1.webp",
    "https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp",
    "https://cdn.dummyjson.com/product-images/sunglasses/sunglasses/1.webp",
    "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/1.webp",
    "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/1.webp",
    "https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/1.webp",
    "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/1.webp",
    "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    "https://cdn.dummyjson.com/product-images/sunglasses/party-glasses/1.webp",
    "https://cdn.dummyjson.com/product-images/kitchen-accessories/grater-black/1.webp",
    "https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp",
    "https://cdn.dummyjson.com/product-images/skin-care/vaseline-men-body-and-face-lotion/1.webp",
    "https://cdn.dummyjson.com/product-images/sports-accessories/basketball/1.webp",
    "https://cdn.dummyjson.com/product-images/sports-accessories/cricket-wicket/1.webp",
    "https://cdn.dummyjson.com/product-images/sports-accessories/tennis-ball/1.webp",
    "https://cdn.dummyjson.com/product-images/sports-accessories/volleyball/1.webp",
    "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
    "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
    "https://cdn.dummyjson.com/product-images/sunglasses/classic-sun-glasses/1.webp",
    "https://cdn.dummyjson.com/product-images/kitchen-accessories/electric-stove/1.webp",
  ];
  return (
    <section
      id="products"
      className="py-24 bg-black bg-[radial-gradient(rgba(255,96,68,0.15)_1.5px,transparent_0)]
      bg-size-[20px_20px]
      bg-position-[-1px_-1px]"
    >
      <h2 className="text-white text-3xl md:text-4xl text-center">
        Products You’ll <span className="text-[#ff6044] italic">Get</span>
      </h2>
      <p className="text-white/50 text-sm max-w-md mx-auto mt-4 mb-16 text-center">
        See some of the products in our API
      </p>
      <ThreeDMarquee
        images={images}
        className="
  h-[75vh]
  mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
  mask-intersect
"
      />{" "}
    </section>
  );
}
