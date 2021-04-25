import React, { useState, useContext } from 'react';

const GlobalContext = React.createContext(null);

const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchProvider!`);
  }
  return context;
};

const GlobalProvider = ({ children }) => {
  const [query, setQuery] = useState('pokemon');
  const [theme, setTheme] = useState(false);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  return (
    <GlobalContext.Provider
      value={{ query, setQuery, theme, setTheme, user, setUser, pass, setPass }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider as default, useGlobal };
