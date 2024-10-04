import React from "react";
import ContactFooter from "./components/ContactFooter";
import FooterCopyright from "./components/FooterCopyright";
import {
  COPY_RIGHT_TEXT,
  COPY_RIGHT_IMG,
  FOOTER_INFO,
  FOOTER_SECTION,
} from "../../../../utils/mockData";
import FooterLinks from "./components/FooterLinks";

const Footer: React.FC = () => {
  return (
    <footer>
      <section className="py-10 lg:px-20 border-t-2 grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-5 px-5 flex-wrap">
        <div className="md:col-span-5 lg:col-span-2">
          <ContactFooter links={FOOTER_INFO} />
        </div>
        {FOOTER_SECTION?.map((section) => (
          <div key={section.id} className="md:col-span-2 lg:col-span-1">
            <FooterLinks links={section?.links} sectionTitle={section?.title} />
          </div>
        ))}
      </section>
      <FooterCopyright
        copyrightText={COPY_RIGHT_TEXT}
        imageUrl={COPY_RIGHT_IMG}
      />
    </footer>
  );
};

export default Footer;
