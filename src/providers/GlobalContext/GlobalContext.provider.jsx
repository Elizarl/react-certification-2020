import React, { useState, useContext } from 'react';

const GlobalContext = React.createContext(null);

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchProvider!`);
  }
  return context;
}

function GlobalProvider({ children }) {
  const [query, setQuery] = useState('pokemon');
  const [theme, setTheme] = useState(false);

  return (
    <GlobalContext.Provider value={{ query, setQuery, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider as default, useGlobal };
