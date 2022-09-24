import React, { createContext, FC, useState } from 'react';
import { createTheme, Theme } from '@mui/material';
import { useAppSelector } from '../store/hooks/useAppSelector';
import { useAppDispatch } from '../store/hooks/useAppDispatch';
import { switchGlobalMode } from '../store/reducers/ThemeSlice';

interface ITheme {
  theme: Theme;
  switchMode: () => void;
}

const initialState: ITheme = {
  theme: createTheme({
    palette: {
      mode: 'dark'
    }
  }),
  switchMode: () => {}
};

export const ThemeContext = createContext(initialState);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: FC<ThemeProviderProps> = ({ children }) => {
  const globalTheme = useAppSelector(state => state.theme);
  const [theme, setTheme] = useState<Theme>(
    createTheme({ palette: { mode: globalTheme.mode } })
  );
  const dispatch = useAppDispatch();

  const switchMode = () => {
    if (theme.palette.mode === 'light') {
      setTheme(createTheme({ palette: { mode: 'dark' } }));
      dispatch(switchGlobalMode());
      return;
    }

    setTheme(createTheme({ palette: { mode: 'light' } }));
    dispatch(switchGlobalMode());
  };

  return (
    <ThemeContext.Provider value={{ theme, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
