import { useState } from "react";
import productsData from "../../products/data/productsData.json";
import { CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";

const tabs = ["All", "Hair Care", "Skin Care", "Health & Wellness"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const OurFeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProducts =
    activeTab === "All"
      ? productsData
      : productsData.filter((product) => product.ProductCategory === activeTab);

  return (
    <section className="our-featured-products mt-5 px-6 xl:px-0">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          className="space-y-4 py-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-[44px]">Our Featured Products</h2>
          <p className="text-[22px]">Our Journey from Farm to Wellness</p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded border transition-all ${
                activeTab === tab
                  ? "bg-[#008521] text-white border-[#008521]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#008521]"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeTab}
          className="products-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.slice(0, 6).map((product) => (
            <motion.div
              className="product-card overflow-hidden"
              key={product.id}
              variants={cardVariants}
            >
              <div className="relative group">
                <img
                  src={product.ProductImage}
                  alt={product.ProductName}
                  className="w-full h-72 object-cover"
                />

                {/* Icons */}
                <div
                  className="
    absolute top-4 right-4 flex flex-col gap-2
    opacity-100
    xl:opacity-0
    xl:group-hover:opacity-100
    transition-all duration-300
  "
                >
                  <button className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                    <GrCart size={18} />
                  </button>

                  <button className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-md">
                    <CiHeart size={22} />
                  </button>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
                  ⭐ {product.ProductRating}
                </div>
              </div>

              <div className="space-y-6 py-4">
                <h3 className="text-xl font-semibold mb-2">
                  {product.ProductName}
                </h3>

                <p className="text-gray-600 mb-4">
                  {product.ProductDescription}
                </p>

                <button
                  className="
            w-full
            bg-[#008521]
            text-white
            py-3
            flex items-center
            justify-center
            gap-2
            transition-colors
          "
                >
                  Buy Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {" "}
          <button className="px-6 py-2 rounded border my-2">
            View All
            <GoArrowRight className="inline ml-1.5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurFeaturedProducts;
