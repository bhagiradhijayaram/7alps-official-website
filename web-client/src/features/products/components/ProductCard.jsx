import { CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";
import { motion } from "framer-motion";

const ProductCard = ({ product, variants }) => {
  return (
    <motion.div className="product-card overflow-hidden" variants={variants}>
      <div className="relative group">
        <img
          src={product.ProductImage}
          alt={product.ProductName}
          className="w-full h-72 object-cover"
        />

        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 transition-all duration-300">
          <button className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all cursor-pointer">
            <GrCart size={18} />
          </button>

          <button className="bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all cursor-pointer">
            <CiHeart size={22} />
          </button>
        </div>

        <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
          ⭐ {product.ProductRating}
        </div>
      </div>

      <div className="space-y-6 py-4">
        <h3 className="text-xl font-semibold mb-2">{product.ProductName}</h3>

        <p className="text-gray-600 mb-2">{product.ProductDescription}</p>

        <div className="flex items-center justify-between gap-4">
          <div className="text-lg font-semibold">₹{product.ProductPrice}</div>
          <button className="w-36 bg-[#008521] text-white py-2 rounded-md flex items-center justify-center gap-2 transition-all hover:bg-[#006b19] active:scale-95 cursor-pointer font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
