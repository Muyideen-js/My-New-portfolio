import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  primary: '#4F46E5',
  secondary: '#EC4899',
  background: '#F8FAFC',
  cardBg: 'rgba(255, 255, 255, 0.9)',
  glassBg: 'rgba(255, 255, 255, 0.7)',
  text: '#1E293B',
  textSecondary: '#64748B',
  border: 'rgba(148, 163, 184, 0.1)',
  shadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
};

const darkTheme = {
  primary: '#818CF8',
  secondary: '#F472B6',
  background: '#0F172A',
  cardBg: 'rgba(30, 41, 59, 0.9)',
  glassBg: 'rgba(30, 41, 59, 0.7)',
  text: '#F8FAFC',
  textSecondary: '#94A3B8',
  border: 'rgba(148, 163, 184, 0.1)',
  shadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 