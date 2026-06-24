import CategorySection from "../sections/CategorySection";
import Features from "../sections/Features";
import ProductHeroSection from "../sections/ProductHeroSection";
import Products from "../sections/Products";
import Testimonials from "../sections/Testimonials";
import Banner from "../../home/sections/Banner";

const ProductsPage = () => {
  return (
    <>
      <ProductHeroSection />
      <CategorySection />
      <Products />
      <Banner />
      <Features />
      <Testimonials />
    </>
  );
};

export default ProductsPage;
