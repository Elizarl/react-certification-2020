import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalProvider from '../../providers/GlobalContext/GlobalContext';
import AuthProvider from '../../providers/Auth/Auth';
import HomePage from '../../pages/Home';
import Private from '../Private/Private';
import VideoDetail from '../../pages/VideoDetail';
import Theme from '../../providers/Theme/Theme';

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
              <Private exact path="/favorites" />
              <Route path="*" />
            </Switch>
          </Theme>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
