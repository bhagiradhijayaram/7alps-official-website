import { PiPlantLight } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbShip } from "react-icons/tb";
import { FiTruck } from "react-icons/fi";
import { motion } from "framer-motion";
const whyChooseInfo = [
  {
    heading: "Global Trade",
    subHeading:
      "Delivering premium herbal products and natural ingredients to businesses",
    icon: <CiGlobe size={28} />,
  },
  {
    heading: "Countries Served",
    subHeading:
      "Expanding our presence across Asia, the Middle East, Europe, North America, and emerging international markets.",
    icon: <HiOutlineLocationMarker size={28} />,
  },
  {
    heading: "Import & Export Capablities",
    subHeading:
      "Supporting global trade through reliable sourcing, bulk supply, export operations, and international distribution",
    icon: <TbShip size={28} />,
  },
  {
    heading: "Supply Chain Network",
    subHeading:
      "A seamless network connecting farmers, processing facilities, logistics partners, and customers worldwide.",
    icon: <FiTruck size={28} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
const GlobalTrade = () => {
  return (
    <section className="py-15 px-6 xl:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:grid xl:grid-cols-2 gap-12">
          {/* Left Content */}
          {/* Image */}
          <div
            className="min-h-[400px] md:min-h-[600px] xl:min-h-[700px] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dasvdkncm/image/upload/v1782037725/Rectangle_3463768_frkoj4.png')",
            }}
          />
          <div className="">
            <motion.h2
              className="text-[28px] md:text-[32px] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Connecting Nature's Finest Ingredients to Businesses and Markets
              Across the World{" "}
            </motion.h2>

            <motion.ul
              className="flex flex-col gap-10 xl:gap-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {whyChooseInfo.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-5"
                >
                  <div className="bg-[#EEEEEE] h-22 w-22 flex-shrink-0 flex items-center justify-center rounded-lg text-gray-600">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[18] md:text-[24px] leading-tight mb-2">
                      {item.heading}
                    </h3>

                    <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-600">
                      {item.subHeading}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
            <motion.div
              className="mt-10 flex justify-center xl:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button className="bg-[#1C6A00] text-white py-3 px-5 rounded">
                Become a Partner
                <GoArrowRight className="inline ml-1.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalTrade;
