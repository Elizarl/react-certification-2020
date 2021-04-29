import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth/Auth';
import GlobalProvider from '../../providers/GlobalContext/GlobalContext';
import Theme from '../../providers/Theme/Theme';
import HomePage from '../../pages/Home';
import Private from '../Private/Private';
import Favorites from '../../pages/Favorites/Favorites';
import VideoDetail from '../../pages/VideoDetail';
import FavoritesProvider from '../../providers/Favorites/Favorites';
import NotFound from '../../pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <FavoritesProvider>
          <GlobalProvider>
            <Theme>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/video/:id">
                  <VideoDetail />
                </Route>
                <Private exact path="/favorites">
                  <Favorites />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Theme>
          </GlobalProvider>
        </FavoritesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
