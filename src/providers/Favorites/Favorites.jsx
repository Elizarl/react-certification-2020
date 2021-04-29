import React, { useEffect, useContext, useReducer } from 'react';

import { storage } from '../../utils/storage';
import { useAuth } from '../Auth/Auth';
import favoritesReducer from '../../reducers/Favorites';

const FavoritesContext = React.createContext([]);

const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error(`Can't use "useFavorites" without a FavoritesProvider!`);
  }
  return context;
};

const FavoritesProvider = ({ children }) => {
  const [favorites, favoritesDispatch] = useReducer(favoritesReducer, []);
  const { authenticated } = useAuth();
  const userFavoritesStorageKey = `FAVORITES`;

  const removeFavorite = (id = '') => {
    favoritesDispatch({
      type: 'REMOVE_FAVORITE',
      id,
    });
  };

  const addFavorite = (video = {}) => {
    favoritesDispatch({
      type: 'ADD_FAVORITE',
      favorite: video,
    });
  };

  const clearFavorites = () => {
    favoritesDispatch({ type: 'CLEAR_FAVORITES' });
  };

  const populateFavorites = (videos = []) => {
    favoritesDispatch({ type: 'POPULATE_FAVORITES', favorites: videos });
  };

  useEffect(() => {
    if (authenticated) {
      const favoritesData = storage.get(userFavoritesStorageKey);
      if (favoritesData) {
        populateFavorites(favoritesData);
      }
    } else {
      clearFavorites();
    }
  }, [authenticated, userFavoritesStorageKey]);

  useEffect(() => {
    if (authenticated) {
      storage.set(userFavoritesStorageKey, favorites);
    }
  }, [authenticated, favorites, userFavoritesStorageKey]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        populateFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { useFavorites, FavoritesProvider as default };
