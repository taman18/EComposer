import React from "react";
import { useSelector } from "react-redux";
import Stars from "../../../../../components/common/Stars";
import { RootState } from "../../../../../app/store";

interface Review {
  id: number;
  image: string;
  review: string;
  name: string;
  verifiedIcon: string;
  verifiedBuyer: boolean;
}

const ReviewCard: React.FC = () => {
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  return (
    <>
      {reviews.map(({ id, image, name, review }: Review) => (
        <div
          key={id}
          className="p-2 m-2 rounded-xl flex flex-col bg-[#f4f7ff] h-fit"
        >
          <img
            src={image}
            alt={name}
            className="rounded-lg mb-2"
          />
          <div className="p-2">
            <div className="flex justify-center md:justify-start">
              <Stars count={5} color="brown" />
            </div>
            <p className="text-wrap flex-grow mb-4 text-center md:text-left">{review}</p>
            <h2 className="font-bold text-center md:text-left">{name}</h2>
            <span className="flex items-center justify-center md:justify-start">
              <img
                src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Wdo7jIDYNpchecked-ic.png?v=1716195426"
                alt="tick"
                className="h-[15px] mr-1"
              />
              <p>Verified Buyer</p>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewCard;
