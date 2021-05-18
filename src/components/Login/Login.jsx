import React, { useState } from 'react';
import Alert from '@material-ui/lab/Alert';
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

  const { user, setUser } = useGlobal();
  const { pass, setPass } = useGlobal();
  const [errorMessage, setErrorMessage] = useState(false);

  async function loginApi() {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (user === 'wizeline' && pass === 'Rocks!') {
          login();
          setShowCredential(false);
          return resolve();
        }
        setErrorMessage(true);
        return resolve();
      }, 500);
    });
  }

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
        {errorMessage === true ? (
          <Alert severity="error">Username or password invalid</Alert>
        ) : (
          ''
        )}
        <TextField
          autoFocus
          margin="dense"
          id="user"
          label="User"
          type=""
          placeholder="wizeline"
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
          placeholder="Rocks!"
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
