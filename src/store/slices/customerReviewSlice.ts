import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CUSTOMER_REVIEW } from '../../utils/mockData';

interface Review {
  id: number;
  image: string;
  review: string;
  name: string;
  verifiedIcon: string;
  verifiedBuyer: boolean;
}

interface ReviewState {
  reviews: Review[];
}

const initialState: ReviewState = {
  reviews: CUSTOMER_REVIEW,
};

const customerReviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<Review>) => {
      state.reviews.push(action.payload);
    },
    removeReview: (state, action: PayloadAction<number>) => {
      state.reviews = state.reviews.filter((review) => review.id !== action.payload);
    },
    updateReview: (state, action: PayloadAction<Review>) => {
      const index = state.reviews.findIndex((review) => review.id === action.payload.id);
      if (index !== -1) {
        state.reviews[index] = action.payload;
      }
    },
  },
});

export const { addReview, removeReview, updateReview } = customerReviewSlice.actions;
export default customerReviewSlice.reducer;
