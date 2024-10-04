import React from "react";
import PersonalizedReview from "./components/PersonalizedReview";
import ReviewCard from "./components/ReviewCard";
import { CustomerReviewsProps } from "./components/CustomerReviews.type";

const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  personalizedReview,
}) => {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-20">
      <section className="flex flex-col w-[80%] pb-20">
        <div className="flex w-full flex-wrap justify-between px-2 py-10">
          <div className="w-[500px] flex flex-col justify-end pb-20">
            <h1 className="text-3xl font-bold py-2 md:text-left text-center">
              CUSTOMER REVIEWS
            </h1>
            <p className="py-2 text-wrap md:text-left text-center">
              Read testimonials from satisfied customers who have found the
              perfect Father's Day gift with us.
            </p>
          </div>
          <div className="w-[570px] min-w-[170px]">
            <PersonalizedReview
              reviewerName={personalizedReview.reviewerName}
              reviewText={personalizedReview.reviewText}
              reviewerImage={personalizedReview.reviewerImage}
              verified={personalizedReview.verified}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ReviewCard />
        </div>
      </section>
    </section>
  );
};

export default CustomerReviews;
