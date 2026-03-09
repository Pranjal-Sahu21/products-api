import FAQSection from "./components/FAQSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <FAQSection />
      <Footer />
    </>
  );
};

export default App;
