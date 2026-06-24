import { GoArrowRight } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { PiBuildingOfficeLight } from "react-icons/pi";

const Features = () => {
  return (
    <section className="pt-20 px-6">
      <div className="mx-auto max-w-7xl flex flex-col xl:flex-row gap-6">
        {/* Left Content */}
        <div className="w-full md:max-w-md xl:max-w-none xl:w-[30%] mx-auto xl:mx-0 bg-[#008521]/40 rounded-2xl p-8 flex flex-col justify-center items-center xl:items-start text-center xl:text-left">
          {" "}
          <h2 className="text-3xl font-semibold text-[#2C2C2C]">
            Shop by Category
          </h2>
          <p className="mt-3 text-gray-700">
            Everything you need for your health & wellness.
          </p>
          <div className="mt-6">
            <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-black text-sm font-medium">
              Explore
              <GoArrowRight />
            </button>
          </div>
        </div>

        {/* Right Features Grid */}
        <div className="xl:w-[70%] flex flex-col md:flex-row justify-center items-center gap-6 bg-[#C9FF8F] rounded-2xl p-8">
          <div className="flex flex-col items-center text-center">
            <CiGlobe className="text-2xl mb-4 text-[#817400]" />
            <h3 className="font-semibold text-[22px] text-[#7F7700]">
              Reliable Bulk Supply
            </h3>
            <p className="mt-2 text-gray-700">
              Reliable inventory for large-scale orders.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <CiGlobe className="text-2xl mb-4 text-[#817400]" />
            <h3 className="font-semibold text-[22px] text-[#7F7700]">
              Quality Assurance
            </h3>
            <p className="mt-2 text-gray-700">
              Strict quality checks for every product batch.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <PiBuildingOfficeLight className="text-2xl mb-4 text-[#817400]" />
            <h3 className="font-semibold text-[22px] text-[#7F7700]">
              Global Distribution
            </h3>
            <p className="mt-2 text-gray-700">
              Efficient shipping across international markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
