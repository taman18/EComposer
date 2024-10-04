import React from "react";
import InteractiveProductDisplay from "./components/InteractiveProductDisplay";
import BraceletCustomizerWithDetails from "./components/BraceletCustomizerWithDetails";
import { BEAD_OPTION, COLOR_AND_SIZE_OPTION, CUSTOMIZABLE_BRACELET_IMAGES, ENGRAVING_DETAILS } from "../../../../utils/mockData";

const PersonalizedOptions: React.FC = () => {

  return (
    <>
      <section className="flex flex-col items-center">
        <section className="flex flex-wrap justify-between md:p-10 p-0 md:p-0 py-10">
          <InteractiveProductDisplay
            images={CUSTOMIZABLE_BRACELET_IMAGES}
            soldCount="8k"
            mainText="GIFT PACKING"
            subText="All bracelets come beautifully packaged, ready to be presented to Dad on Father's Day."
            giftPackingImage="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-KciEziG9nrbg-ft.png?v=1715934170"
            mainProductImage="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-E5f708NDd9flag-pro.png?v=1716198160"
          />
          <BraceletCustomizerWithDetails
            ratingCount={100}
            productTitle="Personalize Daddy Bracelet, Family Bracelet"
            isOutOfStock={true}
            currentPrice="399.00"
            originalPrice="499.00"
            viewersCount={30}
            beadOptions={BEAD_OPTION}
            colorAndSizeOptions={COLOR_AND_SIZE_OPTION}
            engravingDetails={ENGRAVING_DETAILS}
          />
        </section>
      </section>
    </>
  );
};

export default PersonalizedOptions;
