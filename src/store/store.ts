import { configureStore } from '@reduxjs/toolkit';
import customerReviewSlice from './slices/customerReviewSlice';
import dadGiftSlice from './slices/dadGiftSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    reviews: customerReviewSlice,
    dadGifts : dadGiftSlice,
  },
});

export default store;
