import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalProvider from '../../providers/GlobalContext';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import VideoDetail from '../../pages/VideoDetail';
import Theme from '../../providers/Theme';

function App() {
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
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Theme>
        </GlobalProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
