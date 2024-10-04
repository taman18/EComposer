import React from "react";
import { FooterCopyrightProps } from "./Footer.types";

const FooterCopyright: React.FC<FooterCopyrightProps> = ({
  copyrightText,
  imageUrl,
}) => {
  return (
    <section className="md:px-20 lg:px-20 px-10">
      <hr />
      <div className="flex items-center flex-wrap py-3 justify-center lg:justify-between m-auto" >
        <p className="text-[#373737] text-wrap text-center text-sm mb-3 sm:mb-3">
          {copyrightText}
        </p>
        <img src={imageUrl} alt="Copyright Image" className="h-[25px]" />
      </div>
    </section>
  );
};

export default FooterCopyright;
