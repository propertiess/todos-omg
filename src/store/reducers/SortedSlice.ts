import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sort } from '../../models/Sort';

const initialState: Sort[] = [
  { name: '', active: true },
  { name: 'title', active: false },
  { name: 'priority', active: false },
  { name: 'end', active: false }
];

const SortedSlice = createSlice({
  name: 'sorted',
  initialState,
  reducers: {
    setActiveSort: (
      state,
      action: PayloadAction<{ name: string; active?: boolean }>
    ) => {
      state.map(el => (el.active = false));
      const i = state.findIndex(el => el.name === action.payload.name);
      state[i].active = true;
    }
  }
});

export const { setActiveSort } = SortedSlice.actions;

export default SortedSlice.reducer;
