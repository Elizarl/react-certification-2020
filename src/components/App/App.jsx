import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth/Auth';
import GlobalProvider from '../../providers/GlobalContext/GlobalContext';
import Theme from '../../providers/Theme/Theme';
import HomePage from '../../pages/Home';
import Private from '../Private/Private';
import Favorites from '../../pages/Favorites/Favorites';
import VideoDetail from '../../pages/VideoDetail';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalProvider>
          <Theme>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/video/:id">
                <VideoDetail />
              </Route>
              <Private component={Favorites} exact path="/favorites" />
              <Route path="*" />
            </Switch>
          </Theme>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
