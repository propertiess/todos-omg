import { createSlice } from '@reduxjs/toolkit';
import { PaletteMode } from '@mui/material';

interface Mode {
  mode: PaletteMode;
}

const initialState: Mode = { mode: 'light' };

const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchGlobalMode: state => {
      if (state.mode === 'light') state.mode = 'dark';
      else state.mode = 'light';
    }
  }
});

export const { switchGlobalMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;
