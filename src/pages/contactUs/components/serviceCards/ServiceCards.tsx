import React from "react";
import { ServiceCardsProps } from "./ServiceCards.types";


const ServiceCards: React.FC<ServiceCardsProps> = ({
  features,
  sectionTitle,
}) => {
  return (
    <section className="lg:px-10 md:px-5 px-5" >
      <div className="flex justify-center py-20">
        <h1 className="text-3xl lg:text-4xl text-center font-medium text-[#373737] pb-2">
          {sectionTitle}
        </h1>
      </div>
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 py-10 pb-20">
        {features?.map((feature) => (
          <div
            key={feature.id}
            className="p-10 rounded-2xl bg-[#F4F4FF] min-w-[230px] "
            data-aos="fade-up"
          >
            <img
              src={feature?.iconUrl}
              alt={feature?.title}
              className="h-[60px] px-2"
            />
            <h3 className="text-2xl pt-4 pb-1 px-2" >{feature?.title}</h3>
            <p className="text-[#00000080] pb-3 px-2">{feature?.description}</p>
            <span className="text-[3F3F3F] px-2 cursor-pointer transition-all duration-200 ease-linear hover:text-[#fd8e00]">
              {feature?.actionText}
            </span>
          </div>
        ))}
      </section>
    </section>
  );
};

export default ServiceCards;
