import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { MilkReceiptResponse, MilkReceiptRow } from '../../types/response/milk-receipt';

interface initialState {
  milkReceiptList: MilkReceiptRow[];
}

const initialState: initialState = {
  milkReceiptList: [],
};

const userSlice = createSlice({
  name: 'milk-receipt',
  initialState,
  reducers: {
    setMilkReceiptList: (state, action: PayloadAction<MilkReceiptResponse>) => {
      state.milkReceiptList = action.payload.data;
    },
  },
});

export const { setMilkReceiptList } = userSlice.actions;
export default userSlice.reducer;
