import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useAuth } from '../../providers/Auth/Auth';
import { useGlobal } from '../../providers/GlobalContext/GlobalContext';

const LoginDialog = ({ showCredential, setShowCredential }) => {
  const { login } = useAuth();
  const history = useHistory();
  const { user, setUser } = useGlobal();
  const { pass, setPass } = useGlobal();

  // const mockedUser = {
  //   id: '123',
  //   name: 'Wizeline',
  //   avatarUrl:
  //     'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
  // };

  async function loginApi() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'wizeline' && pass === 'Rocks!') {
          login();
          setShowCredential(false);
          return resolve(history.push('/favorites'));
        }
        return reject(new Error(':c'));
      }, 500);
    });
  }

  // const authenticate = (event) => {
  //   event.preventDefault();
  //   login();
  //   // history.push('/favorites');
  //   setShowCredential(false);
  // };

  const handleClose = () => {
    setShowCredential(false);
  };

  return (
    <Dialog
      open={showCredential}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="user"
          label="User"
          type=""
          fullWidth
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={loginApi} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
