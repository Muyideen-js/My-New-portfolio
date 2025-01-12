import { createContext, useContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  primary: '#2563eb',
  background: '#ffffff',
  text: '#1e293b',
  cardBackground: '#ffffff',
  // Add more theme values
};

const darkTheme = {
  primary: '#3b82f6',
  background: '#0f172a',
  text: '#f8fafc',
  cardBackground: '#1e293b',
  // Add more theme values
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 