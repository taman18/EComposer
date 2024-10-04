import React from "react";
import Stars from "../../../../../components/common/Stars";
import { TiTick } from "react-icons/ti";
import { PersonalizedReviewProps } from "./PersonalizedReview.type";


const PersonalizedReview: React.FC<PersonalizedReviewProps> = ({
  reviewerName,
  reviewText,
  reviewerImage,
  verified,
}) => {
  return (
    <section className="p-10 border bg-[#FFCC49] rounded-2xl">
      <div className="flex py-2">
        <Stars />
      </div>
      <h2 className="py-2 font-bold">Exactly what I needed</h2>
      <p className="py-2 font-normal text-sm">{reviewText}</p>
      <div className="flex py-2">
        <img
          src={reviewerImage}
          alt={reviewerName}
          className="h-[70px] w-[70px] rounded-full"
        />
        <div className="px-4">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-vHxdueatCdflag.png?v=1716167688"
            alt="flag"
            className="h-[15px]"
          />
          <div>
            <h4 className="font-medium text-sm pt-1">{reviewerName}</h4>
            <span className="flex items-center">
              {verified && <TiTick />}
              <p className="text-sm">{verified ? "Verified Buyer" : "Buyer"}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedReview;
