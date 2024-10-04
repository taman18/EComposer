import { createSlice } from '@reduxjs/toolkit';
import { DAD_GIFT_IMG } from '../utils/mockData';

const dadGiftSlice = createSlice({
  name: 'dadGifts',
  initialState: {
    items: DAD_GIFT_IMG,
  },
  reducers: {
  },
});

export const selectDadGifts = (state: { dadGifts: { items: any[] } }) => state.dadGifts.items;
export default dadGiftSlice.reducer;
