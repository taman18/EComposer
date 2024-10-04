import React from "react";
import { ITEM_SPECIFICATION } from "../../../../utils/mockData";

const FeatureDetails: React.FC = () => {
  return (
    <>
      <section className="px-10 py-10 md:p-20 bg-[#3A4253] ">
        <div className="flex flex-col md:flex-row  md:justify-between gap-2">
          <div className="flex-1 ">
            <div className="grid grid-cols-1 gap-6">
              {ITEM_SPECIFICATION?.slice(0, 2).map((item) => (
                <div key={item?.id} className="flex md:flex-row flex-col md:items-start  items-center">
                  <img src={item.icon} alt={item?.title} className="py-12  w-[72px] max-h-[168px]" />
                  <div className="md:p-10">
                    <h1 className="text-xl font-medium mb-2 text-[#FFFFFF] md:text-left text-center">
                      {item?.title}
                    </h1>
                    <p className="text-[#FFFFFF] text-wrap  font-normal text-sm md:text-left text-center">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-first md:order-none w-full md:w-auto md:flex-1 flex justify-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-EmpgwFXEsDbn-gr-layer-2-1.png?v=1715911229"
              alt="Feature Image"
              className="max-w-[300px] max-h-[300px] md:w-[400px] md:h-[400px]"
              data-aos="zoom-in"
            />
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-2">
              {ITEM_SPECIFICATION.slice(2)?.map((item) => (
                <div key={item.id} className="flex md:flex-row flex-col md:items-start  items-center">
                  <img src={item?.icon} alt={item?.title} className="py-12 w-[72px] max-h-[168px]" />
                  <div className="md:p-10">
                    <h1 className="text-xl font-medium mb-2 text-[#FFFFFF] md:text-left text-center">
                      {item?.title}
                    </h1>
                    <p className=" text-[#FFFFFF] font-normal text-sm md:text-left text-center">
                      {item?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureDetails;