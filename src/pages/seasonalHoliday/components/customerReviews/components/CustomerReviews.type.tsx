export interface CustomerReviewsProps {
    personalizedReview: {
      reviewerName: string;
      reviewText: string;
      reviewerImage: string;
      verified: boolean;
    };
    customerReviews: {
      id: string | number;
      image: string;
      name: string;
      review: string;
    }[];
  }