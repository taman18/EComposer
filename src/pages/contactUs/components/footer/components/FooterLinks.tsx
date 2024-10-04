import React from "react";
import { NavigationLinksProps } from "./Footer.types";

const FooterLinks: React.FC<NavigationLinksProps> = ({
  links,
  sectionTitle,
}) => {
  return (
    <section className="md:mb-10 sm:mb-5 md:mx-0 md:my-0 my-5 mr-4 sm:px-0" data-aos="fade-up">
      <h1 className="font-medium text-xl pb-2" >{sectionTitle}</h1>
      {links?.map((item) => (
        <div key={item?.id} className="py-1">
          <span className="text-[#3F3F3F] cursor-pointer text-base transition-all duration-200 ease-linear hover:text-[#fd8e00]">
            {item?.title}
          </span>
        </div>
      ))}
    </section>
  );
};

export default FooterLinks;
