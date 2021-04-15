import React, { useState, useContext } from 'react';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchProvider!`);
  }
  return context;
}

function SearchProvider({ children }) {
  const [query, setQuery] = useState('pokemon');

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchProvider as default, useSearch };
