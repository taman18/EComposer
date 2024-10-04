import React from "react";
import { FEATURE_DATA } from "../../../../utils/mockData";

const ShippingAndService: React.FC = () => {
  return (
    <>
      <section className="flex bg-[#FAFAFA] rounded-2xl p-5 justify-center flex-wrap ">
        {FEATURE_DATA?.map((item) => (
          <div
            key={item?.id}
            className="flex flex-col items-center max-w-[300px]"
          >
            <img src={item?.icon} alt={item?.title} className="h-[50px]" />
            <h1 className="font-bold py-5">{item?.title}</h1>
            <p className="text-center text-sm">{item?.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default ShippingAndService;
