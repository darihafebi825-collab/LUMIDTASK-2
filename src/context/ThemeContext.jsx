import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('scarlet-theme') !== 'light';
  });

  useEffect(() => {
    localStorage.setItem('scarlet-theme', isDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);
  const setDark = () => setIsDark(true);
  const setLight = () => setIsDark(false);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, setDark, setLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
