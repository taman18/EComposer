import React from "react";
import Button from "../../../../components/common/Button";
import { TrackingReturnCardProps } from "./TrackingReturnCard.types";

const TrackingReturnCard: React.FC<TrackingReturnCardProps> = ({
  customerSupportOptions,
}) => {
  return (
    <section className="flex justify-center flex-wrap  relative z-10 mt-[-150px]">
      {customerSupportOptions.map((item) => (
        <div
         data-aos="fade-up"
          key={item.id}
          className="flex flex-col items-center border flex-wrap m-3 bg-[#fff] rounded-xl sm:min-w-[330px] md:min-w-[450px] px-10 py-10"
        >
          <img
            src={item.iconUrl}
            alt={`${item.title} icon`}
            className="h-[50px] w-[50px] p-1"
          />
          <h2 className="pt-4 pb-2 text-[#3F3F3F] text-xl font-normal">
            {item.title}
          </h2>
          <p className="pb-4 text-[#848484] text-center">{item.description}</p>
          <Button text={item.actionText} />
        </div>
      ))}
    </section>
  );
};

export default TrackingReturnCard;
