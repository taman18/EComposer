import React from "react";
import { CustomerSupportProps } from "../footer/components/Footer.types";

const CustomerSupport: React.FC<CustomerSupportProps> = ({
  contactOptions,
}) => {
  return (
    <section className="lg:p-20 flex flex-col items-center p-5 text-center">
      <h1 className="text-4xl font-medium py-3" data-aos="fade-up">Any other questions?</h1>
      <p className="text-[#424242] font-medium pb-20 text-center" data-aos="fade-up">
        We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
        Weekends: 6am to 6pm PT.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 border md:p-10 p-0 rounded-2xl min-w-[300px] w-full py-5" data-aos="fade-up">
        {contactOptions.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center md:px-10
              ${index > 0 ? "md:border-l border-gray-300" : ""}
              ${index % 2 !== 0 ? "sm:border-l border-gray-300" : ""}`}
          >
            <img
              src={item.icon}
              alt={item.type}
              className="md:h-[60px] md:min-w-[60px] w-[40px] h-[40px] cursor-pointer"
            />
            <h1 className="py-2 text-xl font-medium md:text-2xl">
              {item.type}
            </h1>
            <u className="text-l md:text-xl font-normal cursor-pointer transition-all duration-300 ease-linear hover:text-[#fd8e00]">
              {item.value}
            </u>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerSupport;
