const CategorySection = () => {
  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col xl:flex-row items-center gap-5">
        <div className="flex flex-col justify-center text-center xl:text-left h-full px-2">
          <h2 className="text-[36px] text-[#2C2C2C]">Shop by category</h2>
          <p className="">
            Everything you need best for your health & wellness{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="relative">
            <img
              src="https://res.cloudinary.com/dasvdkncm/image/upload/v1782139634/Rectangle_3463776_pq3zcv.png"
              alt="Hair Care"
              className="w-full"
            />
            <span className="absolute bottom-4 left-4 text-white text-lg font-medium">
              Hair Care
            </span>
          </div>

          <div className="relative">
            <img
              src="https://res.cloudinary.com/dasvdkncm/image/upload/v1782139634/Rectangle_3463777_dr09uz.png"
              alt="Skin Care"
              className="w-full"
            />
            <span className="absolute bottom-4 left-4 text-white text-lg font-medium">
              Skin Care
            </span>
          </div>

          <div className="relative col-span-2 md:col-span-1 justify-self-center">
            <img
              src="https://res.cloudinary.com/dasvdkncm/image/upload/v1782139634/Rectangle_3463778_xvuwza.png"
              alt="Health & Wellness"
              className="w-full"
            />
            <span className="absolute bottom-4 left-4 text-white text-lg font-medium">
              Health & Wellness
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
