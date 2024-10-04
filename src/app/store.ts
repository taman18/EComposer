import { configureStore } from '@reduxjs/toolkit';
import customerReviewSlice from '../features/customerReviewSlice';
import dadGiftSlice from '../features/dadGiftSlice';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
    reviews: customerReviewSlice,
    dadGifts : dadGiftSlice,
  },
});

export default store;
